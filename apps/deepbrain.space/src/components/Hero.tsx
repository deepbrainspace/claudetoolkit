import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-blue-600">
                DeepBrain.Space
              </span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600">
                Features
              </a>
              <a href="#demo" className="text-gray-600 hover:text-blue-600">
                Demo
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600">
                Pricing
              </a>
              <a
                href="#contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Transform Customer Service with AI Voice Agents
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Automate customer interactions with intelligent AI voice
                  agents that understand context, handle complex conversations,
                  and deliver exceptional service 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#demo"
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg text-center hover:bg-blue-700 transition-colors"
                  >
                    Try Live Demo
                  </a>
                  <a
                    href="#contact"
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-center hover:bg-blue-50 transition-colors"
                  >
                    Schedule Demo
                  </a>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={`trust-${i}`}
                        src={`/images/logos/client-${i}.png`}
                        alt="Client logo"
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-1">
                  <div className="bg-white rounded-xl p-6">
                    <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        poster="/images/demo-poster.jpg"
                      >
                        <source src="/videos/demo.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose DeepBrain.Space
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to automate customer interactions
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Natural Conversations",
                  description:
                    "AI agents that understand context and maintain natural dialogue flow",
                  icon: "🗣️",
                },
                {
                  title: "24/7 Availability",
                  description:
                    "Round-the-clock service without the limitations of human agents",
                  icon: "⏰",
                },
                {
                  title: "Seamless Integration",
                  description:
                    "Easy integration with your existing systems and workflows",
                  icon: "🔄",
                },
              ].map((feature, index) => (
                <motion.div
                  key={`feature-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
