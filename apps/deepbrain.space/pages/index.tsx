import { ThemeToggle } from "../components/ThemeToggle";
import { FeatureCard } from "../components/FeatureCard";
import { ComputerDesktopIcon, UserIcon } from "@heroicons/react/24/outline";

// Add type definitions
interface ChatMessageProps {
  isAI: boolean;
  message: string;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="fixed w-full top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a
                href="/"
                className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white"
              >
                <img
                  src="/img/brain-logo.svg"
                  alt="DeepBrain Space Logo"
                  className="w-8 h-8"
                />
                DeepBrain.Space
              </a>
            </div>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex space-x-4">
                <a
                  href="#features"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Features
                </a>
                <a
                  href="https://tally.so/r/31pp0L"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Contact
                </a>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Add padding-top to account for fixed header */}
      <main className="pt-14">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Transform Customer Service with AI Voice Agents
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6">
                Automate customer interactions with intelligent AI voice agents
                that understand context, handle complex conversations, and
                deliver exceptional service 24/7.
              </p>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-medium hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
                  onClick={() =>
                    window.open("https://tally.so/r/31pp0L", "_blank")
                  }
                >
                  Get Started
                </button>
                <button
                  type="button"
                  className="border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                  onClick={() =>
                    window.open("https://tally.so/r/31pp0L", "_blank")
                  }
                >
                  Schedule Demo
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg">
              <div className="flex flex-col gap-4">
                <ChatMessage
                  isAI={true}
                  message="Hello! I'm your AI voice assistant. How can I help you today?"
                />
                <ChatMessage
                  isAI={false}
                  message="I'd like to know more about your business hours and services."
                />
                <ChatMessage
                  isAI={true}
                  message="We're open 24/7! Our services include customer support, sales assistance, and appointment scheduling. What specific service are you interested in?"
                />

                <button
                  type="button"
                  className="self-end bg-blue-600 dark:bg-blue-500 text-white px-4 sm:px-6 py-2 text-sm sm:text-base rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                  onClick={() =>
                    window.open("https://tally.so/r/31pp0L", "_blank")
                  }
                >
                  Try it yourself →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="bg-gray-50 dark:bg-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                title="Natural Conversations"
                description="AI agents that understand context and engage in natural, human-like conversations"
                icon="/img/chat-icon.svg"
              />
              <FeatureCard
                title="24/7 Availability"
                description="Provide consistent customer service around the clock without breaks"
                icon="/img/clock-icon.svg"
              />
              <FeatureCard
                title="Seamless Integration"
                description="Easily integrate with your existing systems and workflows"
                icon="/img/integration-icon.svg"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                Product
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                Company
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                Support
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="https://tally.so/r/31pp0L"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                Legal
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} DeepBrain.Space. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Update ChatMessage component with types
function ChatMessage({ isAI, message }: ChatMessageProps) {
  return (
    <div className="flex items-start gap-4">
      <div
        className={`shrink-0 w-8 h-8 ${isAI ? "bg-blue-100/80 dark:bg-blue-900/80" : "bg-gray-100/80 dark:bg-gray-700/80"} rounded-full flex items-center justify-center`}
      >
        {isAI ? (
          <ComputerDesktopIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        ) : (
          <UserIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        )}
      </div>
      <div
        className={`flex-1 p-4 rounded-2xl ${isAI ? "bg-blue-50/50 dark:bg-blue-900/20" : "bg-gray-50/50 dark:bg-gray-700/20"}`}
      >
        <p
          className={
            isAI
              ? "text-gray-900 dark:text-white"
              : "text-gray-600 dark:text-gray-300"
          }
        >
          {message}
        </p>
      </div>
    </div>
  );
}
