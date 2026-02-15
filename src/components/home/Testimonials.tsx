// import { motion } from "framer-motion";
// import { Star, Quote } from "lucide-react";

// const reviews = [
//   { name: "Sarah M.", role: "Wedding Client", text: "Board & Bites made our wedding reception absolutely magical. The cheese and charcuterie carts were the talk of the night!" },
//   { name: "James P.", role: "Corporate Event", text: "Professional, delicious, and beautifully presented. Our team loved the breakfast cart setup. Highly recommend!" },
//   { name: "Emily R.", role: "Birthday Party", text: "The sweets cart was a dream come true for my daughter's birthday. Every guest was impressed by the quality and presentation." },
// ];

// const Testimonials = () => (
//   <section className="section-padding bg-foreground text-primary-foreground">
//     <div className="container mx-auto">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-14"
//       >
//         <p className="text-sage-light uppercase tracking-[0.2em] text-sm font-body mb-3">Testimonials</p>
//         <h2 className="font-display text-4xl md:text-5xl font-bold">
//           What Our <span className="italic text-sage-light">Clients Say</span>
//         </h2>
//       </motion.div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {reviews.map((r, i) => (
//           <motion.div
//             key={r.name}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.15 }}
//             className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 relative"
//           >
//             <Quote className="text-sage/30 absolute top-6 right-6" size={40} />
//             <div className="flex gap-1 mb-4">
//               {[...Array(5)].map((_, j) => (
//                 <Star key={j} size={16} className="fill-gold text-gold" />
//               ))}
//             </div>
//             <p className="font-body text-primary-foreground/80 leading-relaxed mb-6">"{r.text}"</p>
//             <div>
//               <p className="font-display font-bold">{r.name}</p>
//               <p className="font-body text-sm text-sage-light">{r.role}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default Testimonials;
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", role: "Wedding", text: "Board & Bites made our wedding absolutely stunning. The cheese boards were a showstopper!", rating: 5 },
  { name: "Ahmed K.", role: "Corporate", text: "Professional, punctual, and the food was incredible. Our team loved the breakfast boards.", rating: 5 },
  { name: "Lina R.", role: "Birthday", text: "The sweet board was a dream! Beautiful presentation and everything tasted amazing.", rating: 5 },
  { name: "James T.", role: "Private", text: "Exceptional quality. The charcuterie board was artfully arranged and perfectly balanced.", rating: 5 },
  { name: "Elena G.", role: "Brunch", text: "The freshest ingredients I've ever had in a catering service. Simply perfection.", rating: 5 },
  { name: "Marcus V.", role: "Events", text: "A truly artisan experience. They don't just serve food; they create memories.", rating: 5 },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Logic to ensure we don't slide into empty space
  const maxIndex = testimonials.length - 3; 

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-24 px-6 bg-[#fdfcf0] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* CENTERED HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-[#88a382] mb-4">
            <Quote size={18} fill="currentColor" className="opacity-20" />
            <p className="uppercase tracking-[0.5em] text-[10px] font-bold">Kind Words</p>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-[#2d3a2a] leading-none uppercase tracking-tighter mb-10">
            Our Customers <span className="italic font-light lowercase text-[#88a382]">Feedback</span>
          </h2>
          
          {/* NAVIGATION BUTTONS */}
          <div className="flex gap-4">
            <button 
              onClick={prev} 
              className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-[#2d3a2a] hover:bg-[#2d3a2a] hover:text-white transition-all duration-500 shadow-sm bg-white"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={next} 
              className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-[#2d3a2a] hover:bg-[#2d3a2a] hover:text-white transition-all duration-500 shadow-sm bg-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* SLIDING VIEWPORT */}
        <div className="relative overflow-visible">
          <motion.div 
            className="flex gap-6"
            animate={{ x: `calc(-${currentIndex * 33.333}% - ${currentIndex * 16}px)` }}
            transition={{ type: "spring", stiffness: 180, damping: 24 }}
          >
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                className="min-w-full md:min-w-[calc(33.333%-16px)] bg-white rounded-[2rem] p-8 shadow-xl shadow-[#88a382]/5 border border-stone-100 flex flex-col justify-between"
                whileHover={{ y: -8 }}
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={12} className="fill-[#b4845c] text-[#b4845c]" />
                    ))}
                  </div>
                  <p className="text-[#2d3a2a] font-serif text-lg italic leading-relaxed mb-8">
                    "{item.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-stone-50 pt-6">
                  <div className="w-10 h-10 rounded-full bg-[#88a382] flex items-center justify-center text-white font-serif text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#2d3a2a] text-[10px] uppercase tracking-widest">{item.name}</p>
                    <p className="text-[#88a382] text-[9px] uppercase font-bold tracking-tighter opacity-70">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* PAGINATION LINE */}
        <div className="mt-16 max-w-xs mx-auto h-[2px] bg-stone-200 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#88a382]"
            animate={{ width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;