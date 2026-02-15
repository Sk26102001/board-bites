import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cartBreakfast from "@/assets/cart-breakfast.jpg";
import cartSandwich from "@/assets/cart-sandwich.jpg";
import cartPizza from "@/assets/cart-pizza.jpg";
import cartCheese from "@/assets/cart-cheese.jpg";
import cartSweet from "@/assets/cart-sweet.jpg";

const categories = ["All", "Breakfast", "Sandwich", "Pizza", "Cheese", "Sweet", "Drinks"];

const menuItems = [
  { category: "Breakfast", name: "Morning Glory Board", desc: "Pastries, fruits, yogurt, granola, fresh juice", price: "$299", img: cartBreakfast },
  { category: "Breakfast", name: "Brunch Deluxe", desc: "Pancakes, eggs benedict, smoked salmon, mimosas", price: "$399", img: cartBreakfast },
  { category: "Sandwich", name: "Classic Selection", desc: "Club, BLT, caprese panini, turkey & avocado", price: "$249", img: cartSandwich },
  { category: "Sandwich", name: "Gourmet Wraps", desc: "Mediterranean, Asian fusion, BBQ pulled pork wraps", price: "$269", img: cartSandwich },
  { category: "Pizza", name: "Margherita Cart", desc: "Fresh mozzarella, basil, San Marzano tomatoes", price: "$349", img: cartPizza },
  { category: "Pizza", name: "Artisan Selection", desc: "Truffle mushroom, prosciutto & fig, four cheese", price: "$399", img: cartPizza },
  { category: "Cheese", name: "Classic Board", desc: "Brie, cheddar, gouda, grapes, crackers, honey", price: "$279", img: cartCheese },
  { category: "Cheese", name: "Luxury Board", desc: "Aged comté, manchego, blue stilton, truffle honey", price: "$399", img: cartCheese },
  { category: "Sweet", name: "Macaron Tower", desc: "Assorted French macarons in seasonal flavours", price: "$259", img: cartSweet },
  { category: "Sweet", name: "Dessert Paradise", desc: "Chocolate truffles, petit fours, crème brûlée", price: "$329", img: cartSweet },
  { category: "Drinks", name: "Coffee Bar", desc: "Espresso, cappuccino, lattes, iced coffee", price: "$199", img: cartBreakfast },
  { category: "Drinks", name: "Mocktail Station", desc: "Fresh fruit mocktails and sparkling beverages", price: "$229", img: cartBreakfast },
];

const MenuPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? menuItems : menuItems.filter((m) => m.category === active);

  return (
    <main className="pt-20">
      <section className="section-padding cream-gradient">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-body mb-3">Our Menu</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">Explore Our <span className="italic text-gradient">Carts</span></h1>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full font-body text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                  active === c ? "sage-gradient text-primary-foreground" : "bg-background border border-border text-foreground hover:border-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-background rounded-2xl overflow-hidden border border-border hover-lift"
                >
                  <div className="overflow-hidden aspect-[4/3]">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs uppercase tracking-wider text-primary font-body font-bold">{item.category}</span>
                    <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{item.name}</h3>
                    <p className="text-muted-foreground font-body text-sm mb-3">{item.desc}</p>
                    <p className="font-display text-xl font-bold text-primary">{item.price}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default MenuPage;
