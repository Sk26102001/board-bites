// import { motion } from "framer-motion";
// import { CalendarCheck, ShoppingBasket, Truck, PartyPopper } from "lucide-react";

// const steps = [
//   { icon: ShoppingBasket, title: "Choose Your Cart", desc: "Browse our collection and pick the perfect food cart for your event." },
//   { icon: CalendarCheck, title: "Pick a Date", desc: "Select your preferred date, time, and location for the catering." },
//   { icon: Truck, title: "We Set Up", desc: "Our team arrives fully equipped and sets up everything on site." },
//   { icon: PartyPopper, title: "Enjoy the Feast", desc: "Sit back, relax, and let your guests enjoy a premium dining experience." },
// ];

// const HowItWorks = () => (
//   <section className="section-padding bg-background">
//     <div className="container mx-auto">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-16"
//       >
//         <p className="text-primary uppercase tracking-[0.2em] text-sm font-body mb-3">Simple Process</p>
//         <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
//           How It <span className="italic text-gradient">Works</span>
//         </h2>
//       </motion.div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {steps.map((s, i) => (
//           <motion.div
//             key={s.title}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.15 }}
//             className="text-center group"
//           >
//             <div className="w-20 h-20 rounded-full sage-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//               <s.icon className="text-primary-foreground" size={32} />
//             </div>
//             <span className="text-sm text-primary font-body font-bold mb-2 block">Step {i + 1}</span>
//             <h3 className="font-display text-xl font-bold text-foreground mb-3">{s.title}</h3>
//             <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default HowItWorks;



import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UtensilsCrossed, CalendarDays, Truck, PartyPopper } from "lucide-react";
import { Star,  ChevronLeft, ChevronRight, Leaf, Award, Clock, Heart, Users, Utensils } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { icon: UtensilsCrossed, title: "Choose Your Cart", desc: "Browse our curated collection of food carts and boards" },
  { icon: CalendarDays, title: "Pick a Date", desc: "Select your event date and provide guest details" },
  { icon: Truck, title: "We Deliver", desc: "Fresh, handcrafted boards delivered to your venue" },
  { icon: PartyPopper, title: "Enjoy!", desc: "Sit back and let your guests enjoy the experience" },
];


const whyChooseUs = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "We source only the finest, locally-sourced ingredients for every dish." },
  { icon: Award, title: "Award-Winning", desc: "Recognised for excellence in catering and presentation." },
  { icon: Clock, title: "On-Time Setup", desc: "We arrive early, set up beautifully, and handle everything seamlessly." },
  { icon: Heart, title: "Made with Love", desc: "Every board and cart is crafted with passion and attention to detail." },
  { icon: Users, title: "Any Event Size", desc: "From intimate gatherings of 10 to grand celebrations of 500+." },
  { icon: Utensils, title: "Custom Menus", desc: "Tailored menus to suit dietary needs, themes, and preferences." },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-primary tracking-[0.3em] uppercase text-sm mb-4">Simple Process</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground font-bold">
            How It <span className="italic text-primary">Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 rounded-full bg-sage/10 border-2 border-primary flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="font-display text-6xl font-bold text-sage/15 absolute top-0 right-1/4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="font-body text-muted-foreground text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      
    </section>

 
  );
};

export default HowItWorks;
