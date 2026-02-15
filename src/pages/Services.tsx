import { motion } from "framer-motion";
import { GlassWater, Palette } from "lucide-react";

const Services = () => (
  <main className="pt-20 section-padding cream-gradient min-h-screen">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <p className="text-primary uppercase tracking-[0.2em] text-sm font-body mb-3">What We Offer</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">Our <span className="italic text-gradient">Services</span></h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          { icon: GlassWater, title: "Drinks Service", desc: "From artisan coffee bars to fresh mocktail stations, we provide beverage carts that complement any event. Our baristas and mixologists craft every drink with precision and style." },
          { icon: Palette, title: "Custom Boards", desc: "Design your dream board! We work with you to create bespoke grazing tables, themed platters, and personalised food experiences tailored to your event's vision and guest count." },
        ].map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className="bg-background rounded-2xl border border-border p-10 hover-lift">
            <s.icon size={48} className="text-primary mb-6" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">{s.title}</h2>
            <p className="text-muted-foreground font-body leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </main>
);

export default Services;
