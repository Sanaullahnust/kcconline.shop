
import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Truck, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  CheckCircle2, 
  Package, 
  Award,
  Globe,
  Clock,
  Wrench,
  Utensils,
  Lightbulb
} from 'lucide-react';

interface HomepageProps {
  onNavigate: (page: any) => void;
  initialScrollTo?: string;
}

// Reusable high-fidelity logo component matching the user's image with enhanced visibility
const KCCLogo = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 500 500" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="logo-bg-grad-hero" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
        <stop offset="85%" style={{ stopColor: '#f8fafc', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#f1f5f9', stopOpacity: 1 }} />
      </radialGradient>
      <linearGradient id="ring-gradient-hero-enhanced" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 0.9 }} />
        <stop offset="50%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#84cc16', stopOpacity: 0.9 }} />
      </linearGradient>
      <filter id="icon-shadow-hero" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <feOffset dx="0" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    
    <circle cx="250" cy="250" r="240" fill="none" stroke="url(#ring-gradient-hero-enhanced)" strokeWidth="14" />
    <circle cx="250" cy="250" r="225" fill="url(#logo-bg-grad-hero)" />
    
    <g transform="translate(100, 100) scale(0.6)" filter="url(#icon-shadow-hero)">
      <g transform="translate(40, 20)">
        <path d="M120,150 Q200,30 280,150" fill="none" stroke="#1e293b" strokeWidth="15" strokeLinecap="round" />
        <path d="M80,160 L320,160 L380,300 L20,300 Z" fill="#84cc16" />
        <circle cx="140" cy="180" r="10" fill="#1e293b" />
        <circle cx="260" cy="210" r="10" fill="#1e293b" />
        <path d="M20,330 Q200,180 380,310" fill="none" stroke="#84cc16" strokeWidth="35" strokeLinecap="round" />
        <path d="M360,280 L430,315 L360,350 Z" fill="#84cc16" />
      </g>
      <text x="250" y="440" fontFamily="Inter, sans-serif" fontSize="65" fontWeight="900" textAnchor="middle" fill="#0f172a">KCC</text>
      <text x="250" y="525" fontFamily="Inter, sans-serif" fontSize="90" fontWeight="900" textAnchor="middle">
        <tspan fill="#84cc16">Online</tspan>
        <tspan fill="#0f172a">.Shop</tspan>
      </text>
      <text x="250" y="585" fontFamily="Inter, sans-serif" fontSize="32" fontWeight="800" textAnchor="middle" fill="#64748b" letterSpacing="12">FAST SOLUTION</text>
    </g>
  </svg>
);

