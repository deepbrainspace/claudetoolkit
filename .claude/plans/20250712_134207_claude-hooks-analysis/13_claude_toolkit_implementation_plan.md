# Updated Plan: Claude Toolkit NX Monorepo

## Current Status

We have a comprehensive claude-hooks analysis (files 01-12) and now need to update the plan to create a dedicated NX monorepo for the toolkit.

## What Changes From Original Plan

**Original Plan (files 01-12)**: Enhance goodiebag with claude-hooks
**Updated Plan**: Create dedicated `claudetoolkit` monorepo with modular package approach

## Repository Structure & NX Organization

```
claudetoolkit/ (this repository)
├── packages/
│   ├── claude-toolkit/         # Single Rust binary (all functionality)
│   │   ├── src/
│   │   │   ├── main.rs         # CLI router
│   │   │   ├── memory/         # SurrealDB + graph + vector
│   │   │   ├── hooks/          # Claude Code hooks (uses memory)
│   │   │   ├── desktop/        # MCP extension builder (uses memory)
│   │   │   ├── daemon/         # Background agent (uses memory)
│   │   │   └── installer/      # Smart installation
│   ├── claude-config/          # TypeScript (MOVED: from goodiebag)
│   └── claude-code-toolkit/    # Rust binary (MOVED: from goodiebag)
├── examples/
│   ├── hook-configurations/    # Hook setup examples
│   ├── memory-usage/           # Memory system examples
│   └── github-actions/         # CI/CD integration examples
└── website/                    # claudetoolkit.com
```

### Single Binary Architecture
```
claude-toolkit (Rust binary)
├── Memory System (SurrealDB + graph + vector)
├── Hooks Module (uses memory for context)
├── Desktop Module (MCP extension, uses memory)
├── Daemon Module (background agent, uses memory)
└── Installer (smart setup and configuration)

claude-config (separate - TypeScript from goodiebag)
claude-code-toolkit (separate - existing Rust binary from goodiebag)
```

## Technology Stack

- **Single Binary**: Rust with all functionality included
- **Core Memory**: SurrealDB with Cloudflare AI vectorization  
- **Build System**: NX with nx-rust plugin
- **Configuration**: YAML + encrypted .env files
- **Package Manager**: pnpm (for monorepo management)
- **Distribution**: Cargo install + direct binary download

## Implementation Phases (Single Binary Approach)

**Phase 1A: Hooks Implementation (PRIORITY)**
- Set up claude-toolkit binary structure in NX workspace using nx-rust plugin ONLY
- Implement basic CLI structure and argument parsing
- Implement 5 priority hooks without memory system (simple context-less hooks)
- Integration with Claude Code via `.claude/settings.json`
- Test: `claude-toolkit hooks install`
- Verify hooks work with real git operations

**Phase 1B: Memory System (FUTURE)**  
- AFTER hooks are functional, add SurrealDB integration
- Implement memory-aware context for hooks
- Test with CLI commands: `claude-toolkit memory query`

**Phase 2: Claude Desktop Extension**
- Implement desktop module for MCP extension building
- Generate .dxt files that use same memory system
- Command: `claude-toolkit desktop build-extension`

**Phase 3: Background Automation**
- Implement daemon module within same binary
- Background agent capabilities
- Command: `claude-toolkit daemon start`

**Phase 4: AI Representative**
- Extend daemon module with AI representative features
- Public interface and scheduling capabilities
- Web interface as separate package (if needed)

## CLI & Configuration Architecture ✅

### Command Structure  
**Single Binary**: `claude-toolkit` (all functionality)

**Distribution**:
```bash
# Install via Cargo
cargo install claude-toolkit

# Or direct download
curl -sSL install.claudetoolkit.com | sh

# Or GitHub releases
wget https://github.com/claudetoolkit/releases/latest/claude-toolkit
```

**Commands**:
```bash
# Hook management
claude-toolkit hooks install                 # Install hooks to .claude/settings.json
claude-toolkit hooks pr enhance              # PR enhancement hook
claude-toolkit hooks commit assist           # Commit assistance hook  
claude-toolkit hooks ci monitor              # CI monitoring hook
claude-toolkit hooks status                  # Show hook status

# Memory management
claude-toolkit memory query "Uncle John advice"  # Query memory directly
claude-toolkit memory export                     # Export memory data
claude-toolkit memory stats                      # Memory usage statistics

# Desktop extension (Phase 2)
claude-toolkit desktop build-extension       # Build .dxt file for Claude Desktop

# Daemon mode (Phase 3)
claude-toolkit daemon start                  # Start background agent
claude-toolkit daemon status                 # Check daemon status

# Configuration
claude-toolkit config validate               # Validate configuration
claude-toolkit install                       # Smart installer with options
claude-toolkit status                        # Overall system status
```

### Configuration Files

**YAML Config** (`.claude/claude-toolkit.yaml`):
```yaml
hooks:
  pr_enhancement:
    enabled: true
    timeout: 10000
    templates_dir: ".claude/templates/"
  
  commit_assistant:
    enabled: true
    multi_package_warning: true
    scope_suggestions: true

memory:
  database_url: "${SURREALDB_URL}"     # From .env
  
api:
  cloudflare:
    api_key: "${CLOUDFLARE_API_KEY}"     # From .env
    account_id: "${CLOUDFLARE_ACCOUNT}"  # From .env
```

**Environment Files**:
```bash
# .env (encrypted with git-crypt)
SURREALDB_URL=ws://localhost:8000/claude-memory
CLOUDFLARE_API_KEY=your_api_key_here
CLOUDFLARE_ACCOUNT=your_account_id_here
GITHUB_TOKEN=your_github_token_here

# .env.example (not encrypted, for reference)
SURREALDB_URL=ws://localhost:8000/claude-memory
CLOUDFLARE_API_KEY=your_cloudflare_api_key
CLOUDFLARE_ACCOUNT=your_cloudflare_account_id
GITHUB_TOKEN=your_github_token_for_api_access
```

