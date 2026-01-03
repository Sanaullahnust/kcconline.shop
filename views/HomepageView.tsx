
import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Truck, 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall, 
  Zap, 
  CheckCircle2, 
  Package, 
  Award,
  Globe,
  Clock,
  CheckCircle,
  ShoppingBag
} from 'lucide-react';

const HomepageView: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-0 pb-0">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0d0e] text-white hero-gradient">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-[#84cc16]/10 blur-[150px] -rotate-12 translate-x-[20%]"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center relative z-10 pt-20">
          <div className="space-y-12 animate-in fade-in slide-in-from-left duration-1000">
            <div className="flex items-center gap-3">
              <span className="w-10 h-[2px] bg-[#84cc16]"></span>
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#84cc16]">KCC Online Shop Pakistan</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter">
              Authentic Tech. <br/>
              <span className="text-[#84cc16] italic underline decoration-white/20">Fast Solution.</span>
            </h1>
            
            <p className="text-xl text-slate-400 leading-relaxed max-w-lg font-medium">
              Your premier destination for high-end mobile accessories and innovative kitchen tools. Trusted by 50,000+ shoppers nationwide.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <button className="px-10 py-6 bg-[#84cc16] text-black font-black rounded-3xl hover:bg-[#a3e635] transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#84cc16]/30 flex items-center gap-3 group">
                Shop the Catalog <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <a href="https://wa.me/923295147517" target="_blank" className="px-10 py-6 bg-white/5 border-2 border-white/10 text-white font-black rounded-3xl hover:bg-white/10 transition-all flex items-center gap-3 group">
                <PhoneCall size={20} className="text-[#84cc16]" /> WhatsApp Order
              </a>
            </div>

            <div className="flex items-center gap-12 pt-8 border-t border-white/5">
              <div><p className="text-3xl font-black">50k+</p><p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Sales</p></div>
              <div className="w-px h-10 bg-white/10"></div>
              <div><p className="text-3xl font-black">4.9/5</p><p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Rating</p></div>
            </div>
          </div>

          <div className="hidden lg:block relative group animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white/10 scale-95 hover:scale-100 transition-transform duration-1000">
               <img 
                src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=1400" 
                alt="Genuine Smartphone Accessories Pakistan" 
                className="w-full aspect-[4/5] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-10 left-10 p-6 glass-header rounded-[2.5rem] shadow-2xl text-black">
                 <div className="flex text-amber-500 gap-1 mb-2">
                   {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-amber-500" />)}
                 </div>
                 <p className="text-sm font-black">"Best quality gadgets in Lahore. Fast delivery!"</p>
                 <p className="text-[10px] font-black text-slate-400 mt-2 uppercase">Verified Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLASH SALE SECTION */}
      <section className="bg-[#84cc16] py-16 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
          <div className="flex items-center gap-6">
            <div className="p-5 bg-black text-[#84cc16] rounded-3xl shadow-xl animate-bounce">
              <Zap size={32} />
            </div>
            <div>
              <h2 className="text-black text-3xl font-black tracking-tight">Flash Sale Ending In:</h2>
              <div className="flex gap-4 mt-2">
                {[{l:'Hrs',v:timeLeft.hours},{l:'Min',v:timeLeft.minutes},{l:'Sec',v:timeLeft.seconds}].map((u, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="bg-black text-white px-3 py-1 rounded-lg font-black text-xl min-w-[3rem] text-center">{u.v < 10 ? `0${u.v}` : u.v}</span>
                    <span className="text-[10px] font-black text-black/50 uppercase tracking-widest mt-1">{u.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button className="px-10 py-5 bg-black text-white font-black rounded-2xl hover:scale-105 transition-all shadow-2xl flex items-center gap-3">
            Claim Your Discount <ArrowRight size={20} />
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <Zap className="absolute top-10 right-20 w-64 h-64 rotate-12" />
        </div>
      </section>

      {/* 3. LOGISTICS TRUST BAR */}
      <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10 flex flex-wrap justify-center lg:justify-between items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           <span className="text-xs font-black tracking-[0.4em] uppercase text-slate-500">Logistics & Payments:</span>
           <div className="flex items-center gap-3 font-black text-slate-900"><Truck size={24} /> TCS EXPRESS</div>
           <div className="flex items-center gap-3 font-black text-slate-900"><Package size={24} /> LEOPARDS</div>
           <div className="flex items-center gap-3 font-black text-slate-900"><Award size={24} /> JAZZCASH</div>
           <div className="font-black text-slate-900 border-2 border-black px-2 py-0.5">VISA / MASTERCARD</div>
        </div>
      </section>

      {/* 4. CATEGORY GRID */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <span className="text-[11px] font-black text-[#84cc16] uppercase tracking-[0.5em] mb-4 block">Shop Collections</span>
          <h2 className="text-5xl font-black text-black tracking-tighter">Everything You Need.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { n: 'Kitchen Gear', i: 'https://images.unsplash.com/photo-1520981757710-441c73a1ac92?auto=format&fit=crop&q=80&w=800' },
            { n: 'Smart Accessories', i: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800' },
            { n: 'Home Comfort', i: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800' }
          ].map((c, i) => (
            <div key={i} className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer">
               <img src={c.i} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={c.n} loading="lazy" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-12 flex flex-col justify-end">
                  <h3 className="text-white text-3xl font-black tracking-tighter mb-4">{c.n}</h3>
                  <button className="flex items-center gap-2 text-[#84cc16] font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">Browse <ArrowRight size={14} /></button>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SEO AUTHORITY CONTENT */}
      <section className="bg-slate-50 py-24 border-y border-slate-100 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-black tracking-tight underline decoration-[#84cc16] decoration-4">Premium Quality Gadgets</h3>
            <p className="text-slate-500 text-sm leading-relaxed">As Pakistan's top-rated tech hub, <strong>KCC Online Shop</strong> brings you hand-picked mobile accessories. From PD fast chargers to high-capacity power banks, every item undergoes manual stress testing before dispatch to ensure it meets our "Fast Solution" standard.</p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-black tracking-tight underline decoration-[#84cc16] decoration-4">Modern Kitchen Solutions</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Upgrade your home with industrial-grade blenders, innovative choppers, and sleek kettle sets. Our kitchen essentials are designed for durability and performance, specifically tailored for Pakistani households who value efficiency and style.</p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-black tracking-tight underline decoration-[#84cc16] decoration-4">Trusted Across Pakistan</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Whether you are in Karachi, Lahore, or Islamabad, our logistics network ensures your order reaches you within 48-72 hours. We offer safe <strong>Cash on Delivery (COD)</strong> and a transparent 7-day replacement warranty for ultimate peace of mind.</p>
          </div>
        </div>
      </section>

      {/* 6. BRAND VALUE PROPOSITION - REPLACED NEWSLETTER */}
      <section className="bg-black text-white py-32 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-12">
            <div className="inline-flex items-center gap-4 px-6 py-2 bg-[#84cc16]/10 border border-[#84cc16]/20 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84cc16] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#84cc16]"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#84cc16]">Official Brand Guarantee</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none">
              The Gold Standard of <br/>
              <span className="text-[#84cc16] italic">Online Trust.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <ShieldCheck className="text-[#84cc16]" />, title: 'Genuine Inventory', desc: 'Direct imports from verified manufacturers.' },
                { icon: <Clock className="text-[#84cc16]" />, title: '48hr Delivery', desc: 'Express shipping to all major PK cities.' },
                { icon: <Globe className="text-[#84cc16]" />, title: 'Nationwide Reach', desc: 'Serving every corner of Pakistan safely.' },
                { icon: <PhoneCall className="text-[#84cc16]" />, title: 'Live Support', desc: 'Real humans on WhatsApp, not bots.' }
              ].map((item, i) => (
                <div key={i} className="group p-6 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-[#84cc16]/5 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-[#84cc16]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-black text-lg mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#84cc16] to-emerald-900 rounded-[4rem] p-1 flex items-center justify-center shadow-2xl shadow-[#84cc16]/20 relative overflow-hidden group">
               {/* Professional Logo Display based on attached image vibe */}
               <div className="w-full h-full bg-black rounded-[3.8rem] flex flex-col items-center justify-center relative z-10 p-12 overflow-hidden">
                 <div className="absolute inset-0 bg-radial-glow opacity-30"></div>
                 
                 <div className="relative mb-8 transform group-hover:scale-105 transition-transform duration-700">
                   <div className="absolute inset-0 bg-[#84cc16] blur-3xl opacity-20"></div>
                   <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-[0_0_60px_-15px_rgba(132,204,22,0.5)] border-4 border-emerald-500/10">
                      <ShoppingBag size={80} className="text-[#84cc16]" strokeWidth={2} />
                   </div>
                 </div>

                 <div className="text-center">
                    <h3 className="text-4xl font-black tracking-tight leading-none">KCC <br/> <span className="text-[#84cc16]">ONLINE.SHOP</span></h3>
                    <div className="h-px w-20 bg-[#84cc16]/30 mx-auto my-4"></div>
                    <p className="text-[10px] font-black tracking-[0.6em] text-slate-500 uppercase">Fast Solution</p>
                 </div>
               </div>
               
               {/* Decorative background elements */}
               <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#84cc16]/20 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-900/40 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .bg-radial-glow {
          background: radial-gradient(circle at center, rgba(132, 204, 22, 0.4) 0%, transparent 70%);
        }
      `}</style>
    </div>
  );
};

export default HomepageView;
