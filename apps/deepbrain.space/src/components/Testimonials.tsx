import Image from "next/image";
import { motion } from "framer-motion";
import { TestimonialType } from "@/types";

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO",
    company: "TechCorp Inc.",
    content:
      "DeepBrain's AI Voice Agents have transformed our customer service. We've seen a 40% reduction in response times and improved customer satisfaction.",
    image: "/images/testimonials/john.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Operations Director",
    company: "Global Solutions",
    content:
      "The implementation was seamless, and the results were immediate. Our customers love the 24/7 availability and quick response times.",
    image: "/images/testimonials/sarah.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
