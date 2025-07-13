use anyhow::Result;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::path::PathBuf;
use tokio::fs;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ClaudeConfig {
    pub hooks: HashMap<String, HookConfig>,
    pub mcp_servers: Option<HashMap<String, McpServerConfig>>,
    pub settings: Option<GlobalSettings>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct HookConfig {
    pub command: String,
    pub description: String,
    pub trigger: HookTrigger,
    pub enabled: Option<bool>,
    pub environment: Option<HashMap<String, String>>,
    pub timeout: Option<u64>, // seconds
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "kebab-case")]
pub enum HookTrigger {
    Manual,
    PreCommit,
    PostCommit,
    PrePush,
    PostPush,
    PrCreate,
    PrUpdate,
    CiStart,
    CiComplete,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct McpServerConfig {
    pub command: String,
    pub args: Option<Vec<String>>,
    pub env: Option<HashMap<String, String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GlobalSettings {
    pub debug: Option<bool>,
    pub log_level: Option<String>,
    pub auto_install: Option<bool>,
    pub claude_binary_path: Option<String>,
}

impl ClaudeConfig {
    pub fn default() -> Self {
        let mut hooks = HashMap::new();
        
        // Default hook configurations
        hooks.insert("pr-enhance".to_string(), HookConfig {
            command: "claude-toolkit pr-enhance".to_string(),
            description: "Enhance pull requests with AI analysis".to_string(),
            trigger: HookTrigger::Manual,
            enabled: Some(true),
            environment: None,
            timeout: Some(300), // 5 minutes
        });

        hooks.insert("commit-assist".to_string(), HookConfig {
            command: "claude-toolkit commit-assist --generate".to_string(),
            description: "Generate commit messages from staged changes".to_string(),
            trigger: HookTrigger::PreCommit,
            enabled: Some(true),
            environment: None,
            timeout: Some(60), // 1 minute
        });

        hooks.insert("ci-monitor".to_string(), HookConfig {
            command: "claude-toolkit ci-monitor --notify".to_string(),
            description: "Monitor CI/CD pipeline status".to_string(),
            trigger: HookTrigger::Manual,
            enabled: Some(true),
            environment: None,
            timeout: Some(1800), // 30 minutes
        });

        hooks.insert("branch-manager".to_string(), HookConfig {
            command: "claude-toolkit branch-manager".to_string(),
            description: "Manage branches with intelligent suggestions".to_string(),
            trigger: HookTrigger::Manual,
            enabled: Some(true),
            environment: None,
            timeout: Some(120), // 2 minutes
        });

        hooks.insert("nx-optimizer".to_string(), HookConfig {
            command: "claude-toolkit nx-optimizer --suggest".to_string(),
            description: "Optimize NX workspace operations".to_string(),
            trigger: HookTrigger::Manual,
            enabled: Some(true),
            environment: None,
            timeout: Some(180), // 3 minutes
        });

        let mut mcp_servers = HashMap::new();
        
        // Default MCP servers
        mcp_servers.insert("filesystem".to_string(), McpServerConfig {
            command: "npx".to_string(),
            args: Some(vec![
                "-y".to_string(),
                "@modelcontextprotocol/server-filesystem".to_string(),
                ".".to_string(),
            ]),
            env: None,
        });

        mcp_servers.insert("memory".to_string(), McpServerConfig {
            command: "npx".to_string(),
            args: Some(vec![
                "-y".to_string(),
                "@modelcontextprotocol/server-memory".to_string(),
            ]),
            env: None,
        });

        Self {
            hooks,
            mcp_servers: Some(mcp_servers),
            settings: Some(GlobalSettings {
                debug: Some(false),
                log_level: Some("info".to_string()),
                auto_install: Some(true),
                claude_binary_path: None,
            }),
        }
    }

    pub async fn load_or_create(path: &PathBuf) -> Result<Self> {
        if path.exists() {
            let content = fs::read_to_string(path).await?;
            let config: ClaudeConfig = serde_yaml::from_str(&content)?;
            Ok(config)
        } else {
            let default_config = Self::default();
            default_config.save(path).await?;
            Ok(default_config)
        }
    }

    pub async fn save(&self, path: &PathBuf) -> Result<()> {
        // Ensure parent directory exists
        if let Some(parent) = path.parent() {
            fs::create_dir_all(parent).await?;
        }

        let yaml_content = serde_yaml::to_string(self)?;
        fs::write(path, yaml_content).await?;
        Ok(())
    }

    pub fn get_config_path() -> PathBuf {
        std::env::current_dir()
            .unwrap_or_else(|_| PathBuf::from("."))
            .join(".claude")
            .join("claude-toolkit.yml")
    }

    pub fn get_hook(&self, name: &str) -> Option<&HookConfig> {
        self.hooks.get(name)
    }

    pub fn is_hook_enabled(&self, name: &str) -> bool {
        self.get_hook(name)
            .map(|hook| hook.enabled.unwrap_or(true))
            .unwrap_or(false)
    }
}