import React from 'react';
import { Sparkles, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function Toast() {
  const { toast } = useShop();

  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const isError = toast.type === 'error';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce sm:animate-none max-w-sm">
      <div className={`p-4 rounded-2xl glass-panel shadow-[0_15px_40px_rgba(0,0,0,0.85)] border flex items-center gap-3 backdrop-blur-xl ${
        isSuccess
          ? 'border-purple-500/50 bg-[#120F20]/95 text-white'
          : isError
          ? 'border-red-500/50 bg-[#200F12]/95 text-white'
          : 'border-white/10 bg-[#0F111A]/95 text-slate-200'
      }`}>
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
          isSuccess
            ? 'bg-purple-950 text-purple-300 border border-purple-500/40'
            : isError
            ? 'bg-red-950 text-red-300 border border-red-500/40'
            : 'bg-slate-800 text-amber-300 border border-white/10'
        }`}>
          {isSuccess ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          ) : isError ? (
            <AlertCircle className="w-4 h-4 text-red-400" />
          ) : (
            <Sparkles className="w-4 h-4 text-amber-400" />
          )}
        </div>

        <p className="text-xs font-outfit leading-snug">
          {toast.message}
        </p>
      </div>
    </div>
  );
}
