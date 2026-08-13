import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "../icons";

interface CertificateModalProps {
  src: string | null;
  alt: string;
  onClose: () => void;
}

export const CertificateModal = ({ src, alt, onClose }: CertificateModalProps) => (
  <AnimatePresence>
    {src && (
      <motion.div
        className="fixed inset-0 z-[60] flex items-center justify-center bg-accent-ink/90 p-4 sm:p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-h-full max-w-4xl border-2 border-signal bg-surface p-2"
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center border-2 border-accent-ink bg-signal text-accent-ink"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
          <img src={src} alt={alt} className="max-h-[85vh] w-full object-contain" />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
