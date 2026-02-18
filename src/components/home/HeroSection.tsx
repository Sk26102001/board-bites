import { motion, useScroll, useTransform } from "framer-motion";
import {  Menu} from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/bite-logo2.png";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <motion.img
        src={heroBg}
        alt="Gourmet charcuterie board"
        style={{ y: imgY }}
        className="absolute inset-0 w-full h-full object-cover scale-110"
        
      />

{/* <div>
  <img src={logo} alt="Bite Logo" className="absolute top-6 left-10 w-60 h-28 z-20 brightness-[3]" />
</div> */}

<div>
  <img
    src={logo}
    alt="Bite Logo"
    className="
      absolute 
      top-4 left-4
      sm:top-6 sm:left-6
      md:top-6 md:left-10
      w-40 
      sm:w-52 
      md:w-64 
      lg:w-72 
      h-auto 
      z-20 
      brightness-[3]
    "
  />
</div>



      <div className="hero-overlay absolute inset-0" />
      <motion.div style={{ y: textY, opacity }} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sage-light uppercase tracking-[0.3em] text-sm font-body mb-6"
        >
          Premium Food Cart Catering
        </motion.p> */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-6"
        >
          Crafted with Love,
          <br />
          <span className="italic text-sage-light">Served with Style</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-primary-foreground/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          From artisan cheese boards to gourmet pizzas — we bring unforgettable dining experiences right to your event.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/booking"
            className="sage-gradient text-primary-foreground px-10 py-4 rounded-full text-lg font-semibold font-body tracking-wide uppercase hover:opacity-90 transition-opacity"
          >
            Book Now
          </Link>
          <Link
            to="/menu"
            className="border-2 border-primary-foreground/40 text-primary-foreground px-10 py-4 rounded-full text-lg font-semibold font-body tracking-wide uppercase hover:bg-primary-foreground/10 transition-colors"
          >
            Explore Menu
          </Link>
        </motion.div>
      </motion.div>

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full" />
        </motion.div>
      </motion.div> */}
    </section>
  );
};

export default HeroSection;
