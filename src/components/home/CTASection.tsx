import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import aboutStory from "@/assets/about-story.jpg";

const CTASection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  
  // FIX: Shift the range so the image starts "higher" than the container.
  // Instead of 0% to 25%, we use -10% to 10% to keep it centered and covered.
  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    // FIX 1: Added bg-[#88a382] so if the image moves, you see sage, not gray.
    <section ref={ref} className="relative py-28 overflow-hidden ">
      
      <motion.img
        src={aboutStory}
        alt="Catering event"
        style={{ y: imgY }}
        // FIX 2: Increased scale to 1.2 to ensure edges are never visible during scroll
        className="absolute inset-0 w-full h-full object-cover scale-120 pointer-events-none"
      />

      {/* FIX 3: Improved Overlay - Deep Forest Green Gradient for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d3a2a]/60 via-[#2d3a2a]/40 to-[#2d3a2a]/60" />

      <div className="relative z-10 container mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Using Cream text for readability */}
          <p className="text-[#fdfcf0]/90 uppercase tracking-[0.3em] text-xs font-bold mb-4">
            Ready to celebrate?
          </p>
          
          <h2 className="font-serif text-4xl md:text-6xl text-[#fdfcf0] mb-8 leading-tight">
            Make Your Event
            <br />
            <span className="italic font-light opacity-90">Unforgettable</span>
          </h2>
          
          <p className="text-[#fdfcf0]/80 font-light text-lg max-w-xl mx-auto mb-12">
            Let us bring the gourmet experience to your doorstep. Book your food cart today and create lasting memories.
          </p>

          <Link
            to="/booking"
            // Custom button styling to match the Sage/Cream palette
            className="bg-primary text-white px-12 py-4 rounded-full text-sm font-bold tracking-widest uppercase  transition-all hover:opacity-90 duration-300 inline-block shadow-xl hover:shadow-2xl active:scale-95"
          >
            Book Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;