import React, { useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Maximize2 } from 'lucide-react';

export default function Hero3DVideo({ onExpand }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [rotateX, setRotateX] = useState(4);
  const [rotateY, setRotateY] = useState(-10);

  // Smooth mouse tilt parallax for 3D depth
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 12; // tilt on X axis
    const rotY = ((x - centerX) / centerX) * 16;  // tilt on Y axis

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    // Return to default elegant perspective
    setRotateX(4);
    setRotateY(-10);
  };

  const toggleSound = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] mx-auto perspective-[1200px] select-none py-4"
    >
      {/* Ambient Atmospheric Glow behind 3D Screen */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/25 via-amber-500/20 to-purple-800/25 rounded-3xl blur-2xl pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '6s' }} />

      {/* 3D Floating Video Card Shell */}
      <div
        className="relative rounded-2xl bg-[#090D18] border-2 border-amber-400/40 p-2 sm:p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(245,158,11,0.25)] transition-transform duration-300 ease-out group"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Luxury Gold Bevel Corner Accents */}
        <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-amber-300 rounded-tl pointer-events-none z-30" />
        <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-amber-300 rounded-tr pointer-events-none z-30" />
        <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-amber-300 rounded-bl pointer-events-none z-30" />
        <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-amber-300 rounded-br pointer-events-none z-30" />

        {/* Video Canvas Container */}
        <div className="relative aspect-[9/16] sm:aspect-[4/5] md:aspect-[3/4] max-h-[460px] sm:max-h-[500px] w-full rounded-xl overflow-hidden bg-black flex items-center justify-center">
          
          {/* Real Video Element */}
          <video
            ref={videoRef}
            src="/hero-video.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover rounded-xl"
            onError={(e) => {
              // Fallback to original file name with spaces if needed
              if (e.target.src.indexOf('heeo') === -1) {
                e.target.src = '/heeo%20section%20video.mp4';
              }
            }}
          />

          {/* Subtle Cinematic Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Top Brand Watermark Header inside video */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between z-20 pointer-events-none">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-outfit uppercase tracking-widest text-amber-300 font-semibold shadow">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              <span>3D LIVE CINEMATIC</span>
            </div>

            <span className="font-cinzel text-[10px] text-white/90 tracking-widest font-bold drop-shadow">
              THE THIRD EYE
            </span>
          </div>

          {/* Interactive Floating Quick Controls */}
          <div className="absolute bottom-3 inset-x-3 flex items-center justify-between z-20">
            {/* Play/Pause + Sound Toggle Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={togglePlay}
                className="w-8 h-8 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                title={isPlaying ? 'Pause Video' : 'Play Video'}
                aria-label="Play/Pause"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
              </button>

              <button
                onClick={toggleSound}
                className={`px-2.5 py-1.5 rounded-full text-[10px] font-outfit font-semibold flex items-center gap-1.5 transition-all shadow-lg ${
                  isMuted
                    ? 'bg-black/70 text-slate-300 border border-white/20 hover:text-white'
                    : 'bg-amber-500 text-black border border-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.6)]'
                }`}
                title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                aria-label="Sound Toggle"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                <span>{isMuted ? 'Unmute' : 'Audio ON'}</span>
              </button>
            </div>

            {/* Tap to Expand / Watch Trailer */}
            {onExpand && (
              <button
                onClick={onExpand}
                className="w-8 h-8 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                title="Expand Fullscreen Trailer"
                aria-label="Expand"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Specular 3D Glass Sheen reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
        </div>

      </div>
    </div>
  );
}
