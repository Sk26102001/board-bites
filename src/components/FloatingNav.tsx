import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, UtensilsCrossed, CalendarDays, ImageIcon, HelpCircle, Phone, X, Menu, Info, Sparkles } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#hero" },
  { icon: Info, label: "About", href: "#about" },
  { icon: UtensilsCrossed, label: "Menu", href: "#menu" },
  { icon: Sparkles, label: "How It Works", href: "#how-it-works" },
  { icon: CalendarDays, label: "Book Now", href: "#cta" },
  { icon: ImageIcon, label: "Gallery", href: "#gallery" },
  { icon: HelpCircle, label: "FAQs", href: "#faqs" },
  { icon: Phone, label: "Contact", href: "#contact" },
];

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 right-0 bg-background/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-border p-4 min-w-[200px]"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-sage/10 transition-colors group"
                >
                  <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-body text-sm font-medium text-foreground">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center hover:shadow-2xl transition-shadow"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Menu className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingNav;
