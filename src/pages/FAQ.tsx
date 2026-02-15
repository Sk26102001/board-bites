import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How far in advance should I book?", a: "We recommend booking at least 2–4 weeks in advance to ensure availability, especially during peak season (April–October)." },
  { q: "What areas do you serve?", a: "We currently serve the greater New York metropolitan area. Travel fees may apply for locations beyond 30 miles." },
  { q: "Do you accommodate dietary restrictions?", a: "Absolutely! We offer vegan, gluten-free, and allergen-friendly options. Let us know your needs when booking." },
  { q: "What is the minimum guest count?", a: "Our carts are designed for events with 20+ guests. For smaller gatherings, we offer customized board packages." },
  { q: "What's included in the service?", a: "Full setup, professional service staff, premium tableware, and cleanup are all included in our packages." },
  { q: "How does payment work?", a: "We require a 30% deposit to secure your booking, with the remaining balance due 7 days before the event." },
  { q: "Can I customize the menu?", a: "Yes! All our menus can be tailored to your preferences, dietary needs, and event theme." },
  { q: "What is your cancellation policy?", a: "Cancellations made 14+ days before the event receive a full refund of the deposit. Within 14 days, the deposit is non-refundable." },
];

const FAQ = () => (
  <main className="pt-20 section-padding cream-gradient min-h-screen">
    <div className="container mx-auto max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
        <p className="text-primary uppercase tracking-[0.2em] text-sm font-body mb-3">Questions</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">Frequently <span className="italic text-gradient">Asked</span></h1>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-xl px-6 overflow-hidden">
              <AccordionTrigger className="font-display text-lg font-semibold text-foreground hover:no-underline py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </main>
);

export default FAQ;
