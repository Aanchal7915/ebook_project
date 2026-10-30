import React from 'react';
import { Eye, Shield, Award, Sparkles, Feather, Globe, BookOpen } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: Eye,
      title: 'Visionary Curation',
      desc: 'We publish fewer than twelve titles each year. Every manuscript undergoes rigorous academic peer-review, philosophical distillation, and narrative polishing.'
    },
    {
      icon: Feather,
      title: 'Artisan Digital Typography',
      desc: 'Each edition is custom-typeset with micro-balanced line heights, dual Sanskrit-English glyph rendering, and high-DPI sacred geometry illustrations.'
    },
    {
      icon: Globe,
      title: 'Global Indic Renaissance',
      desc: 'Bridging the profound insights of ancient Indian civilizational epics with quantum theory, cybernetics, and asymmetric wealth creation.'
    },
    {
      icon: Award,
      title: 'Empowering Indian Thinkers',
      desc: 'Authors receive industry-unprecedented 75% digital royalty splits, ensuring intellectual independence and authentic voice.'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#0A0C13] border-t border-white/5 overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-800/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-purple-500/30 text-purple-300 text-xs font-outfit uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>The Manifesto</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            See Beyond the <span className="text-gradient-purple">Ordinary</span>
          </h2>

          <p className="font-outfit text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            In an era of fleeting social feeds and automated regurgitation, The Third Eye was born to restore the sanctity of deep, transformative reading.
          </p>
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-6 text-slate-300 font-outfit font-light leading-relaxed">
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white leading-snug">
              Why We Call It "The Third Eye"
            </h3>

            <p>
              In Indian philosophy, the two physical eyes gaze upon the dualistic, material world—the ephemeral dance of forms known as <span className="text-purple-300 font-medium italic">Maya</span>. But the <span className="text-amber-300 font-medium">Ajna Chakra</span>—the Third Eye—is the intuitive lens that perceives underlying unity, cosmic order, and timeless truth.
            </p>

            <p>
              When you open an e-book from our sanctum, you are not merely purchasing a digital file. You are entering an intentional environment engineered to elevate your cognitive frequency. No distracting ads. No algorithmic recommendations designed to outrage you. Just pure, unadulterated consciousness expanding across the page.
            </p>

            <div className="pt-2 border-l-2 border-amber-400/80 pl-4 italic text-slate-200 font-serif text-lg">
              "We do not seek readers who skim. We seek seekers who are prepared to be permanently reconfigured by ideas."
            </div>
          </div>

          {/* Right: Architectural Highlights */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="glass-card rounded-2xl p-6 space-y-3 border border-white/5 hover:border-purple-500/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-amber-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-cinzel text-base font-bold text-white">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-outfit leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
