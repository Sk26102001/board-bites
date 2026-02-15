// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import cartBreakfast from "@/assets/cart-breakfast.jpg";
// import cartSandwich from "@/assets/cart-sandwich.jpg";
// import cartPizza from "@/assets/cart-pizza.jpg";
// import cartCheese from "@/assets/cart-cheese.jpg";
// import cartSweet from "@/assets/cart-sweet.jpg";

// const carts = [
//   { img: cartBreakfast, title: "Breakfast Cart", desc: "Start the day with pastries, fruits & fresh juices", price: "From $299" },
//   { img: cartSandwich, title: "Sandwich Cart", desc: "Artisan sandwiches with premium fillings", price: "From $249" },
//   { img: cartPizza, title: "Pizza Cart", desc: "Wood-fired style gourmet pizzas", price: "From $349" },
//   { img: cartCheese, title: "Cheese Cart", desc: "Curated artisan cheese boards", price: "From $279" },
//   { img: cartSweet, title: "Sweets Cart", desc: "Macarons, truffles & petit fours", price: "From $259" },
// ];

// const FeaturedCarts = () => (
//   <section className="section-padding cream-gradient">
//     <div className="container mx-auto">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-14"
//       >
//         <p className="text-primary uppercase tracking-[0.2em] text-sm font-body mb-3">Our Collection</p>
//         <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
//           Featured <span className="italic text-gradient">Carts</span>
//         </h2>
//       </motion.div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {carts.map((c, i) => (
//           <motion.div
//             key={c.title}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.1 }}
//             className="group hover-lift bg-background rounded-2xl overflow-hidden shadow-sm border border-border"
//           >
//             <div className="overflow-hidden aspect-square">
//               <img
//                 src={c.img}
//                 alt={c.title}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="font-display text-xl font-bold text-foreground mb-2">{c.title}</h3>
//               <p className="text-muted-foreground font-body text-sm mb-4">{c.desc}</p>
//               <div className="flex items-center justify-between">
//                 <span className="text-primary font-display font-bold text-lg">{c.price}</span>
//                 <Link to="/booking" className="text-sm font-body font-semibold text-primary hover:text-sage-dark transition-colors uppercase tracking-wide">
//                   Book →
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="text-center mt-12"
//       >
//         <Link to="/menu" className="sage-gradient text-primary-foreground px-8 py-3 rounded-full font-body font-semibold text-sm uppercase tracking-wide hover:opacity-90 transition-opacity inline-block">
//           View Full Menu
//         </Link>
//       </motion.div>
//     </div>
//   </section>
// );

// export default FeaturedCarts;
import { motion } from "framer-motion";
import { ShoppingBag, Sparkles, Star } from "lucide-react";
import { Button } from "../ui/button";

const menuItems = [
  {
    title: "Artisan Breakfast",
    price: "2,000",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800&auto=format&fit=crop",
    tag: "Morning Choice"
  },
  {
    title: "Gourmet Sandwiches",
    price: "2,000",
    image: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?q=80&w=800&auto=format&fit=crop",
    tag: "Deli Special"
  },
  {
    title: "Stone Oven Pizza",
    price: "2,200",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    tag: "Hand-Stretched"
  },
  {
    title: "Charcuterie & Cheese",
    price: "1,800",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    tag: "Aged Selection"
  },
  {
    title: "French Patisserie",
    price: "1,500",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop",
    tag: "Bakery Fresh"
  },
  {
    title: "Garden Harvest",
    price: "1,600",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    tag: "Organic Green"
  },
  {
    title: "Indulgent Sweets",
    price: "1,800",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    tag: "Sweet Ending"
  },
  {
    title: "Signature Drinks",
    price: "1,200",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    tag: "Cold-Pressed"
  }
];

const FoodCartGrid = () => {
  return (
    <section className="bg-[#fdfcf0] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 text-[#88a382] mb-4">
            <Sparkles size={16} />
            <p className="uppercase tracking-[0.6em] text-[10px] font-bold">Board & Bites</p>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl text-[#2d3a2a] uppercase tracking-tighter">
            Our <span className="italic font-light lowercase">Catering</span> Carts
          </h2>
  

          <Button className="bg-[#88a382] mt-5 text-white px-12 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 shadow-2xl">
            VIEW ALL MENU

          </Button>
        </div>

        {/* 8-CARD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-[2.5rem] border border-stone-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Image & Price Tag */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-[#88a382] flex items-center gap-1">
                  <Star size={10} fill="currentColor" />
                  {item.tag}
                </div>
                {/* AED PRICE TAG */}
                <div className="absolute bottom-4 right-4 bg-[#2d3a2a]/90 backdrop-blur-md text-white px-4 py-1.5 rounded-xl">
                  <p className="font-bold text-sm">
                    {item.price} <span className="text-[10px] opacity-70">AED</span>
                  </p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 text-center">
                <h3 className="font-serif text-2xl text-[#2d3a2a] mb-6">
                  {item.title}
                </h3>
                
                {/* ORDER NOW BUTTON */}
                <button className="w-full bg-[#88a382]  hover:bg-[#2d3a2a] text-white py-4 rounded-2xl font-bold uppercase text-[10px] tracking-[0.3em] transition-all duration-500 flex items-center justify-center gap-2 shadow-lg">
                  <ShoppingBag size={14} />
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCartGrid;