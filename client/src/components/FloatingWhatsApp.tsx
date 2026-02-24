import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2"
    >
      <div className="bg-white px-4 py-2 rounded-2xl shadow-lg border border-border text-sm font-medium text-foreground origin-bottom-left animate-bounce" style={{ animationDuration: '3s' }}>
        Chat with me! 👋
        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white border-b border-r border-border transform rotate-45"></div>
      </div>
      
      <a
        href="https://wa.me/998XXXXXXXXX?text=Hi,%20I%20want%20a%20consultation"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:shadow-xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:-translate-y-1"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </motion.div>
  );
}
