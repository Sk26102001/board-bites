// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import logo from "@/assets/logo.png";

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About" },
//   { to: "/menu", label: "Menu" },
//   { to: "/services", label: "Services" },
//   { to: "/gallery", label: "Gallery" },
//   { to: "/booking", label: "Booking" },
//   { to: "/faq", label: "FAQs" },
//   { to: "/contact", label: "Contact" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const { pathname } = useLocation();

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
//       <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
//         <Link to="/" className="flex items-center gap-2">
//           <img src={logo} alt="Board & Bites" className="h-10 md:h-14 object-contain" />
//         </Link>

//         {/* Desktop */}
//         <div className="hidden lg:flex items-center gap-8">
//           {navLinks.map((l) => (
//             <Link
//               key={l.to}
//               to={l.to}
//               className={`text-sm font-body tracking-wide uppercase transition-colors duration-200 hover:text-primary ${
//                 pathname === l.to ? "text-primary font-semibold" : "text-foreground/70"
//               }`}
//             >
//               {l.label}
//             </Link>
//           ))}
//           <Link
//             to="/booking"
//             className="sage-gradient text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide uppercase hover:opacity-90 transition-opacity"
//           >
//             Book Now
//           </Link>
//         </div>

//         {/* Mobile toggle */}
//         <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
//           {open ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden bg-background border-b border-border overflow-hidden"
//           >
//             <div className="flex flex-col gap-1 px-4 py-4">
//               {navLinks.map((l) => (
//                 <Link
//                   key={l.to}
//                   to={l.to}
//                   onClick={() => setOpen(false)}
//                   className={`py-3 px-4 rounded-lg text-sm uppercase tracking-wide font-body transition-colors ${
//                     pathname === l.to
//                       ? "bg-primary/10 text-primary font-semibold"
//                       : "text-foreground/70 hover:bg-muted"
//                   }`}
//                 >
//                   {l.label}
//                 </Link>
//               ))}
//               <Link
//                 to="/booking"
//                 onClick={() => setOpen(false)}
//                 className="sage-gradient text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase text-center mt-2"
//               >
//                 Book Now
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;
