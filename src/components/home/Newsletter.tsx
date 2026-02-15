import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section className="section-padding cream-gradient">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-body mb-3">Stay Updated</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Exclusive <span className="italic text-gradient">Offers</span>
          </h2>
          <p className="text-muted-foreground font-body mb-8">
            Subscribe to our newsletter for seasonal menus, early-bird discounts, and catering tips.
          </p>

          {subscribed ? (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex items-center justify-center gap-3 text-primary font-body font-semibold">
              <CheckCircle size={24} /> You're subscribed! Check your inbox.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-4 rounded-full border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <button
                type="submit"
                className="sage-gradient text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-sm uppercase tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
