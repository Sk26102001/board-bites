// import { motion } from "framer-motion";
// import aboutStory from "@/assets/about-story.jpg";

// const About = () => (
//   <main className="pt-20">
//     <section className="section-padding cream-gradient">
//       <div className="container mx-auto">
//         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
//           <p className="text-primary uppercase tracking-[0.2em] text-sm font-body mb-3">Our Story</p>
//           <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">About <span className="italic text-gradient">Board & Bites</span></h1>
//         </motion.div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <motion.img initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} src={aboutStory} alt="Catering event" className="rounded-2xl shadow-lg w-full aspect-video object-cover" />
//           <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
//             <h2 className="font-display text-3xl font-bold mb-6 text-foreground">Where Passion Meets Flavor</h2>
//             <p className="text-muted-foreground font-body leading-relaxed mb-4">
//               Board & Bites was born from a simple idea: bringing restaurant-quality gourmet experiences directly to your celebrations. We believe every event deserves exceptional food, beautifully presented and crafted with the finest ingredients.
//             </p>
//             <p className="text-muted-foreground font-body leading-relaxed mb-4">
//               Our mobile food carts bring the magic of artisan cuisine to weddings, corporate events, birthday parties, and intimate gatherings. Each cart is curated with care, featuring locally sourced ingredients and recipes perfected over years.
//             </p>
//             <p className="text-muted-foreground font-body leading-relaxed">
//               From our signature cheese boards to freshly baked pizzas, every bite tells a story of craftsmanship and dedication. We don't just cater events — we create memories.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>

//     <section className="section-padding bg-background">
//       <div className="container mx-auto">
//         <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Why Choose <span className="italic text-gradient">Us</span></h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             { title: "Premium Ingredients", desc: "We source only the finest artisan ingredients from local suppliers." },
//             { title: "Custom Experiences", desc: "Every cart is tailored to your event theme, dietary needs, and preferences." },
//             { title: "Full-Service Setup", desc: "We handle everything — setup, service, and cleanup — so you enjoy the party." },
//           ].map((item, i) => (
//             <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-card border border-border rounded-2xl p-8 text-center hover-lift">
//               <h3 className="font-display text-xl font-bold mb-3 text-foreground">{item.title}</h3>
//               <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   </main>
// );

// export default About;


import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Leaf, Utensils, Heart } from "lucide-react";
import aboutStory from "@/assets/about-story.jpg";

// ✅ Animation Variants (Typed Properly)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const About = () => {
  // ✅ Proper ref typing
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // ✅ Parallax effect
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <main className="bg-[#FCFAF7] overflow-hidden" ref={containerRef}>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center gap-2 text-[#88a382] mb-6"
            >
              <Sparkles size={18} className="animate-pulse" />
              <span className="uppercase tracking-[0.5em] text-[11px] font-bold">
                The Art of Catering
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-serif text-6xl md:text-8xl text-[#2d3a2a] leading-[0.9] mb-8"
            >
              Crafting <span className="italic font-light">Unforgettable</span>{" "}
              <br />
              <span className="bg-gradient-to-r from-[#2d3a2a] to-[#88a382] bg-clip-text text-transparent">
                Culinary Moments
              </span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              className="lg:col-span-7 relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="overflow-hidden rounded-[3rem] shadow-2xl aspect-[4/5] lg:aspect-[16/10]">
                <motion.img
                  style={{ y: imageY }}
                  src={aboutStory}
                  alt="Board & Bites Story"
                  className="w-full h-[120%] object-cover"
                />
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-[200px] border border-stone-100">
                <p className="text-[#88a382] font-serif italic text-xl">
                  "Quality is never an accident."
                </p>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              className="lg:col-span-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="font-serif text-4xl md:text-5xl text-[#2d3a2a] mb-8 leading-tight"
              >
                Where Passion <br /> Meets <span className="italic">Flavor</span>
              </motion.h2>

              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="text-stone-600 font-light text-lg leading-relaxed">
                  Board & Bites was born from a simple idea: bringing
                  restaurant-quality gourmet experiences directly to your
                  celebrations.
                </p>
                <p className="text-stone-600 font-light text-lg leading-relaxed border-l-2 border-[#88a382] pl-6 py-2 italic">
                  We believe every event deserves exceptional food, beautifully
                  presented and crafted with the finest ingredients.
                </p>
                <p className="text-stone-600 font-light text-lg leading-relaxed">
                  Our mobile food carts bring the magic of artisan cuisine to
                  weddings, corporate events, and intimate gatherings, featuring
                  locally sourced recipes perfected over years.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

{/* WHY CHOOSE US - Matching Sage Green Palette */}
<section className="py-14 bg-[#88a382] text-[#fdfcf0] rounded-[4rem] mx-4 mb-12">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
      <div className="max-w-2xl">
        <h2 className="font-serif text-4xl md:text-6xl mb-4">
          The Board & Bites <br />
          {/* Changed span to a lighter cream/white for visibility */}
          <span className="italic text-white/80">Philosophy</span>
        </h2>
      </div>
      {/* Changed text to cream to match the section theme */}
      <p className="text-white/80 uppercase tracking-widest text-xs font-bold mb-4">
        Established 2024
      </p>
    </div>

    {/* Changed border color to a lighter sage to create subtle separation */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#fdfcf0]/20">
      {[
        {
          title: "Premium Ingredients",
          icon: Leaf,
          desc: "We source only the finest artisan ingredients from local organic suppliers.",
        },
        {
          title: "Custom Experiences",
          icon: Utensils,
          desc: "Every cart is tailored to your event theme, dietary needs, and aesthetic.",
        },
        {
          title: "Full-Service Setup",
          icon: Heart,
          desc: "We handle setup, service, and cleanup—you focus on making memories.",
        },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
   
          className="p-12 group bg-[#7a9474] transition-colors duration-500 hover:bg-[#88a382]"
        >
          <item.icon
       
            className="text-[#fdfcf0] mb-8 group-hover:scale-110 transition-transform duration-500"
            size={32}
            strokeWidth={1.5}
          />
          <h3 className="font-serif text-2xl mb-4 text-[#fdfcf0]">
            {item.title}
          </h3>
          {/* Secondary text uses opacity for a modern, elegant hierarchy */}
          <p className="text-[#fdfcf0]/80 font-light leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    </main>
  );
};

export default About;
