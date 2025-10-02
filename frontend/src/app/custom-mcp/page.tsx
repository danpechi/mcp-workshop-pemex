import WorkshopStep from "@/components/WorkshopStep";
import CodeBlock from "@/components/CodeBlock";
import InfoBox from "@/components/InfoBox";

export default function CustomMcpPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-6 mb-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-4xl text-white shadow-lg">
              🛠️
            </div>
            <div>
              <h1 className="text-5xl font-bold text-slate-900 mb-2">Hands-On: Custom MCP Server</h1>
              <p className="text-xl text-slate-600">Build your own SQL-powered MCP server right here!</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-100 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">✨ Workshop Setup Complete!</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Your workshop setup (<code className="bg-orange-200 px-1.5 py-0.5 rounded font-mono">./setup.sh</code>) has already:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• ✅ Configured a custom MCP server template in <code className="bg-orange-200 px-1.5 py-0.5 rounded font-mono">custom-mcp-template/</code></li>
              <li>• ✅ Set up your personalized MCP server name and configuration</li>
              <li>• ✅ Deployed your Databricks App with the MCP template</li>
              <li>• ✅ Installed dependencies (uv, bun, Python packages)</li>
            </ul>
          </div>

          {/* IDE Requirements */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">💻 MCP-Compatible IDE Required</h2>
            <p className="text-slate-700 mb-4">
              To use your custom MCP server with AI assistance, you'll need an <strong>MCP-compatible IDE</strong>. 
              Currently supported:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h3 className="font-bold text-slate-900 mb-2">✅ Cursor IDE</h3>
                <p className="text-sm text-slate-600 mb-2">Full MCP support with <code className="bg-slate-200 px-1 py-0.5 rounded text-xs">mcp.json</code> configuration</p>
                <a href="https://cursor.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">→ Download Cursor</a>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h3 className="font-bold text-slate-900 mb-2">✅ Claude Code</h3>
                <p className="text-sm text-slate-600 mb-2">Native MCP support with CLI integration</p>
                <a href="https://claude.ai/download" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">→ Download Claude Code</a>
              </div>
            </div>

            <InfoBox type="warning" title="Note about VS Code">
              <p className="text-sm">VS Code does <strong>not yet have native MCP support</strong>. Use Cursor (VS Code fork with MCP) or Claude Code for this workshop.</p>
            </InfoBox>
          </div>

          <InfoBox type="success" title="🎉 What's Already Set Up">
            <ul className="space-y-2 mt-3">
              <li>• ✅ Custom MCP server template in <code className="bg-emerald-100 px-1.5 py-0.5 rounded font-mono">custom-mcp-template/</code></li>
              <li>• ✅ Your personal Databricks App deployed and running</li>
              <li>• ✅ Local development environment with hot-reload</li>
              <li>• ✅ SQL warehouse connection configured</li>
              <li>• ✅ Sample workshop data (products, customers, sales)</li>
              <li>• ⚡ Ready to build your own Databricks MCP tools!</li>
            </ul>
          </InfoBox>
        </div>

        <WorkshopStep number={1} title="What's Already Done">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Your workshop <code className="bg-orange-200 px-1.5 py-0.5 rounded font-mono">./setup.sh</code> already created the MCP template for you in <code className="bg-orange-200 px-1.5 py-0.5 rounded font-mono">custom-mcp-template/</code>
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">✅ What setup.sh Did</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Created the custom-mcp-template folder with all the code</li>
                <li>• Set up your personalized server name in <code className="bg-blue-100 px-1 py-0.5 rounded text-xs">config.yaml</code></li>
                <li>• Configured authentication in <code className="bg-blue-100 px-1 py-0.5 rounded text-xs">.env.local</code></li>
                <li>• Installed dependencies (uv, Python packages)</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
              <h4 className="text-lg font-bold text-slate-900 mb-3">📹 Watch This 10-Minute Video</h4>
              <p className="text-slate-700 mb-3">
                This shows the exact workflow we'll follow to deploy and use your MCP server:
              </p>
              <a 
                href="https://www.youtube.com/watch?v=oKE59zgb6e0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                <span>▶️</span>
                Databricks MCP Server Setup & Usage
              </a>
            </div>

            <InfoBox type="info" title="What We'll Do Next">
              <ol className="space-y-2 ml-4">
                <li>1. Use Claude Code's <code className="bg-blue-100 px-1 py-0.5 rounded font-mono">/setup-mcp</code> command to deploy your server</li>
                <li>2. Explore existing prompts in the <code className="bg-blue-100 px-1 py-0.5 rounded font-mono">prompts/</code> folder</li>
                <li>3. Create a new custom prompt for managing DLT pipelines</li>
                <li>4. Test it in Claude Code</li>
                <li>5. Share it with your team</li>
              </ol>
            </InfoBox>
          </div>
        </WorkshopStep>

        <WorkshopStep number={2} title="Deploy Your MCP Server with Claude Code">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Now let's deploy your MCP server to Databricks Apps using Claude Code's <strong>automated setup</strong>. 
              Claude will handle authentication, deployment, and configuration for you!
            </p>

            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">📋 What You'll Need</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• ✅ Your Databricks workspace URL (e.g., <code className="bg-purple-100 px-1.5 py-0.5 rounded text-sm">https://your-workspace.cloud.databricks.com</code>)</li>
                <li>• ✅ A Personal Access Token (PAT) from your workspace</li>
                <li>• ✅ Claude Code installed with terminal access</li>
              </ul>
              <div className="mt-4 p-4 bg-white rounded-lg border border-purple-200">
                <p className="text-sm text-slate-700"><strong>Get your PAT:</strong> In Databricks → Settings → Developer → Access Tokens → Generate New Token</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Step 1: Open Your Template in Claude Code</h3>
              <CodeBlock
                language="bash"
                title="Terminal Commands"
                code={`# Navigate to your MCP template
cd custom-mcp-template

# Open Claude Code in this directory
claude

# Pro tip: Use --dangerously-skip-permissions for faster demo
# (but you don't have to - it just speeds things up)`}
              />
            </div>

            <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Step 2: Run the Setup Command</h3>
              <p className="text-slate-700 mb-4">
                In Claude Code, type this slash command and press Enter:
              </p>
              <div className="bg-white rounded-lg p-4 border-2 border-green-300 font-mono text-lg text-center mb-4">
                /setup-mcp
              </div>
              
              <div className="bg-emerald-100 rounded-lg p-4 border border-emerald-300">
                <p className="text-sm font-bold text-emerald-900 mb-2">✨ What Claude Does Automatically:</p>
                <ol className="text-sm text-emerald-800 space-y-1 ml-4">
                  <li>1. Checks your environment (fresh setup or continuing)</li>
                  <li>2. Asks for your Databricks workspace URL → <em className="text-emerald-700">paste yours</em></li>
                  <li>3. Asks for your Personal Access Token → <em className="text-emerald-700">paste your PAT</em></li>
                  <li>4. Asks for app name → <em className="text-emerald-700">type a name or use existing</em></li>
                  <li>5. Installs all dependencies (Python, bun, etc.)</li>
                  <li>6. Deploys your MCP server to Databricks Apps</li>
                  <li>7. Adds the MCP server to your Claude CLI automatically</li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Step 3: Wait for Deployment</h3>
              <p className="text-slate-700 mb-4">
                Claude will deploy your app and verify everything works. This takes about 2-3 minutes.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-sm text-blue-900 mb-2"><strong>💡 While you wait:</strong></p>
                <p className="text-sm text-blue-800">You can check your app status in Databricks → Apps → <code className="bg-blue-100 px-1 py-0.5 rounded text-xs">your-app-name</code></p>
              </div>
            </div>

            <InfoBox type="success" title="🎉 Setup Complete!">
              <p className="mb-3">Once Claude finishes, you'll see a success message. Your MCP server is now:</p>
              <ul className="space-y-2 ml-4">
                <li>• ✅ Running as a Databricks App</li>
                <li>• ✅ Connected to Claude Code via local proxy</li>
                <li>• ✅ Ready to use with custom prompts!</li>
              </ul>
              <p className="mt-4 text-sm">
                <strong>Next:</strong> Let's explore the prompts that are now available and create our own!
              </p>
            </InfoBox>
          </div>
        </WorkshopStep>

        <WorkshopStep number={3} title="Explore the Prompts Folder">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Let's understand <strong>how custom prompts work</strong> in your MCP server. 
              Prompts are reusable "slash commands" that you can share with your team!
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">🎯 What Are Prompts?</h3>
              <p className="text-slate-700 mb-3">
                <strong>Prompts</strong> are markdown files that give Claude pre-written instructions for common tasks. Think of them like:
              </p>
              <ul className="space-y-2 text-slate-700 ml-4">
                <li>• 📝 <strong>Reusable templates</strong> - Write once, use many times</li>
                <li>• 🎯 <strong>Team standards</strong> - Everyone uses the same workflow</li>
                <li>• 🚀 <strong>Quick shortcuts</strong> - Type <code className="bg-purple-100 px-1 py-0.5 rounded text-sm">/your-server:prompt-name</code> instead of explaining from scratch</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Check Your Prompts Folder</h3>
              <CodeBlock
                language="bash"
                title="Look at Existing Prompts"
                code={`cd custom-mcp-template/prompts/
ls -la

# You should see:
# check_system.md
# list_files.md  
# ping_google.md
# dba.md

# Let's look at one:
cat ping_google.md`}
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-slate-200">
              <h4 className="font-bold text-slate-900 mb-3">Example Prompt: ping_google.md</h4>
              <CodeBlock
                language="markdown"
                title="prompts/ping_google.md"
                code={`# Ping Google

Test network connectivity by pinging google.com.

- Check if your system can reach google.com
- Show network latency`}
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Test a Prompt in Claude Code</h3>
              <p className="text-slate-700 mb-4">
                Open a new Claude Code window and try one of your prompts:
              </p>
              <CodeBlock
                language="bash"
                title="In Claude Code"
                code={`# Type this (replace 'your-server-name' with your actual server name):
/your-server-name:ping_google

# Claude will execute the prompt and show you the results!`}
              />
              <div className="bg-green-50 rounded-lg p-4 border border-green-200 mt-4">
                <p className="text-sm text-green-900">
                  <strong>✨ What just happened:</strong> Claude read the <code className="bg-green-100 px-1 py-0.5 rounded text-xs">ping_google.md</code> file 
                  from your MCP server and followed those instructions automatically!
                </p>
              </div>
            </div>

            <InfoBox type="success" title="Key Takeaway">
              <p>Prompts in the <code className="bg-emerald-100 px-1 py-0.5 rounded font-mono">prompts/</code> folder automatically become slash commands that anyone with access to your MCP server can use!</p>
              <p className="mt-3 text-sm">
                <strong>Next:</strong> Let's create our own custom prompt for managing DLT pipelines.
              </p>
            </InfoBox>
          </div>
        </WorkshopStep>

        <WorkshopStep number={4} title="Test Your MCP Server Locally">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Let's start your custom MCP server locally and test that your new tools work with
            your workshop data.
          </p>

          <CodeBlock
            language="bash"
            title="Start Your MCP Server"
            code={`# Navigate to your MCP template directory
cd custom-mcp-template

# Start the development server (this includes hot-reload!)
./watch.sh

# Your server will be available at:
# - HTTP homepage: http://localhost:8000
# - MCP endpoint: http://localhost:8000/mcp/`}
          />

          <CodeBlock
            language="bash"
            title="Test Your New Sales Tool"
            code={`# Test that your tools are available
curl -X POST http://localhost:8000/mcp/ \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc": "2.0", "id": "test", "method": "tools/list"}'

# Test your custom sales tool
curl -X POST http://localhost:8000/mcp/ \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc": "2.0", "id": "test", "method": "tools/call", "params": {"name": "get_daily_sales_summary", "arguments": {"limit": 5}}}'`}
          />

          <InfoBox type="success" title="🎉 Your MCP Server is Running!">
            If you see your sales data in the response, congratulations! Your custom MCP server
            is successfully querying your workshop data.
          </InfoBox>
        </WorkshopStep>

        <WorkshopStep number={5} title="Deploy to Databricks Apps">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Deploy your MCP server as a production Databricks App with OAuth authentication
            and automatic scaling.
          </p>

          <CodeBlock
            language="bash"
            title="Production Deployment"
            code={`# Deploy to Databricks Apps
./deploy.sh

# Check deployment status and get your app URL
./app_status.sh

# Example output:
# App Status: RUNNING
# App URL: https://your-app-abc123.databricksapps.com
# MCP Endpoint: https://your-app-abc123.databricksapps.com/mcp/`}
          />

          <InfoBox type="success" title="Production Ready">
            Your MCP server is now running with OAuth authentication, automatic SSL,
            and enterprise-grade security provided by Databricks Apps.
          </InfoBox>
        </WorkshopStep>

        <WorkshopStep number={6} title="Use Your Tool: Create a Pipeline with AI">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Now comes the magic! Let's use your MCP tool with AI to actually create a DLT pipeline. 
              First, we'll create a simple DLT notebook, then ask AI to create a pipeline for it.
            </p>

            {/* Create DLT Notebook */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Step 1: Create a Sample DLT Notebook</h3>
              <p className="text-slate-700 mb-4">
                In your Databricks workspace, create a new notebook with this DLT transformation code:
              </p>
              <CodeBlock
                language="python"
                title="Create: /Users/<your-email>/workshop_sales_transformation"
                code={`import dlt
from pyspark.sql.functions import col, sum as _sum, count, round as _round

# Get the workshop catalog from environment or use default
import os
workshop_catalog = os.environ.get("WORKSHOP_CATALOG", "mcp_workshop_yourname")

@dlt.table(
  name="sales_by_category",
  comment="Daily sales aggregated by product category"
)
def sales_by_category():
  """Aggregate daily sales by product category."""
  return (
    dlt.read(f"{workshop_catalog}.default.sales")
      .join(
        dlt.read(f"{workshop_catalog}.default.products"),
        on="product_id"
      )
      .groupBy("sale_date", "category")
      .agg(
        count("sale_id").alias("total_orders"),
        _sum("quantity").alias("total_units"),
        _round(_sum("revenue"), 2).alias("total_revenue")
      )
      .orderBy("sale_date", "category")
  )

@dlt.table(
  name="customer_lifetime_value",
  comment="Customer lifetime value and purchase metrics"
)
def customer_lifetime_value():
  """Calculate customer lifetime value metrics."""
  return (
    dlt.read(f"{workshop_catalog}.default.sales")
      .join(
        dlt.read(f"{workshop_catalog}.default.customers"),
        on="customer_id"
      )
      .groupBy("customer_id", "customer_name", "region")
      .agg(
        count("sale_id").alias("total_orders"),
        _sum("revenue").alias("lifetime_value"),
        _round(_sum("revenue") / count("sale_id"), 2).alias("avg_order_value")
      )
      .orderBy(col("lifetime_value").desc())
  )`}
              />
              <InfoBox type="info" title="What This Notebook Does">
                <p className="text-sm">Creates two analytics tables: one tracking sales by category over time, and another calculating customer lifetime value. This is typical data engineering work!</p>
              </InfoBox>
            </div>

            {/* Use AI to Create Pipeline */}
            <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Step 2: Ask AI to Create the Pipeline</h3>
              <p className="text-slate-700 mb-4">
                Now open Cursor or Claude Code and use your MCP tool with this prompt:
              </p>
              
              <div className="bg-white rounded-lg p-5 border-2 border-green-300 mb-4">
                <p className="font-mono text-sm text-slate-800 mb-3">💬 <strong>Your Prompt to AI:</strong></p>
                <div className="bg-slate-50 rounded p-4 border border-slate-200">
                  <p className="text-sm text-slate-700">
                    "Use the create_dlt_pipeline tool to set up a data pipeline for me:
                  </p>
                  <ul className="text-sm text-slate-700 mt-2 ml-4 space-y-1">
                    <li>- Pipeline name: workshop_sales_analytics</li>
                    <li>- Notebook path: /Users/&lt;your-email&gt;/workshop_sales_transformation</li>
                    <li>- Target catalog: mcp_workshop_&lt;your_prefix&gt;</li>
                    <li>- Target schema: analytics</li>
                    <li>- Cluster size: Small</li>
                  </ul>
                  <p className="text-sm text-slate-700 mt-2">
                    After creating it, give me the pipeline URL so I can monitor it."
                  </p>
                </div>
              </div>

              <div className="bg-emerald-100 rounded-lg p-4 border border-emerald-300">
                <p className="text-sm font-bold text-emerald-900 mb-2">🎯 What Happens:</p>
                <ol className="text-sm text-emerald-800 space-y-1 ml-4">
                  <li>1. AI reads your prompt and understands you want to create a DLT pipeline</li>
                  <li>2. AI identifies the create_dlt_pipeline tool from your MCP server</li>
                  <li>3. AI calls the tool with the parameters you specified</li>
                  <li>4. Your MCP tool uses the Databricks SDK to create the actual pipeline</li>
                  <li>5. AI returns the pipeline URL and success message</li>
                </ol>
                <p className="text-xs text-emerald-700 mt-3">
                  ✨ You just created production data infrastructure with a conversation!
                </p>
              </div>
            </div>

            {/* Verify the Pipeline */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Step 3: Verify and Run Your Pipeline</h3>
              <p className="text-slate-700 mb-4">
                Visit the pipeline URL provided by AI, or navigate to the Pipelines page in Databricks:
              </p>
              <CodeBlock
                language="bash"
                title="Pipeline Location"
                code={`# Your pipeline is now live at:
https://your-workspace.cloud.databricks.com/pipelines/<pipeline-id>

# Or find it in the UI:
Databricks Workspace → Workflows → Delta Live Tables → "workshop_sales_analytics"`}
              />
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mt-4">
                <p className="text-sm font-bold text-blue-900 mb-2">🚀 Run Your Pipeline:</p>
                <ol className="text-sm text-blue-800 space-y-2 ml-4">
                  <li>1. Click "Start" in the pipeline UI</li>
                  <li>2. Watch as it processes your workshop data</li>
                  <li>3. View the generated tables: <code className="bg-blue-100 px-1 py-0.5 rounded text-xs">mcp_workshop_yourname.analytics.sales_by_category</code></li>
                  <li>4. Query your new analytics tables in a SQL notebook!</li>
                </ol>
              </div>
            </div>

            {/* The Power */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
              <h4 className="text-lg font-bold text-slate-900 mb-3">💡 The Power of MCP for Infrastructure</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-bold text-purple-900 mb-2">❌ Without MCP:</p>
                  <ul className="text-slate-700 space-y-1 ml-4">
                    <li>• Click through UI menus</li>
                    <li>• Copy-paste notebook paths</li>
                    <li>• Configure cluster settings manually</li>
                    <li>• Takes 5-10 minutes per pipeline</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-green-900 mb-2">✅ With MCP:</p>
                  <ul className="text-slate-700 space-y-1 ml-4">
                    <li>• Describe what you want in natural language</li>
                    <li>• AI calls your tool automatically</li>
                    <li>• Pipeline created in seconds</li>
                    <li>• Repeatable, documented, version-controlled!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </WorkshopStep>

        <WorkshopStep number={7} title="Connect to Cursor IDE">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Integrate your custom MCP server with Cursor IDE for AI-powered development
            workflows with your business data.
          </p>

          <CodeBlock
            language="bash"
            title="Install MCP Proxy for Cursor"
            code={`# Install the MCP proxy globally
pip install git+https://github.com/YOUR-USERNAME/my-databricks-mcp.git

# Or install with uvx for isolated execution
uvx --from git+https://github.com/YOUR-USERNAME/my-databricks-mcp.git dba-mcp-proxy --help`}
          />

          <CodeBlock
            language="json"
            title="Cursor MCP Configuration (.cursor/mcp.json)"
            code={`{
  "mcpServers": {
    "my-custom-databricks": {
      "command": "uvx",
      "args": [
        "--from", "git+https://github.com/YOUR-USERNAME/my-databricks-mcp.git",
        "dba-mcp-proxy",
        "--databricks-host", "https://your-workspace.cloud.databricks.com",
        "--databricks-app-url", "https://your-app-abc123.databricksapps.com"
      ],
      "env": {
        "DATABRICKS_HOST": "https://your-workspace.cloud.databricks.com"
      }
    }
  }
}`}
          />

          <InfoBox type="tip" title="Cursor Integration">
            After adding the configuration, restart Cursor. Your custom SQL tools will be available
            in chat conversations, allowing AI to query your business data directly.
          </InfoBox>
        </WorkshopStep>

        <WorkshopStep number={8} title="Use with Databricks AI Playground">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Connect your MCP server to Databricks AI Playground for interactive data analysis
            and business intelligence workflows.
          </p>

          <CodeBlock
            language="python"
            title="AI Playground Integration"
            code={`# In Databricks AI Playground, you can now reference your MCP tools:

# Prompt example:
"""
Use my custom MCP server to analyze today's revenue performance.
Call the get_daily_revenue tool with today's date and compare it
to our average daily revenue over the past 30 days.

Then use the analyze_customer_segments tool to see which customer
segments are driving the most value this month.
"""

# The AI can now execute your custom SQL tools and provide insights`}
          />

          <InfoBox type="info" title="AI Playground Features">
            <ul className="space-y-2 mt-3">
              <li>• Natural language to SQL via your custom tools</li>
              <li>• Real-time business metrics and KPI reporting</li>
              <li>• Customer segmentation and behavior analysis</li>
              <li>• Integration with existing Databricks notebooks and workflows</li>
            </ul>
          </InfoBox>
        </WorkshopStep>

        <WorkshopStep number={9} title="Advanced Configuration">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Configure advanced features like custom prompts, multiple warehouses,
            and business-specific integrations.
          </p>

          <CodeBlock
            language="markdown"
            title="prompts/business_insights.md"
            code={`# Business Intelligence Assistant

You are a business intelligence assistant with access to our company's
data through custom SQL tools. You can:

- Analyze daily, weekly, and monthly revenue trends
- Segment customers based on behavior and value
- Generate executive dashboards and reports
- Identify growth opportunities and performance gaps

Use the available tools to provide data-driven insights and recommendations.

Available tools:
- get_daily_revenue: Daily revenue metrics
- analyze_customer_segments: Customer behavior analysis
- execute_dbsql: Custom SQL queries`}
          />

          <CodeBlock
            language="yaml"
            title="config.yaml - Server Configuration"
            code={`# Custom server configuration
servername: my-business-analytics-mcp

# Additional settings for your deployment
features:
  - sql_tools
  - custom_analytics
  - business_prompts

warehouse_configs:
  default: "your-default-warehouse-id"
  analytics: "your-analytics-warehouse-id"
  reporting: "your-reporting-warehouse-id"`}
          />
        </WorkshopStep>

        {/* Architecture Overview */}
        <div className="mb-12 p-8 bg-slate-50 rounded-2xl border-2 border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">🏗️ Architecture Overview</h3>

          <div className="bg-white p-6 rounded-lg border border-slate-200 mb-6">
            <CodeBlock
              language="text"
              title="End-to-End Flow"
              code={`┌─────────────────┐    MCP Protocol     ┌──────────────────┐    OAuth + HTTPS    ┌─────────────────────┐
│   Cursor IDE    │ ◄─────────────────► │   MCP Proxy      │ ◄─────────────────► │  Databricks App     │
│   AI Playground │   (stdio/JSON-RPC)  │  (Local Process) │   (Authenticated)   │  (Your MCP Server)  │
└─────────────────┘                     └──────────────────┘                     └─────────────────────┘
                                                │                                            │
                                                │                                            ▼
                                                └──────────── Databricks Auth ─────► SQL Warehouses
                                                                                       Unity Catalog
                                                                                       DBFS & APIs`}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-3">🔧 Core Components</h4>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• <strong>FastMCP Server:</strong> Python-based MCP implementation</li>
                <li>• <strong>SQL Tools:</strong> Execute queries against warehouses</li>
                <li>• <strong>OAuth Proxy:</strong> Handles Databricks authentication</li>
                <li>• <strong>Databricks App:</strong> Managed hosting and scaling</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-3">🚀 Key Features</h4>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• <strong>Production Ready:</strong> Enterprise authentication & security</li>
                <li>• <strong>SQL Integration:</strong> Direct warehouse and Unity Catalog access</li>
                <li>• <strong>Hot Reload:</strong> Development server with live updates</li>
                <li>• <strong>Multi-Client:</strong> Works with Cursor, Claude, AI Playground</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="mb-12 p-8 bg-yellow-50 rounded-2xl border-2 border-yellow-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">🔧 Troubleshooting</h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Authentication Issues</h4>
              <CodeBlock
                language="bash"
                code={`# Refresh Databricks credentials
databricks auth login --host https://your-workspace.cloud.databricks.com

# Test authentication
databricks current-user me

# Clear cached tokens if needed
uvx cache clean`}
              />
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-2">Connection Problems</h4>
              <CodeBlock
                language="bash"
                code={`# Test MCP server directly
curl -X GET https://your-app.databricksapps.com/mcp/

# Check app status
./app_status.sh

# View server logs
curl https://your-app.databricksapps.com/logz`}
              />
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-2">Development Issues</h4>
              <CodeBlock
                language="bash"
                code={`# Restart development server
./watch.sh

# Run comprehensive tests
./claude_scripts/test_local_mcp_curl.sh
./claude_scripts/test_local_mcp_proxy.sh

# Interactive debugging
./claude_scripts/inspect_local_mcp.sh`}
              />
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-16 p-8 rounded-2xl border-2 border-orange-200 bg-orange-50">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">🎉 Section Complete!</h3>
          <p className="text-lg text-slate-700 mb-6">
            You now have a production-ready custom MCP server that integrates SQL warehouses
            with AI development workflows. Your tools are available in Cursor IDE,
            Databricks AI Playground, and any MCP-compatible client.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/local-ide"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-lg font-bold text-white hover:bg-orange-700 transition-colors"
            >
              Next: Local IDE Setup
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="https://github.com/databricks-solutions/custom-mcp-databricks-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-6 py-3 text-lg font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Template Repository
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <a
              href="https://fastmcp.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-6 py-3 text-lg font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              FastMCP Docs
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
