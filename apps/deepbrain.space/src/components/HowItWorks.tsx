import { motion } from "framer-motion";

const steps = [
  {
    title: "Select Your Agent",
    description:
      "Choose from our range of specialized AI voice agents tailored for different business needs.",
    icon: "🤖",
  },
  {
    title: "Customize & Train",
    description:
      "Personalize your AI agent with your business knowledge and preferences.",
    icon: "⚙️",
  },
  {
    title: "Deploy & Integrate",
    description:
      "Seamlessly integrate your AI agent into your existing communication channels.",
    icon: "🚀",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
