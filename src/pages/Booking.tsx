import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";

const cartOptions = ["Breakfast Cart", "Sandwich Cart", "Pizza Cart", "Cheese Cart", "Sweets Cart", "Candy Cart", "Drinks Cart"];

const Booking = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", guests: "", location: "", cart: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="pt-20 section-padding min-h-screen flex items-center justify-center cream-gradient">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-md">
          <CalendarCheck size={64} className="text-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Booking Submitted!</h2>
          <p className="text-muted-foreground font-body">We'll get back to you within 24 hours to confirm your event details.</p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="pt-20 section-padding cream-gradient min-h-screen">
      <div className="container mx-auto max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-body mb-3">Book Your Cart</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">Make a <span className="italic text-gradient">Reservation</span></h1>
        </motion.div>

        <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} onSubmit={handleSubmit} className="bg-background rounded-2xl border border-border p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Full Name", key: "name", type: "text", placeholder: "John Doe" },
              { label: "Email", key: "email", type: "email", placeholder: "john@example.com" },
              { label: "Phone", key: "phone", type: "tel", placeholder: "+1 (555) 000-0000" },
              { label: "Event Date", key: "date", type: "date", placeholder: "" },
              { label: "Number of Guests", key: "guests", type: "number", placeholder: "50" },
              { label: "Event Location", key: "location", type: "text", placeholder: "City, Venue" },
            ].map((f) => (
              <div key={f.key}>
                <label className="block font-body text-sm font-semibold text-foreground mb-2">{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
                  value={(form as any)[f.key]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block font-body text-sm font-semibold text-foreground mb-2">Select Cart</label>
            <select
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              value={form.cart}
              onChange={(e) => setForm({ ...form, cart: e.target.value })}
            >
              <option value="">Choose a cart...</option>
              {cartOptions.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div>
            <label className="block font-body text-sm font-semibold text-foreground mb-2">Special Requests</label>
            <textarea
              rows={3}
              placeholder="Dietary requirements, themes, or special notes..."
              className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
          </div>

          <button type="submit" className="w-full sage-gradient text-primary-foreground py-4 rounded-full font-body font-semibold text-lg uppercase tracking-wide hover:opacity-90 transition-opacity">
            Submit Booking
          </button>
        </motion.form>
      </div>
    </main>
  );
};

export default Booking;
