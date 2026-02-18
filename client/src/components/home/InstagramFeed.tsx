import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import cartBreakfast from "@/assets/cart-breakfast.jpg";
import cartSandwich from "@/assets/cart-sandwich.jpg";
import cartPizza from "@/assets/cart-pizza.jpg";
import cartCheese from "@/assets/cart-cheese.jpg";
import cartSweet from "@/assets/cart-sweet.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const photos = [
  { src: cartBreakfast, alt: "Breakfast spread" },
  { src: heroBg, alt: "Charcuterie board" },
  { src: cartPizza, alt: "Pizza cart" },
  { src: cartCheese, alt: "Cheese board" },
  { src: cartSweet, alt: "Desserts" },
  { src: cartSandwich, alt: "Sandwich cart" },
];

const InstagramFeed = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-primary uppercase tracking-[0.2em] text-sm font-body mb-3">Follow Us</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          <Instagram className="inline-block mr-3 mb-1" size={36} />
          @boardandbites
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {photos.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="aspect-square rounded-xl overflow-hidden group cursor-pointer relative"
          >
            <img src={p.src} alt={p.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
              <Instagram className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={28} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InstagramFeed;
