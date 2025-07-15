# MCP Tools Reference

## Overview

Model Context Protocol (MCP) tools enable Claude Code to integrate with external services and APIs. This document provides a reference for configuring and using MCP tools with Claude Code, based on the latest MCP server implementations.

## Configuration

MCP tools are configured in `.claude/settings.json` file in your project root for Claude Code, or in `claude_desktop_config.json` for Claude Desktop.

### Basic Structure

```json
{
  "mcpServers": {
    "server-name": {
      "command": "path-to-executable",
      "args": ["arg1", "arg2"],
      "env": {
        "ENV_VAR": "value"
      }
    }
  }
}
```

## Available MCP Servers (Latest)

### Core Infrastructure Servers

#### 1. Filesystem Server

- **Purpose**: File and directory operations
- **Package**: `@modelcontextprotocol/server-filesystem`
- **Installation**:
  ```bash
  npm install -g @modelcontextprotocol/server-filesystem@latest
  ```
- **Configuration**:
  ```json
  {
    "mcpServers": {
      "filesystem": {
        "command": "npx",
        "args": [
          "-y",
          "@modelcontextprotocol/server-filesystem",
          "/Users/username/Desktop",
          "/path/to/other/allowed/dir"
        ]
      }
    }
  }
  ```

#### 2. Git Server

- **Purpose**: Git repository operations
- **Package**: `mcp-server-git`
- **Installation**:
  ```bash
  pip install mcp-server-git
  # or
  uvx mcp-server-git
  ```
- **Configuration**:
  ```json
  {
    "mcpServers": {
      "git": {
        "command": "uvx",
        "args": ["mcp-server-git", "--repository", "path/to/git/repo"]
      }
    }
  }
  ```

#### 3. Memory Server

- **Purpose**: Persistent knowledge graph memory
- **Package**: `@modelcontextprotocol/server-memory`
- **Configuration**:
  ```json
  {
    "mcpServers": {
      "memory": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-memory"],
        "env": {
          "MEMORY_FILE_PATH": "/path/to/custom/memory.json"
        }
      }
    }
  }
  ```

#### 4. Sequential Thinking Server

- **Purpose**: Enhanced reasoning capabilities
- **Package**: `@modelcontextprotocol/server-sequential-thinking`
- **Configuration**:
  ```json
  {
    "mcpServers": {
      "sequential-thinking": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
      }
    }
  }
  ```

### Web & Content Servers

#### 5. Fetch Server

- **Purpose**: Web content retrieval
- **Package**: `mcp-server-fetch`
- **Installation**:
  ```bash
  pip install mcp-server-fetch
  ```
- **Configuration**:
  ```json
  {
    "mcpServers": {
      "fetch": {
        "command": "uvx",
        "args": ["mcp-server-fetch"]
      }
    }
  }
  ```

#### 6. Brave Search (Third-party)

- **Purpose**: Web search capabilities
- **Configuration**:
  ```json
  {
    "mcpServers": {
      "brave-search": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-brave-search"],
        "env": {
          "BRAVE_API_KEY": "your-api-key"
        }
      }
    }
  }
  ```

### Time & Utilities

#### 7. Time Server

- **Purpose**: Time and timezone operations
- **Package**: `mcp-server-time`
- **Installation**:
  ```bash
  pip install mcp-server-time
  ```
- **Configuration**:
  ```json
  {
    "mcpServers": {
      "time": {
        "command": "uvx",
        "args": ["mcp-server-time"],
        "args": ["mcp-server-time", "--local-timezone=America/New_York"]
      }
    }
  }
  ```

### Development & Testing

#### 8. Everything Server (Development)

- **Purpose**: Comprehensive testing and development
- **Package**: `@modelcontextprotocol/server-everything`
- **Installation**:
  ```bash
  npm install -g @modelcontextprotocol/server-everything@latest
  ```
- **Configuration**:
  ```json
  {
    "mcpServers": {
      "everything": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-everything"]
      }
    }
  }
  ```

## Claude Code Hooks Integration

### Hooks Configuration

Claude Code hooks can be configured to use MCP tools for enhanced functionality:

```json
{
  "hooks": {
    "pr-enhance": {
      "command": "claude-toolkit pr-enhance",
      "description": "Enhance pull requests with AI analysis",
      "trigger": "manual"
    },
    "commit-assist": {
      "command": "claude-toolkit commit-assist --generate",
      "description": "Generate commit messages from staged changes",
      "trigger": "pre-commit"
    },
    "ci-monitor": {
      "command": "claude-toolkit ci-monitor --notify",
      "description": "Monitor CI/CD pipeline status",
      "trigger": "manual"
    }
  }
}
```

### Environment Variables

Store sensitive API keys in environment variables or `.env` files:

```bash
# .env.local
BRAVE_API_KEY=your_brave_api_key
FIRECRAWL_API_KEY=your_firecrawl_api_key
AIRTABLE_ACCESS_TOKEN=your_airtable_token
GMAIL_CLIENT_ID=your_gmail_client_id
GMAIL_CLIENT_SECRET=your_gmail_client_secret
BRIGHT_DATA_API_TOKEN=your_bright_data_token
```

## Usage Examples

### 1. Web Search with Brave

```bash
# Search for documentation
claude-toolkit pr-enhance "Fix authentication bug" --search
```

### 2. Content Extraction with Firecrawl

```bash
# Extract content from documentation
claude-toolkit commit-assist --extract-docs https://docs.example.com
```

### 3. Database Integration with Airtable

```bash
# Track issues in Airtable
claude-toolkit branch-manager suggest "Issue #123" --track-airtable
```

## Security Considerations

1. **API Keys**: Never commit API keys to version control
2. **Environment Variables**: Use `.env.local` for local development
3. **Access Control**: Limit API key permissions to minimum required
4. **Rate Limiting**: Be aware of API rate limits and quotas

## Troubleshooting

### Common Issues

1. **Missing Dependencies**: Ensure MCP servers are installed

   ```bash
   npm install -g @modelcontextprotocol/server-*
   ```

2. **Authentication Errors**: Verify API keys and permissions
3. **Network Issues**: Check firewall and proxy settings
4. **Rate Limiting**: Implement exponential backoff

### Debug Mode

Enable debug logging:

```json
{
  "debug": true,
  "mcpServers": {
    // ... your servers
  }
}
```

## References

- [Scott Spence's MCP Configuration Guide](https://scottspence.com/posts/configuring-mcp-tools-in-claude-code)
- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- [Model Context Protocol Specification](https://spec.modelcontextprotocol.io/)
- [MCP Server Examples](https://github.com/modelcontextprotocol)

## Related Tools

- **Sequential Thinking**: Enhanced reasoning capabilities
- **Context7**: Library documentation access
- **Search Serper**: Google search integration
- **Toolkit Integration**: Custom hooks and workflows

## Best Practices

1. **Modular Configuration**: Separate MCP servers by functionality
2. **Error Handling**: Implement robust error handling in hooks
3. **Logging**: Use structured logging for debugging
4. **Testing**: Test MCP integrations in isolated environments
5. **Documentation**: Maintain clear documentation for custom hooks
