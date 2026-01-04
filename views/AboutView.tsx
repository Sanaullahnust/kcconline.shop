
import React from 'react';
import { MapPin, Users, History, ShieldCheck } from 'lucide-react';

const AboutView: React.FC = () => {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-[10px] font-black text-brand-blue uppercase tracking-[0.5em]">The KCC Story</span>
            <h1 className="text-6xl font-black text-slate-900 tracking-tighter leading-none">Serving Karak with <br/> Excellence.</h1>
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              KCC Online Shop started with a simple vision: to bridge the gap between high-quality global innovation and the hardworking community of Karak. Located conveniently near Jail Chowk, we are more than just an online store—we are your local neighbors.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
              <div className="space-y-4">
                 <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue"><MapPin /></div>
                 <h4 className="font-black text-slate-900">Local Presence</h4>
                 <p className="text-xs text-slate-400 font-medium">Physical store near Jail Chowk, Karak, KPK.</p>
              </div>
              <div className="space-y-4">
                 <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange"><Users /></div>
                 <h4 className="font-black text-slate-900">Customer First</h4>
                 <p className="text-xs text-slate-400 font-medium">50,000+ satisfied customers nationwide.</p>
              </div>
            </div>
          </div>
          <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-slate-50 relative group">
             <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-1000" alt="Team Work" />
             <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
