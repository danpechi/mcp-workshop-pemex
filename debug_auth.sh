#!/bin/bash

# Databricks Authentication Debug Script
# This script helps troubleshoot common authentication issues

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}✅${NC} $1"
}

print_info() {
    echo -e "${BLUE}ℹ️${NC}  $1"
}

print_warning() {
    echo -e "${YELLOW}⚠️${NC}  $1"
}

print_error() {
    echo -e "${RED}❌${NC} $1"
}

print_header() {
    echo -e "${PURPLE}$1${NC}"
}

echo -e "${PURPLE}🔍 Databricks Authentication Debug Tool${NC}"
echo -e "${PURPLE}======================================${NC}"
echo ""

# Check if .env.local exists
if [ -f ".env.local" ]; then
    print_status "Found .env.local file"
    source .env.local
    
    print_info "Configuration found:"
    print_info "  Auth Type: ${DATABRICKS_AUTH_TYPE:-not set}"
    print_info "  Host: ${DATABRICKS_HOST:-not set}"
    print_info "  Profile: ${DATABRICKS_CONFIG_PROFILE:-not set}"
    print_info "  Token: ${DATABRICKS_TOKEN:+[REDACTED - ${#DATABRICKS_TOKEN} chars]}"
    echo ""
else
    print_warning "No .env.local file found. Run ./setup.sh first."
    echo ""
fi

# Check Databricks CLI installation
print_header "🔧 Checking Databricks CLI"
if command -v databricks &> /dev/null; then
    DATABRICKS_VERSION=$(databricks --version 2>/dev/null || echo "unknown")
    print_status "Databricks CLI found: $DATABRICKS_VERSION"
else
    print_error "Databricks CLI not found"
    print_info "Install with: pip install databricks-cli"
    exit 1
fi
echo ""

# Test authentication methods
print_header "🔐 Testing Authentication"

if [ "$DATABRICKS_AUTH_TYPE" = "pat" ]; then
    print_info "Testing PAT authentication..."
    
    if [ -z "$DATABRICKS_HOST" ]; then
        print_error "DATABRICKS_HOST not set"
    elif [ -z "$DATABRICKS_TOKEN" ]; then
        print_error "DATABRICKS_TOKEN not set"
    else
        export DATABRICKS_HOST="$DATABRICKS_HOST"
        export DATABRICKS_TOKEN="$DATABRICKS_TOKEN"
        
        print_info "Testing connection to: $DATABRICKS_HOST"
        
        if databricks current-user me >/dev/null 2>&1; then
            USER_INFO=$(databricks current-user me 2>/dev/null)
            USERNAME=$(echo "$USER_INFO" | grep -o '"userName":"[^"]*"' | cut -d'"' -f4 2>/dev/null || echo "unknown")
            print_status "PAT authentication successful"
            print_info "Authenticated as: $USERNAME"
        else
            print_error "PAT authentication failed"
            print_info "Common issues:"
            print_info "  1. Token expired or invalid"
            print_info "  2. Incorrect workspace URL"
            print_info "  3. Token doesn't have required permissions"
            print_info ""
            print_info "To fix:"
            print_info "  1. Generate a new token at: ${DATABRICKS_HOST}/settings/user/developer/access-tokens"
            print_info "  2. Ensure the workspace URL is correct (no trailing slash)"
            print_info "  3. Re-run ./setup.sh to update configuration"
        fi
    fi
    
elif [ "$DATABRICKS_AUTH_TYPE" = "profile" ]; then
    print_info "Testing profile authentication..."
    
    if [ -z "$DATABRICKS_CONFIG_PROFILE" ]; then
        print_error "DATABRICKS_CONFIG_PROFILE not set"
    else
        print_info "Testing profile: $DATABRICKS_CONFIG_PROFILE"
        
        if databricks current-user me --profile "$DATABRICKS_CONFIG_PROFILE" >/dev/null 2>&1; then
            USER_INFO=$(databricks current-user me --profile "$DATABRICKS_CONFIG_PROFILE" 2>/dev/null)
            USERNAME=$(echo "$USER_INFO" | grep -o '"userName":"[^"]*"' | cut -d'"' -f4 2>/dev/null || echo "unknown")
            print_status "Profile authentication successful"
            print_info "Authenticated as: $USERNAME"
        else
            print_error "Profile authentication failed"
            print_info "Common issues:"
            print_info "  1. Profile not configured"
            print_info "  2. Profile credentials expired"
            print_info "  3. Incorrect profile name"
            print_info ""
            print_info "To fix:"
            print_info "  1. Configure profile: databricks configure --profile $DATABRICKS_CONFIG_PROFILE"
            print_info "  2. Or try OAuth login: databricks auth login --profile $DATABRICKS_CONFIG_PROFILE"
            print_info "  3. List profiles: grep '\\[' ~/.databrickscfg"
        fi
    fi
    
else
    print_warning "No authentication type configured"
    print_info "Run ./setup.sh to configure authentication"
fi

echo ""

# Test bundle validation
print_header "📦 Testing Bundle Configuration"
if [ -f "databricks.yml" ]; then
    print_status "Found databricks.yml"
    
    print_info "Validating bundle configuration..."
    if databricks bundle validate >/dev/null 2>&1; then
        print_status "Bundle configuration is valid"
    else
        print_error "Bundle configuration has issues"
        print_info "Run: databricks bundle validate"
    fi
else
    print_error "databricks.yml not found"
fi

echo ""

# Check workspace permissions
print_header "👤 Checking Permissions"
print_info "Testing workspace access..."

AUTH_CMD=""
if [ "$DATABRICKS_AUTH_TYPE" = "profile" ] && [ -n "$DATABRICKS_CONFIG_PROFILE" ]; then
    AUTH_CMD="--profile $DATABRICKS_CONFIG_PROFILE"
fi

# Test workspace access
if databricks workspace list /Users $AUTH_CMD >/dev/null 2>&1; then
    print_status "Workspace access confirmed"
else
    print_warning "Limited workspace access"
fi

# Test apps permission (if available)
if databricks apps list $AUTH_CMD >/dev/null 2>&1; then
    print_status "Apps access confirmed"
else
    print_warning "Apps access may be limited"
    print_info "Databricks Apps requires specific workspace permissions"
fi

echo ""
print_header "🎯 Next Steps"

if [ "$DATABRICKS_AUTH_TYPE" = "pat" ] && [ -n "$DATABRICKS_HOST" ] && [ -n "$DATABRICKS_TOKEN" ]; then
    if databricks current-user me >/dev/null 2>&1; then
        print_status "Authentication is working - you can proceed with deployment"
        print_info "Try running: ./setup.sh (if you haven't completed setup)"
        print_info "Or run: databricks bundle deploy -t dev"
    else
        print_error "Fix authentication issues above, then try again"
    fi
elif [ "$DATABRICKS_AUTH_TYPE" = "profile" ] && [ -n "$DATABRICKS_CONFIG_PROFILE" ]; then
    if databricks current-user me --profile "$DATABRICKS_CONFIG_PROFILE" >/dev/null 2>&1; then
        print_status "Authentication is working - you can proceed with deployment"
        print_info "Try running: ./setup.sh (if you haven't completed setup)"
        print_info "Or run: databricks bundle deploy -t dev --profile $DATABRICKS_CONFIG_PROFILE"
    else
        print_error "Fix authentication issues above, then try again"
    fi
else
    print_warning "Authentication not properly configured"
    print_info "Run: ./setup.sh to configure authentication"
fi

echo ""
print_info "For more help, see: https://docs.databricks.com/dev-tools/cli/index.html"
