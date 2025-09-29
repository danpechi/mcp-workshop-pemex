#!/bin/bash

# Quick fix script for common Databricks authentication issues

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m'

print_status() { echo -e "${GREEN}✅${NC} $1"; }
print_info() { echo -e "${BLUE}ℹ️${NC}  $1"; }
print_warning() { echo -e "${YELLOW}⚠️${NC}  $1"; }
print_error() { echo -e "${RED}❌${NC} $1"; }
print_header() { echo -e "${PURPLE}$1${NC}"; }

echo -e "${PURPLE}🔧 Databricks Authentication Quick Fix${NC}"
echo -e "${PURPLE}=====================================${NC}"
echo ""

# Load existing config if available
if [ -f ".env.local" ]; then
    source .env.local
fi

print_header "🔍 Diagnosing Issues"

# Check if this is Austin's specific issue
if [ "$DATABRICKS_AUTH_TYPE" = "pat" ]; then
    print_info "Detected PAT authentication setup"
    
    if [ -z "$DATABRICKS_TOKEN" ] || [ -z "$DATABRICKS_HOST" ]; then
        print_error "Missing PAT credentials"
        print_info "Please run ./setup.sh to reconfigure"
        exit 1
    fi
    
    # Test current token
    export DATABRICKS_HOST="$DATABRICKS_HOST"
    export DATABRICKS_TOKEN="$DATABRICKS_TOKEN"
    
    if ! databricks current-user me >/dev/null 2>&1; then
        print_warning "Current PAT token is invalid or expired"
        
        echo ""
        print_header "🔄 Token Refresh Options"
        echo "1. Generate a new Personal Access Token"
        echo "2. Switch to profile-based authentication"
        echo "3. Try OAuth login"
        echo ""
        
        read -p "$(echo -e "${BLUE}❓${NC} Select option (1-3): ")" choice
        
        case $choice in
            1)
                print_info "Please follow these steps:"
                print_info "1. Go to: ${DATABRICKS_HOST}/settings/user/developer/access-tokens"
                print_info "2. Click 'Generate new token'"
                print_info "3. Copy the token and run ./setup.sh again"
                print_info "4. Choose option 1 (PAT) and paste your new token"
                ;;
            2)
                print_info "Switching to profile authentication..."
                
                # Update auth type
                if [[ "$OSTYPE" == "darwin"* ]]; then
                    sed -i '' "s|^DATABRICKS_AUTH_TYPE=.*|DATABRICKS_AUTH_TYPE=profile|" .env.local
                else
                    sed -i "s|^DATABRICKS_AUTH_TYPE=.*|DATABRICKS_AUTH_TYPE=profile|" .env.local
                fi
                
                # Set default profile
                echo "DATABRICKS_CONFIG_PROFILE=DEFAULT" >> .env.local
                
                print_info "Attempting to configure default profile..."
                if databricks configure --profile DEFAULT; then
                    print_status "Profile configured successfully"
                    print_info "You can now run ./setup.sh again"
                else
                    print_error "Profile configuration failed"
                    print_info "Please run: databricks configure --profile DEFAULT"
                fi
                ;;
            3)
                print_info "Attempting OAuth login..."
                if databricks auth login --host "$DATABRICKS_HOST"; then
                    print_status "OAuth login successful"
                    
                    # Get the new token
                    NEW_TOKEN=$(databricks auth token --host "$DATABRICKS_HOST" 2>/dev/null | grep -o '"access_token":"[^"]*"' | cut -d'"' -f4 || echo "")
                    
                    if [ -n "$NEW_TOKEN" ]; then
                        # Update the token in .env.local
                        if [[ "$OSTYPE" == "darwin"* ]]; then
                            sed -i '' "s|^DATABRICKS_TOKEN=.*|DATABRICKS_TOKEN=${NEW_TOKEN}|" .env.local
                        else
                            sed -i "s|^DATABRICKS_TOKEN=.*|DATABRICKS_TOKEN=${NEW_TOKEN}|" .env.local
                        fi
                        print_status "Token updated in .env.local"
                        print_info "You can now continue with deployment"
                    else
                        print_warning "Could not extract token automatically"
                        print_info "Please run ./setup.sh to reconfigure"
                    fi
                else
                    print_error "OAuth login failed"
                    print_info "Please check your workspace URL and try again"
                fi
                ;;
            *)
                print_error "Invalid option"
                exit 1
                ;;
        esac
        
    else
        print_status "PAT authentication is working"
        print_info "The issue might be with bundle deployment permissions"
        print_info "Try running: databricks bundle deploy -t dev --debug"
    fi
    
elif [ "$DATABRICKS_AUTH_TYPE" = "profile" ]; then
    print_info "Detected profile authentication setup"
    
    if [ -z "$DATABRICKS_CONFIG_PROFILE" ]; then
        print_error "Profile name not set"
        DATABRICKS_CONFIG_PROFILE="DEFAULT"
    fi
    
    if ! databricks current-user me --profile "$DATABRICKS_CONFIG_PROFILE" >/dev/null 2>&1; then
        print_warning "Profile authentication failed"
        print_info "Attempting to fix profile: $DATABRICKS_CONFIG_PROFILE"
        
        if databricks auth login --profile "$DATABRICKS_CONFIG_PROFILE"; then
            print_status "Profile authentication fixed"
        else
            print_error "Could not fix profile authentication"
            print_info "Try: databricks configure --profile $DATABRICKS_CONFIG_PROFILE"
        fi
    else
        print_status "Profile authentication is working"
    fi
    
else
    print_warning "No authentication configured"
    print_info "Run ./setup.sh to configure authentication"
    exit 1
fi

echo ""
print_header "🧪 Testing Bundle Deployment"

# Test bundle validation
if databricks bundle validate >/dev/null 2>&1; then
    print_status "Bundle configuration is valid"
else
    print_error "Bundle validation failed"
    print_info "Run: databricks bundle validate"
    exit 1
fi

# Test a simple deployment command
print_info "Testing bundle deployment (dry run)..."
if [ "$DATABRICKS_AUTH_TYPE" = "profile" ]; then
    if databricks bundle deploy -t dev --dry-run --profile "$DATABRICKS_CONFIG_PROFILE" >/dev/null 2>&1; then
        print_status "Bundle deployment test passed"
        print_info "You should be able to run ./setup.sh successfully now"
    else
        print_error "Bundle deployment test failed"
        print_info "Check your workspace permissions for creating apps and jobs"
    fi
else
    if databricks bundle deploy -t dev --dry-run >/dev/null 2>&1; then
        print_status "Bundle deployment test passed"
        print_info "You should be able to run ./setup.sh successfully now"
    else
        print_error "Bundle deployment test failed"
        print_info "Check your workspace permissions for creating apps and jobs"
    fi
fi

echo ""
print_status "Authentication fix complete!"
print_info "If issues persist, run ./debug_auth.sh for detailed diagnostics"
