import React, { useRef, useEffect } from 'react';
import { X, Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 select-none">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#090D18] border border-amber-400/40 rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] z-10 overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="p-3.5 sm:p-4 bg-[#0F1424] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="font-cinzel text-xs sm:text-sm font-bold text-white tracking-widest uppercase">
              The Third Eye — Cinematic Trailer
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close Trailer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            src="/hero-video.mp4"
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
            onError={(e) => {
              if (e.target.src.indexOf('heeo') === -1) {
                e.target.src = '/heeo%20section%20video.mp4';
              }
            }}
          />
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#0B0F1A] border-t border-white/5 flex items-center justify-between text-[11px] font-outfit text-slate-400">
          <span>Official Visual Artifact • 4K Experience</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-amber-500 hover:bg-amber-400 text-black font-semibold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
