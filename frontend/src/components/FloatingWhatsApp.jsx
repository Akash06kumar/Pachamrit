import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waGeneralLink } from "@/lib/whatsapp";

export const FloatingWhatsApp = () => (
  <motion.a
    href={waGeneralLink()}
    target="_blank"
    rel="noopener noreferrer"
    data-testid="sticky-whatsapp-float"
    aria-label="Chat with Avora Homes on WhatsApp"
    initial={{ opacity: 0, scale: 0.6, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay: 1.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.94 }}
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.6)] transition-colors duration-300 hover:bg-wahover"
  >
    <MessageCircle className="h-6 w-6" />
    <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa opacity-60" />
      <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-sand bg-wa" />
    </span>
  </motion.a>
);
