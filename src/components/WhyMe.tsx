import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Target,
    title: "Problem-First Approach",
    description: "I don't just build websites; I solve the technical bottlenecks that are slowing your business down."
  },
  {
    icon: Zap,
    title: "Efficiency Over Design",
    description: "Automating your repetitive tasks so you can stop working on the business and start growing it."
  },
  {
    icon: TrendingUp,
    title: "Conversion Focused",
    description: "Every pixel is placed with one goal: turning your visitors into paying customers."
  }
];

export default function WhyMe() {
    return (
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          {/* Added Section Title */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Why Me?
            </h2>
            <p className="text-xl text-[#475569]">
              I focus on your business goals, not just the code.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-start"
              >
                <div className="mb-6 p-3 bg-[#F5F5F7] rounded-2xl text-[#121212]">
                  <reason.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  {reason.title}
                </h3>
                <p className="text-[#475569] leading-relaxed text-lg">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }