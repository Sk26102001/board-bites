import { motion } from "framer-motion";
import { Heart, Users, Building2, Cake, GlassWater, Music } from "lucide-react";

const events = [
  { icon: Heart, title: "Weddings", desc: "Elegant grazing tables and artisan carts for your special day", count: "200+ served" },
  { icon: Building2, title: "Corporate", desc: "Impress clients and reward teams with premium catering", count: "150+ events" },
  { icon: Cake, title: "Birthdays", desc: "Make celebrations unforgettable with themed food carts", count: "180+ parties" },
  { icon: GlassWater, title: "Baby Showers", desc: "Charming setups with sweet treats and savory bites", count: "90+ events" },
  { icon: Music, title: "Festivals", desc: "High-volume catering that keeps the crowds happy", count: "40+ festivals" },
  { icon: Users, title: "Private Dining", desc: "Intimate gatherings with personalized menus and service", count: "120+ dinners" },
];

const PopularEvents = () => (
  <section className="section-padding cream-gradient">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-primary uppercase tracking-[0.2em] text-sm font-body mb-3">Events We Cater</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          Perfect for Every <span className="italic text-gradient">Occasion</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-background border border-border rounded-2xl p-8 hover-lift cursor-default"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl sage-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <e.icon className="text-primary-foreground" size={26} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">{e.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-3">{e.desc}</p>
                <span className="text-primary font-body text-xs font-bold uppercase tracking-wider">{e.count}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PopularEvents;
