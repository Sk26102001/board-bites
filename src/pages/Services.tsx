// import { motion } from "framer-motion";
// import { GlassWater, Palette } from "lucide-react";

// const Services = () => (
//   <main className="pt-20 section-padding cream-gradient min-h-screen">
//     <div className="container mx-auto">
//       <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
//         <p className="text-primary uppercase tracking-[0.2em] text-sm font-body mb-3">What We Offer</p>
//         <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">Our <span className="italic text-gradient">Services</span></h1>
//       </motion.div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//         {[
//           { icon: GlassWater, title: "Drinks Service", desc: "From artisan coffee bars to fresh mocktail stations, we provide beverage carts that complement any event. Our baristas and mixologists craft every drink with precision and style." },
//           { icon: Palette, title: "Custom Boards", desc: "Design your dream board! We work with you to create bespoke grazing tables, themed platters, and personalised food experiences tailored to your event's vision and guest count." },
//         ].map((s, i) => (
//           <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className="bg-background rounded-2xl border border-border p-10 hover-lift">
//             <s.icon size={48} className="text-primary mb-6" />
//             <h2 className="font-display text-2xl font-bold text-foreground mb-4">{s.title}</h2>
//             <p className="text-muted-foreground font-body leading-relaxed">{s.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </main>
// );

// export default Services;



// src/App.tsx  or  src/pages/Services.tsx
// src/App.tsx
// src/App.tsx  (or your Services page component)
// src/App.tsx  (or Services.tsx - full single-page component)

import { ArrowRight, Check, Star } from "lucide-react";
import type { FC } from "react";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";

const THEME = {
  primarySage: "#8FA684",
  sageLight: "#A7B99D",
  sageDark: "#6B7D62",
  accentGold: "#D4AF37",
  creamBg: "#FAF9F6",
  textMain: "#2D362E",
} as const;

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
};

interface ServiceCardProps {
  title: string;
  items?: string[];
  description: string;
  price: string;
  isFeatured?: boolean;
  imageUrl?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  items = [],
  description,
  price,
  isFeatured = false,
  imageUrl,
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.45, 0.32, 0.9] }}
      className="group relative bg-white p-8 md:p-12 rounded-[2rem] border border-stone-100 transition-all duration-500 hover:shadow-2xl flex flex-col"
    >
      {isFeatured && (
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 rounded-full text-xs font-bold tracking-widest uppercase text-white flex items-center gap-2 z-10"
          style={{ backgroundColor: THEME.accentGold }}
        >
          <Star className="w-3 h-3 fill-current" />
          Signature Experience
        </div>
      )}

      {imageUrl && (
        <div className="mb-8 -mx-8 md:-mx-12 -mt-8 md:-mt-12">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 md:h-64 object-cover rounded-t-[2rem]"
            loading="lazy"
          />
        </div>
      )}

      <h3
        className="text-3xl md:text-4xl font-serif mb-6"
        style={{ color: THEME.textMain }}
      >
        {title}
      </h3>

      <p className="text-stone-500 leading-relaxed mb-8 text-lg font-light">
        {description}
      </p>

      {items.length > 0 && (
        <ul className="space-y-4 mb-10">
          {items.map((item: string, idx: number) => (
            <li
              key={idx}
              className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300"
            >
              <Check
                className="w-5 h-5 mt-1"
                style={{ color: THEME.primarySage }}
              />
              <span className="text-stone-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-auto pt-8 border-t border-stone-50">
        <span
          className="text-2xl font-serif italic"
          style={{ color: THEME.primarySage }}
        >
          {price}
        </span>

        <Link to="/booking">
          <button
            className="px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 active:scale-95"
            style={{
              backgroundColor: `${THEME.primarySage}20`,
              color: THEME.primarySage,
            }}
          >
            Book Now
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

const ProfessionalCateringPage: FC = () => {
  return (
    <div
      className="min-h-screen selection:bg-[#8FA684]/30"
      style={{ backgroundColor: THEME.creamBg }}
    >
      {/* Hero Section – unchanged */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1974"
            className="w-full h-full object-cover"
            alt="Luxury Catering"
          />
          <div
            className="absolute inset-0 opacity-60"
            style={{ backgroundColor: THEME.textMain }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-8 leading-tight">
              Pure{" "}
              <span className="italic" style={{ color: THEME.primarySage }}>
                Elegance
              </span>
              <br />
              In Every Pour
            </h1>

            <p className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-light tracking-wide">
              Bespoke non-alcoholic mixology and handcrafted keepsakes for the
              discerning host.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(143,166,132,0.4)]"
              style={{ backgroundColor: THEME.primarySage }}
            >
              Consult With Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-white to-transparent"
        />
      </section>

      {/* Services */}
      <section className="py-32 container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-serif mb-6"
            style={{ color: THEME.textMain }}
          >
            Refined Catering <span className="text-stone-400">&</span> Gifts
          </motion.h2>

          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: THEME.accentGold }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <ServiceCard
            title="Signature Beverage Pouring"
            isFeatured
            items={[
              "Non-Alcoholic Champagne Service",
              "Artisanal Hot Chocolate & Karak",
              "Cold-Pressed Botanical Juices",
              "Coordinated Premium Glassware",
              "Professional Service Team",
            ]}
            description="Our beverage experience is designed to be as visually stunning as it is delicious. We provide a seamless, station-free service that moves with your guests."
            price="Starting from 500 AED"
            imageUrl="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800"
          />

          <ServiceCard
            title="Custom Keepsake Boards"
            description="Give your guests something to cherish. Our mini boards are laser-engraved with your event details or guest names, acting as both a place setting and a premium gift."
            items={[
              "FSC Certified Premium Wood",
              "Precision Laser Engraving",
              "Custom Logo Integration",
              "Individually Gift Wrapped",
            ]}
            price="AED 50 per piece"
            imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
          />
        </div>

        {/* NEW: Bottom CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center py-16 px-8 md:px-16 bg-gradient-to-br from-stone-50 to-white rounded-3xl border border-stone-100 shadow-xl max-w-4xl mx-auto"
        >
          <h3 className="text-4xl md:text-5xl font-serif mb-6" style={{ color: THEME.textMain }}>
            Ready to Elevate Your Next Event?
          </h3>
          <p className="text-stone-600 text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light">
            Let's craft a bespoke non-alcoholic experience and memorable keepsakes tailored perfectly to your vision.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-4 px-12 py-6 rounded-full text-xl md:text-2xl font-bold text-white transition-all hover:shadow-[0_0_40px_rgba(143,166,132,0.5)] hover:scale-105 active:scale-95"
            style={{ backgroundColor: THEME.primarySage }}
          >
            Get in Touch Today
            <ArrowRight className="w-6 h-6" />
          </a>
          <p className="mt-6 text-stone-500 text-sm md:text-base">
            Response within 24 hours • Free consultation
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-stone-100 text-center">
        <div
          className="text-2xl font-serif mb-4 tracking-widest"
          style={{ color: THEME.primarySage }}
        >
          SAGE & GOLD
        </div>
        <p className="text-stone-400 text-sm tracking-widest uppercase">
          Dubai • Abu Dhabi • Sharjah
        </p>
      </footer>
    </div>
  );
};

export default ProfessionalCateringPage;