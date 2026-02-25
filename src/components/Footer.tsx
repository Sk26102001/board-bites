import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (

  
  <footer className="sage-gradient text-primary-foreground">

    
 <div className="fixed bottom-6 left-6 z-50">
  {/* Smaller Ping Ring */}
  <span className="absolute inset-0 flex items-center justify-center">
    <span className="h-12 w-12 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
  </span>

  {/* Main Button */}
  <a
    href="https://wa.me/919999999999"
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-flex items-center justify-center 
               bg-[#25D366] text-white 
               p-3 rounded-full 
               shadow-md
               hover:scale-110  
               transition-transform duration-300"
  >
    <FaWhatsapp className="h-9 w-9" />
  </a>
</div>

    <div className="container mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-2xl font-bold mb-4">Board & Bites</h3>
          <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
            Premium food cart catering for every occasion. From elegant cheese boards to gourmet pizzas, we bring the feast to you.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/menu", label: "Our Menu" },
              { to: "/booking", label: "Book Now" },
              { to: "/about", label: "About Us" },
              { to: "/gallery", label: "Gallery" },
              { to: "/faq", label: "FAQs" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-primary-foreground/70 hover:text-sage-light transition-colors text-sm font-body">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70 font-body">
            <span className="flex items-center gap-2"><Phone size={16} /> +1 (555) 123-4567</span>
            <span className="flex items-center gap-2"><Mail size={16} /> hello@boardandbites.com</span>
            <span className="flex items-center gap-2"><MapPin size={16} /> New York, NY</span>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-sage transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-sage transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/50 font-body">
        © 2026 Board & Bites Catering. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
