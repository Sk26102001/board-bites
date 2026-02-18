import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Percent } from "lucide-react";

interface SpecialOffer {
  id: number;
  category: string;
  title: string;
  offerTag: string; // New field for visibility
  time?: string;
  image: string;
  gridClass: string;
}

const offers: SpecialOffer[] = [
  {
    id: 1,
    category: "Morning Combo",
    title: "Fresh Roast + Artisan Brew",
    offerTag: "Save 20%",
    time: "8–11 AM ONLY",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop",
    gridClass: "md:col-span-2",
  },
  {
    id: 2,
    category: "B1G1",
    title: "Seasonal Refreshers",
    offerTag: "Buy 1 Get 1",
    time: "3 PM TO 6 PM",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: 3,
    category: "Birthday Treat",
    title: "Exclusive Table Side Service",
    offerTag: "Free Pastry",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1000&auto=format&fit=crop",
    gridClass: "md:col-span-1",
  },
  {
    id: 4,
    category: "Daily Special",
    title: "Chef's Morning Preparation",
    offerTag: "Limited Edition",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop",
    gridClass: "md:col-span-1",
  },
  {
    id: 5,
    category: "Weekend Offer",
    title: "Artisan Tasting Board",
    offerTag: "Special Price",
    time: "WEEKENDS ONLY",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop",
    gridClass: "md:col-span-1",
  },
  {
    id: 6,
    category: "Sunset Tea",
    title: "Premium Herbal Infusions",
    offerTag: "15% OFF",
    time: "4 PM - 7 PM",
    image: "http://localhost:8080/src/assets/cart-breakfast.jpg",
    gridClass: "md:col-span-1",
  },
  {
    id: 7,
    category: "New Member",
    title: "Complimentary Artisan Sample",
    offerTag: "Welcome Gift",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1000&auto=format&fit=crop",
    gridClass: "md:col-span-1",
  },
  {
    id: 8,
    category: "Group Deal",
    title: "The Social Platter",
    offerTag: "Group Discount",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop",
    gridClass: "md:col-span-1",
  },
  {
    id: 9,
    category: "Late Night",
    title: "Sweet Cravings Bundle",
    offerTag: "Sweet Deal",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1000&auto=format&fit=crop",
    gridClass: "md:col-span-1",
  }
];

const SpecialDeals: React.FC = () => {
  return (
    <div className="bg-[#fdfcf0] min-h-screen py-16 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
{/* HEADER */}
        <div className="text-center mb-12">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#88a382] uppercase tracking-[0.4em] text-[10px] font-bold mb-3"
          >
            Special Deals
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-3xl md:text-5xl text-[#2d3a2a] uppercase tracking-tight"
          >
            Limited Offers <span className="italic font-light opacity-70">Just For You</span>
          </motion.h1>
        </div>

        {/* BENTO GRID - Optimized for 9 items to remove gaps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden rounded-2xl border border-[#2d3a2a]/10 bg-white ${offer.gridClass}`}
            >
              <img 
                src={offer.image} 
                alt={offer.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Top Badge (Visible Offer Tag) */}
              <div className="absolute top-4  left-4 z-20">
                <span className="bg-white/90 backdrop-blur-sm text-[#2d3a2a] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-black/5">
                  {offer.offerTag}
                </span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                <span className="text-[#88a382] text-sm font-bold uppercase tracking-[0.2em] block mb-1">
                  {offer.category}
                </span>
                <h3 className="text-white font-serif text-lg md:text-xl mb-1 leading-tight">
                  {offer.title}
                </h3>
                {offer.time && (
                  <p className="text-white/50 text-[8px] font-bold mb-3 tracking-wide uppercase">{offer.time}</p>
                )}
                
                <button className="w-fit flex items-center gap-2 bg-[#88a382] text-white px-5 py-2 rounded-lg text-[9px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#2d3a2a] transition-all duration-300">
                  Claim Offer
                  <ArrowUpRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-20 text-center">
          {/* <p className="text-[#2d3a2a]/40 text-[10px] uppercase tracking-widest font-medium">
            * Terms and conditions apply to all seasonal offers.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default SpecialDeals;