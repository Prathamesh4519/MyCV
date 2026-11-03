import React from "react";
import { CheckCircle2, XCircle, Info, X } from "lucide-react";

export default function Toast({ toast, onClose }) {
  if (!toast || !toast.show) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <XCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-cyan-400 shrink-0" />
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="flex items-center gap-3 px-4 py-3 bg-slate-900/90 border border-slate-700/70 text-slate-100 rounded-xl shadow-2xl backdrop-blur-md max-w-sm">
        {icons[toast.type] || icons.info}
        <div className="text-sm font-medium pr-2">
          {toast.message}
        </div>
        <button
          onClick={onClose}
          className="p-1 text-slate-400 hover:text-slate-200 transition-colors rounded-lg"
          aria-label="Close Notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
