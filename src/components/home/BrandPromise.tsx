// import { motion } from "framer-motion";
// import { Leaf, Award, Clock, Sparkles } from "lucide-react";

// const promises = [
//   { icon: Leaf, title: "Locally Sourced", desc: "Fresh ingredients from trusted local suppliers." },
//   { icon: Award, title: "Award-Winning", desc: "Recognized for excellence in event presentation." },
//   { icon: Clock, title: "Punctual Setup", desc: "We arrive early and set up beautifully." },
//   { icon: Sparkles, title: "Tailored Menus", desc: "Custom menus designed around your vision." },
// ];

// const BrandPromise = () => {
//   return (
//     <section className="bg-white py-24 px-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
        
//         {/* CLEAN HEADER */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
//           <div className="max-w-2xl">
//             <motion.p 
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="text-[#88a382] uppercase tracking-[0.3em] text-[11px] font-bold mb-4"
//             >
//               Our Commitment
//             </motion.p>
//             <motion.h2 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="font-serif text-4xl md:text-6xl text-[#2d3a2a] leading-tight"
//             >
//               Excellence in <span className="italic font-light text-[#88a382]">every</span> detail.
//             </motion.h2>
//           </div>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-stone-400 text-sm md:max-w-[280px] leading-relaxed"
//           >
//             We simplify event catering so you can focus on making memories.
//           </motion.p>
//         </div>

//         {/* MINIMALIST GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
//           {promises.map((p, i) => (
//             <motion.div
//               key={p.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               className="flex flex-col items-start"
//             >
//               {/* Icon - Soft & Simple */}
//               <div className="w-12 h-12 rounded-full bg-[#fdfcf0] flex items-center justify-center mb-6 text-[#88a382]">
//                 <p.icon size={22} strokeWidth={1.5} />
//               </div>
              
//               <h3 className="text-[#2d3a2a] text-lg font-medium mb-3 tracking-tight">
//                 {p.title}
//               </h3>
//               <p className="text-stone-500 text-sm leading-relaxed font-light">
//                 {p.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* SUBTLE DIVIDER */}
//         <motion.div 
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.5, ease: "circOut" }}
//           className="h-[1px] bg-stone-100 w-full mt-24"
//         />
//       </div>
//     </section>
//   );
// };

// export default BrandPromise;
import React from "react";
import { motion } from "framer-motion";

const ContinuousProcess: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans overflow-hidden">
      
      {/* 1. TILE-STYLE HEADER */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-[#88a382] uppercase tracking-[0.8em] text-[10px] font-bold mb-6">
            The Art of Creation
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-[#2d3a2a] tracking-tight leading-none uppercase">
            Witness the <span className="italic font-light lowercase">Process</span>
          </h1>
        </motion.div>
      </section>

      {/* 2. CINEMATIC VIDEO SECTION (Ref: image_e26b67.jpg) */}
      <section className="relative w-full h-[75vh] md:h-[90vh] overflow-hidden group">
        <video
          autoPlay
          loop
          muted
          playsInline
          disableRemotePlayback
          className="w-full h-full object-cover scale-105"
          src="./Hailuo_Video_generate a food makeing proces_479431710264758280.mp4"
        />
        
        {/* Dark Cinematic Overlay */}
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />

        {/* OVERLAY CONTENT GRID */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-end justify-between p-8 md:p-24 z-10">
          
          {/* LEFT SIDE: MODIFIED HEADLINE */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-left mb-12 md:mb-0"
          >
            <p className="text-white text-[11px] uppercase tracking-[0.5em] font-bold mb-6 opacity-80">
              Get Started
            </p>
            <h2 className="text-white font-serif text-4xl md:text-7xl uppercase leading-[1.1] md:leading-[0.95] tracking-tighter">
              Start Your Day <br /> 
              With <span className="italic font-light opacity-95">Board & Bites</span> <br /> 
              Today
            </h2>
          </motion.div>

          {/* RIGHT SIDE: DESCRIPTION & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-end text-right max-w-sm md:pb-4"
          >
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10 font-light">
              Experience the symphony of flavors crafted with heart and precision. 
              Our process is a journey where tradition meets modern culinary art.
            </p>
            <button className="bg-[#88a382]  text-white px-12 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 shadow-2xl">
              Get Started
            </button>
          </motion.div>
        </div>

        {/* ACCENT LINES */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />
      </section>

      <div className="h-24 bg-white" />
    </div>
  );
};

export default ContinuousProcess;