pub mod hooks;
pub mod memory;
pub mod desktop;
pub mod daemon;
pub mod installer;
pub mod config;

pub use hooks::*;
pub use memory::*;
pub use desktop::*;
pub use daemon::*;
pub use installer::*;
pub use config::*;

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_library_modules_exist() {
        // Test that all modules can be imported
        let _memory = memory::MemorySystem::new();
        let _desktop = desktop::DesktopManager::new();
        let _daemon = daemon::DaemonService::new();
        let _installer = installer::HooksInstaller::new();
    }
}