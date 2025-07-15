use clap::{Parser, Subcommand};
use colored::*;

// Import our modular structure
mod hooks;
mod memory;
mod desktop;
mod daemon;
mod installer;
mod config;

use hooks::*;
use installer::HooksInstaller;
use config::ClaudeConfig;

#[derive(Parser)]
#[command(
    name = "claude-toolkit",
    about = "Claude Code hooks toolkit for enhanced development workflow",
    version
)]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    /// Install Claude Code hooks configuration
    Install {
        /// Force overwrite existing configuration
        #[arg(short, long)]
        force: bool,
    },
    /// Uninstall Claude Code hooks configuration
    Uninstall,
    /// Show status of Claude Code hooks
    Status,
    /// Enhance pull request with AI-generated improvements
    PrEnhance {
        /// Pull request number or URL
        pr: String,
        /// Skip interactive confirmation
        #[arg(short, long)]
        yes: bool,
    },
    /// Assist with commit message generation and validation
    CommitAssist {
        /// Commit message to validate/enhance
        message: Option<String>,
        /// Generate commit message from staged changes
        #[arg(short, long)]
        generate: bool,
    },
    /// Monitor CI/CD pipeline status and provide notifications
    CiMonitor {
        /// Branch to monitor (defaults to current branch)
        branch: Option<String>,
        /// Enable desktop notifications
        #[arg(short, long)]
        notify: bool,
    },
    /// Manage branches with intelligent suggestions
    BranchManager {
        /// Action to perform
        #[command(subcommand)]
        action: BranchActions,
    },
    /// Optimize NX workspace operations
    NxOptimizer {
        /// Show optimization suggestions
        #[arg(short, long)]
        suggest: bool,
        /// Apply optimizations automatically
        #[arg(short, long)]
        apply: bool,
    },
    /// Manage configuration
    Config {
        /// Action to perform
        #[command(subcommand)]
        action: ConfigActions,
    },
}

#[derive(Subcommand)]
enum BranchActions {
    /// List branches with status information
    List,
    /// Clean up merged/stale branches
    Cleanup {
        /// Dry run - show what would be deleted
        #[arg(short, long)]
        dry_run: bool,
    },
    /// Suggest branch name based on issue or task
    Suggest {
        /// Issue number or description
        input: String,
    },
}

#[derive(Subcommand)]
enum ConfigActions {
    /// Show current configuration
    Show,
    /// Initialize configuration with defaults
    Init {
        /// Force overwrite existing configuration
        #[arg(short, long)]
        force: bool,
    },
    /// Validate configuration file
    Validate,
    /// Edit configuration (opens in default editor)
    Edit,
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let cli = Cli::parse();
    let installer = HooksInstaller::new();

    match cli.command {
        Commands::Install { force } => {
            println!("{}", "🔧 Installing Claude Code hooks...".blue().bold());
            installer.install_hooks(force).await?;
        }
        Commands::Uninstall => {
            println!("{}", "🗑️ Uninstalling Claude Code hooks...".red().bold());
            installer.uninstall_hooks().await?;
        }
        Commands::Status => {
            println!("{}", "📊 Claude Code hooks status:".blue().bold());
            installer.show_status().await?;
        }
        Commands::PrEnhance { pr, yes } => {
            println!("{}", "🚀 Enhancing pull request...".green().bold());
            pr_enhance(&pr, yes).await?;
        }
        Commands::CommitAssist { message, generate } => {
            println!("{}", "📝 Commit assistance:".yellow().bold());
            commit_assist(message, generate).await?;
        }
        Commands::CiMonitor { branch, notify } => {
            println!("{}", "👀 Monitoring CI/CD...".cyan().bold());
            ci_monitor(branch, notify).await?;
        }
        Commands::BranchManager { action } => {
            println!("{}", "🌿 Branch management:".magenta().bold());
            match action {
                BranchActions::List => branch_list().await?,
                BranchActions::Cleanup { dry_run } => branch_cleanup(dry_run).await?,
                BranchActions::Suggest { input } => branch_suggest(&input).await?,
            }
        }
        Commands::NxOptimizer { suggest, apply } => {
            println!("{}", "⚡ NX optimization:".purple().bold());
            nx_optimize(suggest, apply).await?;
        }
        Commands::Config { action } => {
            println!("{}", "⚙️ Configuration management:".blue().bold());
            match action {
                ConfigActions::Show => config_show().await?,
                ConfigActions::Init { force } => config_init(force).await?,
                ConfigActions::Validate => config_validate().await?,
                ConfigActions::Edit => config_edit().await?,
            }
        }
    }

    Ok(())
}

async fn config_show() -> anyhow::Result<()> {
    let config_path = ClaudeConfig::get_config_path();
    println!("  {} Configuration file: {}", "📍".blue(), config_path.display());
    
    if !config_path.exists() {
        println!("  {} Configuration file not found", "❌".red());
        println!("  {} Run 'claude-toolkit config init' to create default configuration", "💡".yellow());
        return Ok(());
    }

    let config = ClaudeConfig::load_or_create(&config_path).await?;
    let yaml_content = serde_yaml::to_string(&config)?;
    
    println!("  {} Current configuration:", "📄".green());
    println!("\n{yaml_content}");
    Ok(())
}

async fn config_init(force: bool) -> anyhow::Result<()> {
    let config_path = ClaudeConfig::get_config_path();
    
    if config_path.exists() && !force {
        println!("  {} Configuration file already exists: {}", "⚠️".yellow(), config_path.display());
        println!("  {} Use --force to overwrite", "💡".blue());
        return Ok(());
    }

    let config = ClaudeConfig::default();
    config.save(&config_path).await?;
    
    println!("  {} Created configuration file: {}", "✓".green().italic(), config_path.display());
    println!("  {} Default hooks and MCP servers configured", "✓".green().italic());
    Ok(())
}

async fn config_validate() -> anyhow::Result<()> {
    let config_path = ClaudeConfig::get_config_path();
    
    if !config_path.exists() {
        println!("  {} Configuration file not found: {}", "❌".red(), config_path.display());
        return Ok(());
    }

    match ClaudeConfig::load_or_create(&config_path).await {
        Ok(_) => {
            println!("  {} Configuration is valid", "✓".green().italic());
        }
        Err(e) => {
            println!("  {} Configuration validation failed:", "✗".red().italic());
            println!("    {e}");
        }
    }
    Ok(())
}

async fn config_edit() -> anyhow::Result<()> {
    let config_path = ClaudeConfig::get_config_path();
    
    // Ensure config exists
    if !config_path.exists() {
        println!("  {} Creating default configuration first...", "📝".blue());
        let config = ClaudeConfig::default();
        config.save(&config_path).await?;
    }

    // Try to open in default editor
    let editor = std::env::var("EDITOR").unwrap_or_else(|_| "nano".to_string());
    
    println!("  {} Opening configuration in {} editor...", "📝".blue(), editor);
    println!("  {} File: {}", "📍".blue(), config_path.display());
    
    let status = tokio::process::Command::new(&editor)
        .arg(&config_path)
        .status()
        .await?;

    if status.success() {
        println!("  {} Configuration updated", "✓".green().italic());
    } else {
        println!("  {} Editor exited with error", "✗".red().italic());
    }
    
    Ok(())
}
