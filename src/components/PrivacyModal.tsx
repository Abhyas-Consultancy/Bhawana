import { ReactNode } from "react";
import { X } from "lucide-react";

interface PrivacyModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const PrivacyModal = ({ open, onClose, title, children }: PrivacyModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* PrivacyModal */}
      <div className="relative bg-background w-full max-w-3xl mx-4 rounded-lg shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="font-serif text-xl font-semibold">{title}</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-muted-foreground hover:text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-5 max-h-[70vh] overflow-y-auto text-sm text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
