import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 text-xl text-white h-screen z-50"
        >
          <Link href="/about" onClick={onClose}>About</Link>
          {/* <Link href="/work" onClick={onClose}>Portfolio</Link> */}
          <Link href="/services" onClick={onClose}>Services</Link>
          <Link href="/contact" onClick={onClose}>Contact</Link>
          <button onClick={onClose} className="absolute top-6 right-6 text-2xl">✕</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
