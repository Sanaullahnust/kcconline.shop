
import React, { useState, useEffect } from 'react';
import { 
  Code, Search, LayoutTemplate, Share2, Facebook, Twitter, 
  Linkedin, Link, CheckCircle, List, MessageSquare, Star, Braces,
  ShoppingCart, Info, ShieldCheck, MapPin, Minus, Plus, Heart, PhoneCall
} from 'lucide-react';

const ProductTemplateView: React.FC = () => {
  // Localized Product Data - Essential Daily Use (Power Bank)
  const variants = {
    basePrice: 4200,
    colors: [
      { name: 'Piano Black', hex: '#111827', img: 'https://images.unsplash.com/photo-1609592424210-91741753715c?auto=format&fit=crop&q=80&w=1000' },
      { name: 'Arctic White', hex: '#f9fafb', img: 'https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?auto=format&fit=crop&q=80&w=1000' },
      { name: 'Pacific Blue', hex: '#1e3a8a', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=1000' }
    ],
    capacities: [
      { name: '10,000mAh', upcharge: 0, desc: 'Ultra-Slim / Daily Carry' },
      { name: '20,000mAh Pro', upcharge: 1800, desc: 'Fast Charge / 2-3 Days' },
      { name: '30,000mAh Ultra', upcharge: 3500, desc: 'Power Delivery / Laptop' }
    ]
  };

  const [selectedColor, setSelectedColor] = useState(variants.colors[0]);
  const [selectedCap, setSelectedCap] = useState(variants.capacities[1]);
  const [quantity, setQuantity] = useState(1);
  const [isChanging, setIsChanging] = useState(false);

  // Smooth image transition effect
  const handleColorChange = (color: typeof variants.colors[0]) => {
    if (color.name === selectedColor.name) return;
    setIsChanging(true);
    setTimeout(() => {
      setSelectedColor(color);
      setIsChanging(false);
    }, 150);
  };

  const unitPrice = variants.basePrice + selectedCap.upcharge;
  const totalPrice = unitPrice * quantity;

  const schemaMarkup = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "KCC Ultra-Fast Power Bank",
    "image": [selectedColor.img],
    "description": "Premium high-capacity portable charger optimized for Pakistani power conditions. Support for PD 3.0 and dual output.",
    "brand": { "@type": "Brand", "name": "KCC Online" },
    "sku": `KCC-PB-${selectedColor.name.split(' ').pop()?.toUpperCase()}-${selectedCap.name.replace(/\D/g, '')}`,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "PKR",
      "price": totalPrice.toString(),
      "availability": "https://schema.org/InStock",
      "url": "https://kcconline.shop/product/powerbank"
    }
  };

  return (
    <div className="space-y-12 pb-20">
      {/* MAIN PRODUCT INTERFACE */}
      <section className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50">
        <div className="p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* VISUALS COLUMN */}
          <div className="space-y-8">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 group">
              {/* Dynamic Image with Transition */}
              <img 
                src={selectedColor.img} 
                alt={selectedColor.name} 
                className={`w-full h-full object-cover transition-all duration-500 ease-out transform group-hover:scale-105 ${isChanging ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
              />
              
              {/* Trust Badges on Image */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-[10px] font-black shadow-lg uppercase tracking-widest inline-flex items-center gap-2">
                  <ShieldCheck size={14} /> Official Warranty
                </span>
                <span className="bg-white/90 backdrop-blur text-slate-900 px-4 py-2 rounded-xl text-[10px] font-bold shadow-sm uppercase tracking-widest border border-slate-100">
                  {selectedColor.name} Edition
                </span>
              </div>
              
              <button className="absolute top-6 right-6 p-4 bg-white/90 backdrop-blur rounded-full text-slate-400 hover:text-rose-500 shadow-lg transition-all active:scale-90 border border-slate-100">
                <Heart size={20} className="fill-current text-transparent hover:text-rose-500" />
              </button>
            </div>
            
            {/* THUMBNAIL GALLERY / COLOR SELECTORS AS THUMBS */}
            <div className="flex gap-4 p-2 bg-slate-50/50 rounded-3xl border border-slate-100 w-fit mx-auto lg:mx-0">
               {variants.colors.map((c, i) => (
                 <button 
                  key={i}
                  onClick={() => handleColorChange(c)}
                  className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all p-0.5 relative ${selectedColor.name === c.name ? 'border-emerald-600 shadow-md ring-4 ring-emerald-50' : 'border-transparent opacity-60 hover:opacity-100 grayscale hover:grayscale-0'}`}
                 >
                   <img src={c.img} className="w-full h-full object-cover rounded-xl" />
                   {selectedColor.name === c.name && (
                     <div className="absolute inset-0 bg-emerald-600/10 flex items-center justify-center">
                        <CheckCircle size={20} className="text-emerald-600 bg-white rounded-full" />
                     </div>
                   )}
                 </button>
               ))}
            </div>
          </div>

          {/* CONFIGURATION COLUMN */}
          <div className="flex flex-col justify-center">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex text-amber-400 gap-0.5">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-amber-400" />)}
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">4.9 / 5.0 Rating</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
                KCC Ultra-Fast <br/><span className="text-emerald-600">Pro Power Bank</span>
              </h1>
              
              <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-lg">
                Engineered for Pakistan's heavy power usage. Supports fast charging for iPhone, Samsung, and Huawei devices. Stay powered during travels or load-shedding.
              </p>
              
              <div className="flex flex-wrap items-baseline gap-3 bg-slate-50 p-6 rounded-3xl border border-slate-100 w-fit">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total:</span>
                <span className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter">
                  Rs. {totalPrice.toLocaleString()}
                </span>
                <div className="flex flex-col ml-2">
                  <span className="text-sm text-slate-400 line-through font-medium">Rs. {(totalPrice * 1.6).toLocaleString()}</span>
                  <span className="text-[10px] font-black text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full w-fit">40% OFF</span>
                </div>
              </div>
            </div>

            <div className="space-y-10 py-10 border-y border-slate-100">
              {/* INTERACTIVE COLOR SWATCHES */}
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-5">Selected Finish: <span className="text-slate-900">{selectedColor.name}</span></label>
                <div className="flex gap-5">
                  {variants.colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => handleColorChange(color)}
                      className={`w-14 h-14 rounded-full border-2 p-1.5 transition-all flex items-center justify-center relative ${selectedColor.name === color.name ? 'border-emerald-600 shadow-xl scale-110 ring-8 ring-emerald-50' : 'border-slate-200 hover:border-slate-300'}`}
                      title={color.name}
                    >
                      <div className="w-full h-full rounded-full shadow-inner border border-black/5" style={{ backgroundColor: color.hex }}></div>
                      {selectedColor.name === color.name && (
                        <div className="absolute -bottom-1 -right-1 bg-emerald-600 text-white rounded-full p-1 shadow-lg">
                          <CheckCircle size={12} />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* CAPACITY BUTTONS */}
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-5">Capacity Upgrade</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {variants.capacities.map((cap, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedCap(cap)}
                      className={`text-left p-5 rounded-[1.5rem] border-2 transition-all flex flex-col justify-between h-28 group ${selectedCap.name === cap.name ? 'border-emerald-600 bg-emerald-50/30 shadow-lg shadow-emerald-600/5' : 'border-slate-100 hover:border-slate-300 bg-white'}`}
                    >
                      <div className="flex justify-between items-start w-full">
                        <span className={`font-black text-sm tracking-tight ${selectedCap.name === cap.name ? 'text-emerald-900' : 'text-slate-900'}`}>{cap.name}</span>
                        {cap.upcharge > 0 && <span className="text-[10px] font-black text-emerald-600">+ Rs.{cap.upcharge.toLocaleString()}</span>}
                      </div>
                      <span className="text-[10px] text-slate-400 font-bold leading-tight group-hover:text-slate-600 transition-colors uppercase tracking-tight">{cap.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* QUANTITY SELECTOR */}
              <div className="flex items-center justify-between bg-slate-50 p-4 rounded-[1.5rem] border border-slate-100">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Quantity</label>
                <div className="flex items-center gap-6 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors active:scale-90"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-10 text-center font-black text-slate-900 text-xl">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors active:scale-90"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* ACTION FOOTER */}
            <div className="mt-10 space-y-5">
               <div className="flex flex-col sm:flex-row gap-4">
                 <button className="flex-[2] py-6 bg-emerald-600 text-white rounded-[1.5rem] font-black text-lg flex items-center justify-center gap-4 hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-600/40 group active:scale-[0.98]">
                    <ShoppingCart size={24} className="group-hover:translate-x-1 transition-transform" /> Confirm Order - Rs. {totalPrice.toLocaleString()}
                 </button>
                 <button className="flex-1 py-6 bg-slate-900 text-white rounded-[1.5rem] font-bold flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl active:scale-[0.98]">
                    <PhoneCall size={20} /> WhatsApp
                 </button>
               </div>
               
               <div className="flex flex-wrap gap-8 justify-center py-4 opacity-70">
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    <ShieldCheck size={16} className="text-emerald-600" /> Cash On Delivery
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    <MapPin size={16} className="text-emerald-600" /> 2-4 Days Delivery
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    <CheckCircle size={16} className="text-emerald-600" /> 7-Day Checking Warranty
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO & TECHNICAL METADATA (DYNAMICALY UPDATED) */}
      <section className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
        <div className="p-10 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-emerald-600 text-white rounded-3xl shadow-xl">
              <Braces size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white tracking-tight">E-Commerce Structured Data</h3>
              <p className="text-slate-400 text-sm">Real-time JSON-LD for Search Engines & Rich Snippets</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-sm">
             <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
             <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Synchronized State</span>
          </div>
        </div>

        <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
           <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-emerald-600/30 transition-colors">
                  <p className="text-[10px] font-black text-emerald-400 uppercase mb-3 tracking-widest flex items-center gap-2">
                    <Info size={12} /> Dynamic Price Index
                  </p>
                  <p className="text-2xl font-black text-white">Rs. {totalPrice.toLocaleString()}</p>
                  <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold">Currency: PKR (Pakistani Rupee)</p>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-emerald-600/30 transition-colors">
                  <p className="text-[10px] font-black text-emerald-400 uppercase mb-3 tracking-widest">SKU Generation</p>
                  <p className="text-sm font-mono text-white tracking-wider break-all">{schemaMarkup.sku}</p>
                </div>
              </div>
              <div className="p-6 bg-emerald-950/30 rounded-3xl border border-emerald-900/50">
                <h5 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-3">SEO Context</h5>
                <p className="text-xs text-emerald-100/60 leading-relaxed font-medium">
                  Google Search crawlers see the exact combination of price, stock, and imagery as the user modifies the product. This creates higher quality rich-snippets in SERPs, leading to better conversion from organic traffic.
                </p>
              </div>
           </div>
           
           <div className="lg:col-span-2">
              <div className="bg-[#0f172a] rounded-[2rem] p-8 lg:p-12 font-mono text-[11px] overflow-x-auto text-emerald-300 shadow-inner h-full border border-white/5">
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-rose-500/30 border border-rose-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/30 border border-amber-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/30 border border-emerald-500/50"></div>
                  </div>
                  <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">LD+JSON Validation Output</span>
                </div>
                <pre className="whitespace-pre-wrap leading-relaxed">{JSON.stringify(schemaMarkup, null, 2)}</pre>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ProductTemplateView;
