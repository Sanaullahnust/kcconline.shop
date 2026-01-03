
import React from 'react';
import { Star, Truck, ShieldCheck, RefreshCcw, ArrowRight, Package, CheckCircle2, PhoneCall } from 'lucide-react';

const HomepageView: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* HERO SECTION - Localized for Pakistan */}
      <section className="relative overflow-hidden rounded-3xl bg-emerald-900 text-white min-h-[600px] flex items-center px-8 lg:px-20 shadow-2xl">
        <div className="max-w-2xl relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/30 text-emerald-100 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-400/30">
            Pakistan's Trusted Choice for Daily Essentials
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            Quality Items. <br/><span className="text-emerald-400 text-4xl lg:text-6xl">Delivered to Your Doorstep.</span>
          </h1>
          <p className="text-xl text-emerald-100 mb-10 leading-relaxed max-w-xl">
            From smart kitchen gadgets to reliable mobile accessories, we bring the world's best daily-use products to every home in Pakistan. 
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-10 py-4 bg-white text-emerald-900 font-bold rounded-xl hover:bg-emerald-50 transition-all transform hover:-translate-y-1 shadow-xl shadow-white/10 flex items-center gap-2">
              Explore Shop <ArrowRight size={20} />
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-emerald-400 text-white font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2">
              <PhoneCall size={18} /> WhatsApp Order
            </button>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-8 opacity-90">
            <div className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 size={16} className="text-emerald-400" /> Cash on Delivery</div>
            <div className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 size={16} className="text-emerald-400" /> 7-Day Replacement</div>
            <div className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 size={16} className="text-emerald-400" /> All Over Pakistan</div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 top-0 w-1/2 bg-gradient-to-l from-emerald-800/50 to-transparent hidden lg:block">
           <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800" 
            alt="Household Essentials" 
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
        </div>
      </section>

      {/* LOCAL TRUST MARKETS */}
      <section className="py-12 bg-white rounded-3xl border border-slate-100 shadow-sm px-8">
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Available Payment Channels</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all">
             <div className="text-lg font-black text-slate-700">JazzCash</div>
          </div>
          <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all">
             <div className="text-lg font-black text-slate-700">EasyPaisa</div>
          </div>
          <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all">
             <div className="text-lg font-black text-slate-700">Bank Transfer</div>
          </div>
          <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all">
             <div className="text-lg font-black text-slate-700">COD Available</div>
          </div>
        </div>
      </section>

      {/* DAILY USE CATEGORIES */}
      <section>
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Essential Categories</h2>
            <p className="text-slate-500 mt-2">Quality products for your daily needs</p>
          </div>
          <button className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center gap-1 group">
            View All <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Kitchen & Home', count: '240+ Products', img: 'https://images.unsplash.com/photo-1520981757710-441c73a1ac92?auto=format&fit=crop&q=80&w=600' },
            { name: 'Mobile & Tech', count: '180+ Products', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600' },
            { name: 'Personal Care', count: '120+ Products', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600' },
          ].map((cat, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden aspect-video lg:aspect-square cursor-pointer shadow-lg">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/10 to-transparent flex flex-col justify-end p-8">
                <p className="text-emerald-300 text-sm font-bold tracking-widest uppercase mb-1">{cat.count}</p>
                <h3 className="text-white text-2xl font-bold tracking-tight">{cat.name}</h3>
                <div className="w-0 group-hover:w-12 h-1 bg-white mt-4 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR DAILY PRODUCTS */}
      <section>
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Popular in Pakistan</h2>
          <div className="h-px flex-1 bg-slate-100"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: '20,000mAh Power Bank', price: '4,500', old: '6,000', cat: 'Mobile Accessories' },
            { name: 'Electric Kettle 2.0L', price: '3,200', old: '4,500', cat: 'Kitchen' },
            { name: 'Bluetooth Earbuds Pro', price: '2,800', old: '4,000', cat: 'Audio' },
            { name: 'LED Smart Bulb RGB', price: '1,200', old: '1,800', cat: 'Home' },
            { name: 'High-Speed Blender', price: '8,500', old: '11,000', cat: 'Kitchen' },
            { name: 'Cordless Hair Trimmer', price: '2,100', old: '3,500', cat: 'Grooming' },
            { name: 'Solar Emergency Light', price: '1,800', old: '2,500', cat: 'Daily Essentials' },
            { name: 'Air Fryer XL 5L', price: '18,500', old: '22,000', cat: 'Kitchen' },
          ].map((item, id) => (
            <div key={id} className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-50">
              <div className="aspect-square overflow-hidden bg-slate-50 relative">
                <img 
                  src={`https://picsum.photos/seed/kcc-pk-${id}/600/600`} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 px-3 py-1 rounded-full text-[10px] font-bold text-white shadow-sm uppercase tracking-tighter">Sale</span>
                </div>
                <button className="absolute bottom-4 right-4 p-4 bg-emerald-600 text-white rounded-xl shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-emerald-700">
                  <ShoppingCart size={20} />
                </button>
              </div>
              <div className="p-6">
                <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest mb-1">{item.cat}</p>
                <h3 className="font-bold text-slate-800 line-clamp-1 mb-4 group-hover:text-emerald-600 transition-colors">{item.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold text-slate-400">Rs.</span>
                  <span className="text-xl font-black text-slate-900">{item.price}</span>
                  <span className="text-xs text-slate-400 line-through font-medium ml-2">Rs. {item.old}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US - PK Localized */}
      <section className="bg-slate-900 rounded-[3rem] p-12 lg:p-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <h2 className="text-4xl font-bold tracking-tight mb-6">Shopping Made Simple</h2>
          <p className="text-slate-400 text-lg leading-relaxed">KCC Online brings trust to Pakistani e-commerce. No hidden charges, just quality products with reliable service.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {[
            { icon: <Truck className="text-emerald-400" />, title: 'Fast PK Delivery', desc: 'Deliveries within 2-4 working days across Pakistan via TCS/Leopard.' },
            { icon: <ShieldCheck className="text-emerald-400" />, title: 'Checked Products', desc: 'Every item is manually tested before dispatch to ensure 0% faults.' },
            { icon: <RefreshCcw className="text-emerald-400" />, title: 'Easy Returns', desc: 'Simple 7-day checking warranty for complete peace of mind.' },
            { icon: <PhoneCall className="text-emerald-400" />, title: '24/7 Support', desc: 'Direct WhatsApp support for orders, tracking, and complaints.' },
          ].map((item, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center">
              <div className="w-14 h-14 bg-emerald-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER - Professional & Localized */}
      <footer className="pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          <div className="space-y-8">
             <h1 className="text-3xl font-bold text-slate-900 tracking-tighter flex items-center gap-2">
              <span className="bg-emerald-600 px-3 py-1 rounded text-white shadow-lg">KCC</span>
              <span>online.shop</span>
            </h1>
            <p className="text-slate-500 leading-relaxed max-w-sm">
              Your one-stop destination for high-quality daily use items in Pakistan. We bridge the gap between global quality and local convenience.
            </p>
            <div className="flex gap-4">
               {['Facebook', 'WhatsApp', 'Instagram'].map(social => (
                 <a key={social} href="#" className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 hover:bg-emerald-600 hover:text-white transition-all">
                   {social}
                 </a>
               ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h4 className="font-bold text-slate-900 mb-8 uppercase text-xs tracking-widest">Shop By Need</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Kitchen Gadgets</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Mobile Essentials</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Home Comfort</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Flash Sales</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-8 uppercase text-xs tracking-widest">Support</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-emerald-600 transition-colors">WhatsApp Order</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Track My Courier</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Warranty Policy</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-100 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-xs text-slate-400 font-bold uppercase tracking-widest text-center md:text-left">
              © 2024 KCC ONLINE SHOP PAKISTAN. DELIVERING EXCELLENCE NATIONWIDE.
            </div>
            
            <div className="flex items-center gap-4 opacity-70">
              <span className="text-[10px] font-bold text-slate-400">PARTNERS:</span>
              <div className="text-[10px] font-bold text-slate-600 px-2 py-1 border rounded">TCS</div>
              <div className="text-[10px] font-bold text-slate-600 px-2 py-1 border rounded">Leopard</div>
              <div className="text-[10px] font-bold text-slate-600 px-2 py-1 border rounded">M&P</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ChevronRight = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
);

const ShoppingCart = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
);

export default HomepageView;
