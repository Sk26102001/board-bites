import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Events Catered" },
  { value: 15, suffix: "K+", label: "Happy Guests" },
  { value: 7, suffix: "", label: "Cart Types" },
  { value: 5, suffix: "★", label: "Average Rating" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2.5, ease: [0.16, 1, 0.3, 1] });
    }
  }, [isInView, count, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      <span className="text-[#88a382] ml-0.5">{suffix}</span>
    </span>
  );
};

const StatsBar = () => (
  <section className="relative bg-[#fdfcf0] py-24 overflow-hidden">
    {/* Subtle Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#88a382]/5 blur-[120px] rounded-full" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              className="relative text-center group"
            >
              {/* Vertical Divider for Desktop */}
              {i !== stats.length - 1 && (
                <div className="hidden md:block absolute right-[-2px] top-1/4 h-1/2 w-[1px] bg-stone-200" />
              )}

              <div className="space-y-2">
                <p className="font-serif text-5xl md:text-6xl text-[#2d3a2a] tracking-tighter">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <div className="flex flex-col items-center">
                   {/* Small Accent Line */}
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "20px" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-[2px] bg-[#88a382] mb-3"
                  />
                  <p className="font-sans text-[11px] text-stone-500 uppercase tracking-[0.3em] font-bold">
                    {s.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StatsBar;