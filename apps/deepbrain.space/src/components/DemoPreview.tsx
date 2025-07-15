import { motion } from "framer-motion";

const DemoPreview = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-1">
      <div className="bg-white rounded-xl p-6">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                🤖
              </div>
            </div>
            <div className="flex-1 bg-gray-50 rounded-xl p-4">
              <p className="text-gray-700">
                Hello! I&apos;m your AI voice assistant. How can I help you
                today?
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                👤
              </div>
            </div>
            <div className="flex-1 bg-blue-50 rounded-xl p-4">
              <p className="text-gray-700">
                I&apos;d like to know more about your business hours and
                services.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                🤖
              </div>
            </div>
            <div className="flex-1 bg-gray-50 rounded-xl p-4">
              <p className="text-gray-700">
                We&apos;re open 24/7! Our services include customer support,
                sales assistance, and appointment scheduling. What specific
                service are you interested in?
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="button"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() =>
                document
                  .getElementById("demo")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Try it yourself →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPreview;
