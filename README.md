# Claude Toolkit

A comprehensive toolkit for enhancing Claude Code development workflows with intelligent hooks, automation, and integrations.

## Features

- **Smart Hooks System**: 5 priority hooks for enhanced development workflow
- **Claude Code Integration**: Seamless integration with Claude Code settings
- **YAML Configuration**: Human-readable configuration management
- **Optimized Binary**: 749KB optimized Rust binary for performance
- **MCP Server Support**: Built-in Model Context Protocol server configurations

## Quick Start

### Installation

```bash
# Build the toolkit
nx build claude-toolkit

# Install Claude Code hooks
./packages/claude-toolkit/target/release/claude-toolkit install

# Check status
./packages/claude-toolkit/target/release/claude-toolkit status
```

### Available Hooks

1. **pr-enhance**: Enhance pull requests with AI analysis
2. **commit-assist**: Generate commit messages from staged changes
3. **ci-monitor**: Monitor CI/CD pipeline status
4. **branch-manager**: Manage branches with intelligent suggestions
5. **nx-optimizer**: Optimize NX workspace operations

## Commands

```bash
# Install hooks configuration
claude-toolkit install [--force]

# Uninstall hooks configuration
claude-toolkit uninstall

# Show hooks status
claude-toolkit status

# Configuration management
claude-toolkit config init [--force]
claude-toolkit config show
claude-toolkit config validate
claude-toolkit config edit

# Hook commands
claude-toolkit pr-enhance <pr> [--yes]
claude-toolkit commit-assist [message] [--generate]
claude-toolkit ci-monitor [branch] [--notify]
claude-toolkit branch-manager <action>
claude-toolkit nx-optimizer [--suggest] [--apply]
```

## Configuration

The toolkit uses two configuration files:

- `.claude/claude-toolkit.yml`: Hook and MCP server configuration
- `.claude/settings.json`: Claude Code integration settings

### Example Configuration

```yaml
hooks:
  pr-enhance:
    command: claude-toolkit pr-enhance
    description: Enhance pull requests with AI analysis
    trigger: manual
    enabled: true
    timeout: 300

mcp_servers:
  filesystem:
    command: npx
    args:
      - -y
      - "@modelcontextprotocol/server-filesystem"
      - .

settings:
  debug: false
  log_level: info
  auto_install: true
```

## Development

### Naming Conventions

This project follows strict `snake_case` naming conventions:

- **Structs/Enums**: `snake_case` (project preference for consistency)

  ```rust
  pub struct memory_system { }
  pub struct claude_config { }
  pub enum hook_trigger { }
  ```

- **Functions/Variables**: `snake_case`

  ```rust
  pub fn install_hooks() { }
  let config_path = get_path();
  let hooks_installer = hooks_installer::new();
  ```

- **Constants**: `SCREAMING_SNAKE_CASE`

  ```rust
  const DEFAULT_TIMEOUT: u64 = 300;
  const MAX_RETRIES: usize = 3;
  ```

- **Files/Modules**: `snake_case`
  ```
  src/
    memory/mod.rs
    desktop/mod.rs
    hooks_installer.rs
    claude_config.rs
  ```

**Rationale**: Consistency across the entire codebase reduces cognitive load and prevents confusion between different naming styles. While Rust typically uses `PascalCase` for structs, this project prioritizes consistency over convention.

### Build Commands

```bash
# Build with NX (preferred)
nx build claude-toolkit

# Test
nx test claude-toolkit

# Lint
nx lint claude-toolkit

# Build with cargo (if needed)
cd packages/claude-toolkit && cargo build --release
```

## Architecture

- **Modular Design**: Separate modules for hooks, memory, desktop, daemon, installer
- **YAML Configuration**: Human-readable configuration with validation
- **Claude Code Integration**: Automatic settings.json management
- **Optimized Binary**: Size-optimized release builds (749KB)

## Project Structure

```
packages/claude-toolkit/
├── src/
│   ├── main.rs           # CLI entry point
│   ├── config/mod.rs     # Configuration management
│   ├── hooks/mod.rs      # Hook implementations
│   ├── installer/mod.rs  # Installation logic
│   ├── memory/mod.rs     # Memory system (future)
│   ├── desktop/mod.rs    # Desktop integration (future)
│   └── daemon/mod.rs     # Background services (future)
├── Cargo.toml           # Rust dependencies
└── project.json         # NX configuration
```
