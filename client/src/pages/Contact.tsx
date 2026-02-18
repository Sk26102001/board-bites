import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="pt-20 section-padding cream-gradient min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-body mb-3">Get in Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">Contact <span className="italic text-gradient">Us</span></h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2 space-y-6">
            {[
              { icon: Phone, label: "+1 (555) 123-4567" },
              { icon: Mail, label: "hello@boardandbites.com" },
              { icon: MapPin, label: "New York, NY" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4 bg-background border border-border rounded-xl p-5">
                <div className="w-12 h-12 rounded-full sage-gradient flex items-center justify-center flex-shrink-0">
                  <c.icon size={20} className="text-primary-foreground" />
                </div>
                <span className="font-body text-foreground">{c.label}</span>
              </div>
            ))}
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sage-gradient text-primary-foreground rounded-xl p-5 font-body font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-background rounded-2xl border border-border p-8 space-y-5"
          >
            {sent ? (
              <div className="text-center py-12">
                <Send size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground font-body">We'll get back to you shortly.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-sm font-semibold text-foreground mb-2">Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-semibold text-foreground mb-2">Email</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-sm font-semibold text-foreground mb-2">Subject</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                </div>
                <div>
                  <label className="block font-body text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </div>
                <button type="submit" className="w-full sage-gradient text-primary-foreground py-4 rounded-full font-body font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