const HomepageView: React.FC<HomepageProps> = ({ onNavigate, initialScrollTo }) => {
  useEffect(() => {
    if (initialScrollTo) {
      const el = document.getElementById(initialScrollTo);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [initialScrollTo]);

  const bestItems = [
    { name: 'Electric Arc Lighter', price: 850, img: 'https://images.unsplash.com/photo-1622445275576-72142f60d715?auto=format&fit=crop&q=80&w=800', desc: 'Windproof, rechargeable, perfect for any weather.' },
    { name: 'Cordless Power Drill', price: 2500, img: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=800', desc: 'Heavy duty, long battery life for home projects.' },
    { name: 'Multi-Function Blender', price: 3200, img: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&q=80&w=800', desc: 'Elite grinding and blending for your kitchen.' },
    { name: 'Wall Mounted Shelf', price: 1200, img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800', desc: 'Space-saving modern design for smart homes.' },
    { name: 'USB Gadget Charger', price: 450, img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800', desc: 'Multi-port high speed charging for all devices.' },
    { name: 'Kitchen Knife Set', price: 900, img: 'https://images.unsplash.com/photo-1593611358412-231bb803b097?auto=format&fit=crop&q=80&w=800', desc: 'Stay-sharp stainless steel professional set.' }
  ];

  const topSellers = [
    { 
      name: 'Industrial Power Drill', 
      price: 2500, 
      rating: 4.9, 
      desc: "Perfect for Karak homes – durable design for heavy-duty projects. The wind won't stop your work anymore.",
      img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1200'
    },
    { 
      name: 'Elite Kitchen Mixer', 
      price: 3200, 
      rating: 4.8, 
      desc: "A staple for every KPK kitchen. Reliable motor and easy-to-clean components for traditional cooking.",
      img: 'https://images.unsplash.com/photo-1591261730799-ee4e6c2d16d7?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  return (
    <div className="space-y-0 pb-0">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 rounded-l-[10rem] -z-10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center pt-24">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <span className="inline-block px-4 py-2 bg-brand-blue/10 text-brand-blue text-[10px] font-black uppercase tracking-[0.4em] rounded-full">
              Karak's #1 Gadget Hub
            </span>
            <h1 className="text-6xl md:text-7xl font-black leading-[0.9] tracking-tighter text-slate-900">
              Upgrade Your Home with <br/>
              <span className="text-brand-blue">Elite Gadgets.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-lg font-medium">
              Home Improvement, Kitchen Essentials & Smart Gadgets Delivered Fast. Experience the gold standard of local shopping.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => onNavigate('products')}
                className="px-10 py-5 bg-brand-orange text-white font-black rounded-[2rem] hover:bg-orange-600 transition-all transform hover:-translate-y-1 shadow-2xl shadow-orange-500/30 flex items-center gap-3 group"
              >
                Shop Now <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <a 
                href="https://wa.me/923295147517?text=Hi%20KCC!%20I%20want%20to%20see%20your%20latest%20catalog."
                className="px-10 py-5 bg-white border-2 border-slate-100 text-slate-900 font-black rounded-[2rem] hover:bg-slate-50 transition-all flex items-center gap-3"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="relative animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1400" 
                alt="Tools and Gadgets" 
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[3rem] shadow-2xl z-20 hidden md:block border border-slate-50">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-brand-green/20 rounded-2xl flex items-center justify-center text-brand-green">
                   <Zap size={24} />
                 </div>
                 <div>
                   <p className="text-2xl font-black text-slate-900 leading-none">850</p>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Starting Price</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <ShieldCheck className="text-brand-blue" />, title: 'Premium Quality', desc: 'Hand-picked authentic products only.' },
              { icon: <Award className="text-brand-orange" />, title: 'Affordable Prices', desc: 'Wholesale rates for everyone.' },
              { icon: <Truck className="text-brand-green" />, title: 'Fast Local Delivery', desc: '48-hour delivery across Karak & KPK.' },
              { icon: <CheckCircle2 className="text-indigo-500" />, title: 'Trusted in Karak', desc: 'Your local store, near Jail Chowk.' }
            ].map((f, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all border border-transparent hover:border-slate-100 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-8 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS PREVIEW */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <span className="text-[10px] font-black text-brand-blue uppercase tracking-[0.5em]">Explore Catalog</span>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter">Popular Essentials.</h2>
            </div>
            <button onClick={() => onNavigate('products')} className="text-sm font-black text-brand-orange uppercase tracking-widest flex items-center gap-2 group hover:gap-4 transition-all">
              View All Products <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {bestItems.map((item, i) => (
              <div key={i} className="group bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-slate-100">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.name} loading="lazy" />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-2xl font-black text-sm text-brand-blue">
                    Rs. {item.price}
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-xl font-black text-slate-900">{item.name}</h3>
                  <p className="text-xs text-slate-500 font-medium line-clamp-2">{item.desc}</p>
                  <a 
                    href={`https://wa.me/923295147517?text=Hi%20KCC!%20I%20want%20to%20order%20the%20${encodeURIComponent(item.name)}%20-%20Rs%20${item.price}`}
                    target="_blank"
                    className="w-full py-4 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 hover:bg-brand-blue transition-all"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOT DEALS */}
      <section id="deals" className="py-32 bg-brand-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
           <Zap className="absolute top-10 right-20 w-64 h-64 rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
           <div className="text-center mb-20 space-y-4">
              <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.5em]">Bundle & Save</span>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">Hot Weekly Deals.</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white rounded-[3.5rem] p-10 flex flex-col md:flex-row gap-8 items-center border border-white/20 shadow-2xl relative group overflow-hidden">
                 <div className="absolute top-0 right-0 px-6 py-2 bg-brand-orange text-white text-[10px] font-black uppercase rounded-bl-3xl">20% OFF</div>
                 <div className="w-40 h-40 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
                    <Utensils size={64} className="text-brand-blue" />
                 </div>
                 <div className="space-y-4 flex-1">
                    <h3 className="text-2xl font-black text-slate-900 leading-tight">Kitchen Starter Kit</h3>
                    <p className="text-sm text-slate-500 font-medium">Blender + Knife Set + Lighter combo. Everything you need for a modern KPK home.</p>
                    <a href="https://wa.me/923295147517?text=Hi%20KCC!%20I%20want%20the%20Kitchen%20Starter%20Kit%20Deal!" className="inline-flex items-center gap-3 px-8 py-3 bg-brand-blue text-white font-black rounded-2xl hover:scale-105 transition-all text-xs uppercase tracking-widest">Grab Deal</a>
                 </div>
              </div>
              <div className="bg-white rounded-[3.5rem] p-10 flex flex-col md:flex-row gap-8 items-center border border-white/20 shadow-2xl relative group overflow-hidden">
                 <div className="absolute top-0 right-0 px-6 py-2 bg-brand-orange text-white text-[10px] font-black uppercase rounded-bl-3xl">SAVE RS. 500</div>
                 <div className="w-40 h-40 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
                    <Wrench size={64} className="text-brand-blue" />
                 </div>
                 <div className="space-y-4 flex-1">
                    <h3 className="text-2xl font-black text-slate-900 leading-tight">Master Handyman Combo</h3>
                    <p className="text-sm text-slate-500 font-medium">Power Drill + Tool Bag + LED Work Light. Pro tools at a student price.</p>
                    <a href="https://wa.me/923295147517?text=Hi%20KCC!%20I%20want%20the%20Master%20Handyman%20Deal!" className="inline-flex items-center gap-3 px-8 py-3 bg-brand-blue text-white font-black rounded-2xl hover:scale-105 transition-all text-xs uppercase tracking-widest">Grab Deal</a>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. TOP SELLERS (STORY STYLE) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-20 space-y-4">
             <span className="text-[10px] font-black text-brand-orange uppercase tracking-[0.5em]">Karak's Favorites</span>
             <h2 className="text-5xl font-black text-slate-900 tracking-tighter">Elite Top Sellers.</h2>
          </div>
          
          <div className="space-y-20">
             {topSellers.map((item, i) => (
               <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                  <div className="flex-1 rounded-[4rem] overflow-hidden shadow-2xl relative group">
                     <img src={item.img} className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000" alt={item.name} />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="flex-1 space-y-8">
                     <div className="flex items-center gap-2 text-brand-orange">
                        {[1,2,3,4,5].map(s => <Star key={s} size={18} className="fill-brand-orange" />)}
                        <span className="text-slate-400 font-black ml-2">{item.rating}/5.0</span>
                     </div>
                     <h3 className="text-4xl font-black text-slate-900 leading-tight">{item.name}</h3>
                     <p className="text-lg text-slate-500 leading-relaxed font-medium italic">"{item.desc}"</p>
                     <div className="pt-4 flex items-center gap-8">
                        <span className="text-4xl font-black text-brand-blue">Rs. {item.price}</span>
                        <a href={`https://wa.me/923295147517?text=Hi%20KCC!%20I'm%20interested%20in%20the%20${encodeURIComponent(item.name)}`} className="px-10 py-5 bg-brand-orange text-white font-black rounded-3xl hover:bg-orange-600 transition-all shadow-xl">Order Yours Now</a>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col items-center text-center mb-20 space-y-4">
            <span className="text-[10px] font-black text-brand-blue uppercase tracking-[0.5em]">Customer Love</span>
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-none">Voices of the <br/> Community.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { text: "Best electric lighter in Karak! Fast delivery and very friendly service. Highly recommended.", name: "Ahmed K.", loc: "Karak Central" },
              { text: "Bought the kitchen mixer for my mother. She loves it! The quality is amazing for this price.", name: "Maria S.", loc: "Banda Daud Shah" },
              { text: "Finally a reliable tech shop in KPK. The power tools are genuine and work perfectly.", name: "Umar Khan", loc: "Takht-e-Nasrati" }
            ].map((t, i) => (
              <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100 flex flex-col justify-between hover:scale-105 transition-transform">
                <p className="text-lg text-slate-600 font-medium leading-relaxed italic">"{t.text}"</p>
                <div className="mt-10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue font-black uppercase">{t.name[0]}</div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm">{t.name}</h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.loc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SPECIAL DEALS & BULK */}
      <section className="py-24 bg-[#0f0f0f] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
           <div className="bg-brand-blue rounded-[4rem] p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
              <div className="space-y-6 relative z-10 max-w-xl text-center lg:text-left">
                 <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">Need Bulk Supplies for Your Project?</h2>
                 <p className="text-lg text-white/70 font-medium">We offer special rates for contractors and large home renovation projects. Get authentic tools at unbeatable bulk prices.</p>
              </div>
              <a href="https://wa.me/923295147517?text=Hi%20KCC!%20I%20want%20to%20get%20a%20quote%20for%20bulk%20order." className="px-12 py-6 bg-white text-brand-blue font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl relative z-10 flex items-center gap-3">Get a Custom Quote <ArrowRight size={20} /></a>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default HomepageView;
