import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FloatingCart() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ y: -300, opacity: 0, rotate: -25 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 160,
        damping: 12,
      }}
      onClick={() => navigate("/cart")}
      className="
        group
        fixed 
        bottom-8 
        right-8 
        z-[1000]
        cursor-pointer
      "
    >
      {/* Hover Ring */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="
          h-12 w-12
          rounded-full
          bg-amber-700
          opacity-0
          group-hover:opacity-40
          group-hover:animate-ping
        "></span>
      </span>

      {/* Main Button */}
      <div
        className="
          relative
          bg-amber-700
          text-white 
          p-4 
          rounded-full 
          shadow-2xl 
          hover:scale-110 
          active:scale-95 
          transition-transform
        "
      >
        <ShoppingCart size={24} />
      </div>
    </motion.div>
  );
}