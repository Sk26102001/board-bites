import { motion } from "framer-motion";
import aboutStory from "@/assets/about-story.jpg";

const About = () => (
  <main className="pt-20">
    <section className="section-padding cream-gradient">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-body mb-3">Our Story</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">About <span className="italic text-gradient">Board & Bites</span></h1>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.img initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} src={aboutStory} alt="Catering event" className="rounded-2xl shadow-lg w-full aspect-video object-cover" />
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <h2 className="font-display text-3xl font-bold mb-6 text-foreground">Where Passion Meets Flavor</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Board & Bites was born from a simple idea: bringing restaurant-quality gourmet experiences directly to your celebrations. We believe every event deserves exceptional food, beautifully presented and crafted with the finest ingredients.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Our mobile food carts bring the magic of artisan cuisine to weddings, corporate events, birthday parties, and intimate gatherings. Each cart is curated with care, featuring locally sourced ingredients and recipes perfected over years.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              From our signature cheese boards to freshly baked pizzas, every bite tells a story of craftsmanship and dedication. We don't just cater events — we create memories.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Why Choose <span className="italic text-gradient">Us</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Premium Ingredients", desc: "We source only the finest artisan ingredients from local suppliers." },
            { title: "Custom Experiences", desc: "Every cart is tailored to your event theme, dietary needs, and preferences." },
            { title: "Full-Service Setup", desc: "We handle everything — setup, service, and cleanup — so you enjoy the party." },
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-card border border-border rounded-2xl p-8 text-center hover-lift">
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
