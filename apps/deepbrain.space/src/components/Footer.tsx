import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Revolutionizing business communication with AI Voice Agents
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#demo"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Try Demo
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Email: contact@deepbrain.space</li>
              <li>Location: Global</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} DeepBrain.Space. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
