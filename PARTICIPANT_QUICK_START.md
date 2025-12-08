# 🚀 MCP Workshop - Participant Quick Start

**Your workshop admin has already set up your environment!** Follow these steps to get started.

---

## What You Need From Your Admin

Before starting, get this info from your workshop admin:

| Info | Example | Your Value |
|------|---------|------------|
| **Catalog Name** | `customer_dec9_2025` | _____________ |
| **Your Schema Name** | `john_doe` | _____________ |

---

## Setup (5 Minutes)

### Step 1: Clone the Repository

```bash
git clone https://github.com/databricks-solutions/mcp-workshop
cd mcp-workshop
```

### Step 2: Authenticate to Databricks

```bash
# Replace with your workspace URL
databricks auth login --host https://YOUR-WORKSPACE.cloud.databricks.com

# Verify it works
databricks current-user me
```

### Step 3: Create Configuration Files

Create **two** files with your workshop details. Use your code editor (VS Code, etc.) to create these files.

---

#### File 1: `.env.local` (in the repo root: `mcp-workshop/.env.local`)

Create a new file called `.env.local` in the `mcp-workshop` folder with this content:

```
WORKSHOP_CATALOG=<your_catalog>
WORKSHOP_SCHEMA=<your_schema>
PARTICIPANT_NAME=<your_schema>
PARTICIPANT_PREFIX=<your_schema>
MCP_APP_NAME=mcp-custom-server-<your_schema>
CREATE_CATALOG=false
```

**Replace `<your_catalog>` and `<your_schema>` with the values from your admin.**

**Example** (if catalog=`customer_dec9_2025` and schema=`john_doe`):
```
WORKSHOP_CATALOG=customer_dec9_2025
WORKSHOP_SCHEMA=john_doe
PARTICIPANT_NAME=john_doe
PARTICIPANT_PREFIX=john_doe
MCP_APP_NAME=mcp-custom-server-john-doe
CREATE_CATALOG=false
```

---

#### File 2: `frontend/.env.local` (in the frontend folder: `mcp-workshop/frontend/.env.local`)

Create a new file called `.env.local` in the `mcp-workshop/frontend` folder with this content:

```
NEXT_PUBLIC_WORKSHOP_CATALOG=<your_catalog>
NEXT_PUBLIC_WORKSHOP_SCHEMA=<your_schema>
```

**Replace `<your_catalog>` and `<your_schema>` with the values from your admin.**

**Example** (if catalog=`customer_dec9_2025` and schema=`john_doe`):
```
NEXT_PUBLIC_WORKSHOP_CATALOG=customer_dec9_2025
NEXT_PUBLIC_WORKSHOP_SCHEMA=john_doe
```

### Step 4: Start the Workshop

```bash
cd frontend
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## ⚠️ Important: Using YOUR Schema

The workshop shows examples like:
```sql
mcp_workshop_<your_prefix>.default.products
```

**You should use YOUR catalog and schema instead:**
```sql
YOUR_CATALOG.YOUR_SCHEMA.products
```

### Example Substitutions

| Workshop Shows | You Type |
|---------------|----------|
| `mcp_workshop_<your_prefix>` | `customer_dec9_2025` (your catalog) |
| `.default.` | `.john_doe.` (your schema) |
| `mcp_workshop_<your_prefix>.default.products` | `customer_dec9_2025.john_doe.products` |

### Your Tables

Your sample data is already loaded:
- `YOUR_CATALOG.YOUR_SCHEMA.products` (100 rows)
- `YOUR_CATALOG.YOUR_SCHEMA.customers` (500 rows)
- `YOUR_CATALOG.YOUR_SCHEMA.sales` (1000 rows)

---

## Workshop Sections

| Section | What You'll Do |
|---------|---------------|
| **1. Managed MCP** | Create Unity Catalog functions, use Genie spaces |
| **2. External MCP** | Connect to external MCP servers (GitHub, etc.) |
| **3. Custom MCP** | Build and deploy your own MCP server |
| **4. Local IDE** | Set up local development tools |

---

## Section-Specific Notes

### Section 1: Managed MCP - Creating Functions

When creating Unity Catalog functions, use YOUR catalog and schema:

```sql
-- Workshop example shows:
CREATE FUNCTION mcp_workshop_<your_prefix>.default.get_customer_orders(...)

-- You type (with your actual catalog/schema):
CREATE FUNCTION customer_dec9_2025.john_doe.get_customer_orders(...)
```

### Section 3: Custom MCP - Deploying Your Server

When you reach the Custom MCP section:

```bash
cd custom-mcp-template

# Load your config
source ../.env.local

# Verify your prefix is set
echo "Your prefix: $PARTICIPANT_PREFIX"

# Deploy (only when instructed in the workshop)
./deploy.sh
```

---

## Troubleshooting

### "Command not found: databricks"

Install the Databricks CLI: https://docs.databricks.com/dev-tools/cli/install.html

### "npm: command not found"

Install Node.js: https://nodejs.org/

### Frontend shows wrong catalog/schema name

Check that `frontend/.env.local` exists and has the correct values:
```bash
cat frontend/.env.local
```

Should show something like:
```
NEXT_PUBLIC_WORKSHOP_CATALOG=customer_dec9_2025
NEXT_PUBLIC_WORKSHOP_SCHEMA=john_doe
```

If it's wrong, edit the file and restart the frontend (`npm run dev`).

### "Permission denied" errors in Databricks

Contact your workshop admin - they may need to re-run permissions for your account.

---

## Quick Reference

Write down your values here:

| Item | Your Value |
|------|------------|
| **Catalog** | __________________ |
| **Schema** | __________________ |

**Your Tables:**
- `<catalog>.<schema>.products`
- `<catalog>.<schema>.customers`
- `<catalog>.<schema>.sales`

**Workshop URL:** http://localhost:3000

---

**Questions?** Ask your workshop facilitator! 🙋