### NX Integration

**Project Configuration** (`packages/claude-toolkit/project.json`):
```json
{
  "name": "claude-toolkit",
  "targets": {
    "build": {
      "executor": "@goodiebag/nx-rust:build",
      "dependsOn": ["test"],
      "outputs": ["{projectRoot}/target/release/claude-toolkit"],
      "options": {"release": true, "target-dir": "./target"}
    },
    "test": {
      "executor": "@goodiebag/nx-rust:test",
      "dependsOn": ["lint"]
    },
    "install": {
      "executor": "nx:run-commands",
      "dependsOn": ["build"],
      "options": {
        "command": "./target/release/claude-toolkit install --interactive"
      }
    }
  }
}
```

### Installation Process Example

```bash
$ claude-toolkit install

🔧 Claude Toolkit Installation
==============================

Current directory: /home/user/myproject
Target configuration: .claude/settings.json

Components to install:
✅ Memory System (SurrealDB backend)
✅ Claude Code Hooks (workflow enhancement)
☐ Desktop Extension (.dxt for Claude Desktop)
☐ Background Daemon (VPS deployment)

Hooks to install:
✅ PR Enhancement Hook (PostToolUse: gh pr create)
✅ Commit Assistant Hook (PreToolUse: git commit)  
✅ CI Monitor Hook (PostToolUse: gh pr create)
✅ Branch Manager Hook (Stop)
✅ NX Optimizer Hook (PreToolUse: nx commands)

Configuration that will be added to .claude/settings.json:
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": {"tool_name": "Bash", "command_pattern": "gh pr create.*"},
        "hooks": [{"type": "command", "command": "claude-toolkit hooks pr enhance"}]
      }
    ]
  }
}

❓ Proceed with installation? [Y/n]: y
✅ Hooks installed successfully!
✅ Memory system initialized!
✅ Configuration file: .claude/claude-toolkit.yaml created
✅ Environment template: .env.example created

Next steps:
1. Copy .env.example to .env and configure your secrets
2. Test installation: claude-toolkit status
3. Test memory: claude-toolkit memory query "test"
```

## Key Implementation Details

### Package Migration Strategy
- Move `claude-config` and `claude-code-toolkit` from goodiebag (FUTURE)
- Set up NX workspace with nx-rust plugin ONLY for now

### NX Build Strategy
- **Affected builds**: `nx affected --target=build` only builds changed packages
- **Rust Integration**: @goodiebag/nx-rust plugin for binary builds
- **Single distribution**: `claude-toolkit` binary is the main user-facing tool
- **Database Management**: FUTURE - will add nx-surrealdb plugin later

### Initial Structure (No Database)
```
packages/claude-toolkit/
├── src/
│   ├── main.rs              # CLI entry point
│   ├── commands/            # CLI command handlers
│   ├── hooks/               # Hook implementations (no memory for now)
│   └── utils/               # Helper utilities
├── Cargo.toml
└── project.json             # NX configuration
```

## Husky Hooks Integration Strategy

### **Current Husky Hooks (Keep As-Is)**
Your current Husky hooks will **continue working exactly as they do now**:
- Pre-commit: Secret detection, formatting, linting
- Commit-msg: Conventional commit validation  
- Pre-push: Test execution, lockfile sync

**These remain shell scripts and don't change.**

### **Enhanced Husky Integration (Optional)**
```bash
# Enhanced pre-commit hook (optional upgrade)
#!/bin/sh
# .husky/pre-commit

# Current safety checks (unchanged)
pnpm dlx lint-staged
pnpm exec detect-secrets-hook --baseline .secrets.baseline

# NEW: Optional Claude toolkit integration
if command -v claude-hooks >/dev/null 2>&1; then
  claude-hooks pre-commit analyze  # Memory-aware commit assistance
fi
```

### **Two-Level Hook System**
```
Level 1: Husky Hooks (Shell - Safety & Standards)
├── Secret detection (unchanged)  
├── Code formatting (unchanged)
├── Lint checks (unchanged)
└── Conventional commits (unchanged)

Level 2: Claude Hooks (Rust - Intelligence & Context)
├── Memory-aware commit suggestions
├── PR enhancement with context
├── CI monitoring and notifications
└── NX optimization recommendations
```

### **Benefits of Hybrid Approach**
1. **Safety First**: Husky provides essential safety (secrets, formatting)
2. **Intelligence Layer**: Claude hooks add contextual intelligence  
3. **Gradual Adoption**: Can enable/disable Claude hooks independently
4. **Team Compatibility**: Works for developers with/without Claude Code
5. **No Breaking Changes**: Existing workflow unchanged

### **Installation Options**
```bash
# Option 1: Claude Code only (hooks via settings.json)
claude-hooks install --claude-code

# Option 2: Enhanced Husky integration  
claude-hooks install --husky-integration

# Option 3: Both (recommended for full team)
claude-hooks install --full
```

## Ready for Implementation

**Next Action**: Start Phase 1A - Build claude-toolkit binary with SurrealDB integration

**Immediate Priority**:
1. Set up NX workspace structure
2. Integrate nx-surrealdb plugin from goodiebag
3. Create memory database schema using nx-surrealdb
4. Implement claude-toolkit binary with memory module
5. Test memory functionality with CLI commands
6. Build hooks module using memory for context
7. Test with Claude Code integration

**Dependencies**: Hooks analysis (files 01-12) contains all implementation details