import { motion } from "framer-motion";
import { BenefitType } from "@/types";

const benefits: BenefitType[] = [
  {
    id: 1,
    title: "24/7 Availability",
    description:
      "Provide round-the-clock customer service without human limitations",
    icon: "⏰",
  },
  {
    id: 2,
    title: "Cost Effective",
    description:
      "Reduce operational costs while maintaining high-quality service",
    icon: "💰",
  },
  {
    id: 3,
    title: "Scalable Solution",
    description:
      "Handle multiple conversations simultaneously without compromising quality",
    icon: "📈",
  },
  {
    id: 4,
    title: "Consistent Experience",
    description: "Deliver uniform customer experience across all interactions",
    icon: "🎯",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose Our AI Voice Agents
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
