import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "./SectionHeading";
import { faqs } from "@/data/products";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const interests = [
  "Cement Pots & Planters",
  "Designer Vases",
  "Wall Art & Paintings",
  "Decorative Objects",
  "Custom / Bulk Order",
  "General Enquiry",
];

const EnquiryForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    product_interest: interests[0],
    message: "",
  });
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/enquiries`, form);
      toast.success("Enquiry sent — we'll reach out to you shortly.");
      setForm({
        name: "",
        phone: "",
        city: "",
        product_interest: interests[0],
        message: "",
      });
    } catch (err) {
      toast.error("Could not send your enquiry. Please try WhatsApp instead.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      data-testid="enquiry-form"
      className="rounded-[26px] border border-stone-200 bg-white p-7 shadow-[0_24px_60px_-30px_rgba(74,58,42,0.35)] sm:p-9"
    >
      <h3 className="font-serif text-2xl font-semibold text-ink">
        Ask us anything
      </h3>
      <p className="mt-2 text-sm text-stone-600">
        Custom sizes, bulk orders, styling help — we reply within a few hours.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          required
          placeholder="Your name"
          value={form.name}
          onChange={set("name")}
          data-testid="enquiry-name-input"
          className="h-12 rounded-xl border-stone-200 bg-sand/60"
        />
        <Input
          required
          type="tel"
          placeholder="Phone / WhatsApp number"
          value={form.phone}
          onChange={set("phone")}
          data-testid="enquiry-phone-input"
          className="h-12 rounded-xl border-stone-200 bg-sand/60"
        />
        <Input
          placeholder="City"
          value={form.city}
          onChange={set("city")}
          data-testid="enquiry-city-input"
          className="h-12 rounded-xl border-stone-200 bg-sand/60"
        />
        <select
          value={form.product_interest}
          onChange={set("product_interest")}
          data-testid="enquiry-interest-select"
          className="h-12 w-full rounded-xl border border-stone-200 bg-sand/60 px-3 text-sm text-stone-700 outline-none transition-colors focus:border-terra"
        >
          {interests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      <Textarea
        placeholder="Tell us what you're looking for…"
        value={form.message}
        onChange={set("message")}
        data-testid="enquiry-message-input"
        className="mt-4 min-h-[110px] rounded-xl border-stone-200 bg-sand/60"
      />
      <button
        type="submit"
        disabled={sending}
        data-testid="enquiry-form-submit-btn"
        className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-sand transition-colors duration-300 hover:bg-terra disabled:opacity-60"
      >
        {sending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        {sending ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
};

export const FaqEnquiry = () => (
  <section
    id="faqs"
    data-testid="faqs-enquiry-section"
    className="scroll-mt-24 bg-sand py-20 sm:py-28"
  >
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeading
        eyebrow="Good to Know"
        title="FAQs & Enquiries"
        copy="Everything about ordering, delivery and caring for your pieces — or just ask us directly."
        testid="faqs-heading"
      />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Accordion type="single" collapsible data-testid="faqs-accordion">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`faq-${i}`}
                className="border-stone-200"
              >
                <AccordionTrigger
                  data-testid={`faq-trigger-${i}`}
                  className="text-left font-serif text-lg font-semibold text-ink hover:text-terra hover:no-underline"
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent
                  data-testid={`faq-content-${i}`}
                  className="text-sm leading-relaxed text-stone-600"
                >
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <EnquiryForm />
        </motion.div>
      </div>
    </div>
  </section>
);
