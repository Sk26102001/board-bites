import { motion } from "framer-motion";
import cartBreakfast from "@/assets/cart-breakfast.jpg";
import cartSandwich from "@/assets/cart-sandwich.jpg";
import cartPizza from "@/assets/cart-pizza.jpg";
import cartCheese from "@/assets/cart-cheese.jpg";
import cartSweet from "@/assets/cart-sweet.jpg";
import aboutStory from "@/assets/about-story.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const images = [
  { src: heroBg, alt: "Charcuterie board" },
  { src: aboutStory, alt: "Catering event" },
  { src: cartBreakfast, alt: "Breakfast spread" },
  { src: cartCheese, alt: "Cheese board" },
  { src: cartPizza, alt: "Gourmet pizza" },
  { src: cartSweet, alt: "Dessert tower" },
  { src: cartSandwich, alt: "Sandwich platter" },
];

const Gallery = () => (
  <main className="pt-20 section-padding cream-gradient min-h-screen">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
        <p className="text-primary uppercase tracking-[0.2em] text-sm font-body mb-3">Our Work</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">Event <span className="italic text-gradient">Gallery</span></h1>
      </motion.div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl overflow-hidden break-inside-avoid"
          >
            <img src={img.src} alt={img.alt} className="w-full object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </main>
);

export default Gallery;




