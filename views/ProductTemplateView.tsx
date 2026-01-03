
import React, { useState, useEffect } from 'react';
import { 
  Star, 
  CheckCircle, 
  ShoppingCart, 
  ShieldCheck, 
  MapPin, 
  Minus, 
  Plus, 
  Heart, 
  Truck, 
  Package, 
  Facebook, 
  Twitter, 
  MessageCircle, 
  Share2, 
  Check,
  TrendingDown,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

const ProductTemplateView: React.FC = () => {
  const businessNumber = "923295147517";
  const variants = {
    basePrice: 4200,
    colors: [
      { 
        name: 'Piano Black', 
        hex: '#111827', 
        img: 'https://images.unsplash.com/photo-1609592424210-91741753715c?auto=format&fit=crop&q=80&w=1200' 
      },
      { 
        name: 'Arctic White', 
        hex: '#f9fafb', 
        img: 'https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?auto=format&fit=crop&q=80&w=1200' 
      },
      { 
        name: 'Pacific Blue', 
        hex: '#1e3a8a', 
        img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=1200' 
      }
    ],
    capacities: [
      { name: '10,000mAh', upcharge: 0, desc: 'Slim & Light' },
      { name: '20,000mAh Pro', upcharge: 1800, desc: 'PD 22.5W Fast' },
      { name: '30,000mAh Ultra', upcharge: 3500, desc: 'The Powerhouse' }
    ]
  };

  const recentlyViewed = [
    { name: 'Portable Air Cooler Pro', price: '3,200', cat: 'Home Essentials', id: 101 },
    { name: 'OLED Smart Watch S9', price: '7,500', cat: 'Wearables', id: 102 },
    { name: 'USB-C Magnetic Adapter', price: '650', cat: 'Tech', id: 103 },
    { name: 'Backlit Gaming Pad', price: '1,500', cat: 'Computing', id: 104 },
  ];

  const [selectedColor, setSelectedColor] = useState(variants.colors[0]);
  const [prevImage, setPrevImage] = useState(variants.colors[0].img);
  const [selectedCap, setSelectedCap] = useState(variants.capacities[1]);
  const [quantity, setQuantity] = useState(1);
  const [fade, setFade] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [priceFlash, setPriceFlash] = useState(false);

  const unitPrice = variants.basePrice + selectedCap.upcharge;
  const oldPrice = Math.round((unitPrice * 1.45) / 100) * 100;
  const totalPrice = unitPrice * quantity;

  useEffect(() => {
    setPriceFlash(true);
    const timer = setTimeout(() => setPriceFlash(false), 600);
    return () => clearTimeout(timer);
  }, [selectedCap]);

  const handleColorChange = (color: typeof variants.colors[0]) => {
    if (color.name === selectedColor.name) return;
    setFade(false);
    setTimeout(() => {
      setPrevImage(selectedColor.img);
      setSelectedColor(color);
      setFade(true);
    }, 300);
  };

  const handleAddToCart = () => {
    const orderDetails = {
      product: "KCC Ultra-Fast Pro Power Station",
      color: selectedColor.name,
      capacity: selectedCap.name,
      quantity: quantity,
      totalPrice: totalPrice,
    };
    console.log("Order Added:", orderDetails);
    setIsSuccess(true);
    setShowToast(true);
    setTimeout(() => setIsSuccess(false), 2000);
    setTimeout(() => setShowToast(false), 3500);
  };

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(`Hi KCC Online,\n\nI want to place an order for:\n📦 Product: KCC Ultra-Fast Pro Power Station\n🎨 Color: ${selectedColor.name}\n🔋 Capacity: ${selectedCap.name}\n🔢 Quantity: ${quantity}\n💰 Total: Rs. ${totalPrice.toLocaleString()}\n\nPlease confirm my order. Thanks!`);
    window.open(`https://wa.me/${businessNumber}?text=${message}`, '_blank');
  };

  const handleWhatsAppSupport = () => {
    const message = encodeURIComponent(`Hi KCC Support,\n\nI have a question about the KCC Ultra-Fast Pro Power Station. Can you help me?`);
    window.open(`https://wa.me/${businessNumber}?text=${message}`, '_blank');
  };

  const shareUrl = window.location.href;
  const shareText = "KCC Ultra-Fast Pro Power Station - The best power bank in Pakistan!";

  return (
    <div className="bg-[#fafafa] min-h-screen relative">
      <style>{`
        @keyframes price-pop {
          0% { transform: scale(1); color: #0f172a; }
          50% { transform: scale(1.05); color: #059669; }
          100% { transform: scale(1); color: #0f172a; }
        }
        .animate-price-pop {
          animation: price-pop 0.4s ease-out;
        }
      `}</style>

      {/* Floating Success Toast */}
      <div className={`fixed top-32 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 pointer-events-none ${showToast ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
        <div className="bg-emerald-600 text-white px-8 py-4 rounded-[2rem] shadow-2xl flex items-center gap-4 border border-emerald-400/20 backdrop-blur-md">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Check size={18} strokeWidth={3} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Inventory Reserved</span>
            <span className="font-bold text-sm">{selectedCap.name} Added!</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-24 space-y-24">
        <section className="bg-white rounded-[4rem] premium-shadow overflow-hidden border border-slate-100 animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Gallery Column */}
            <div className="p-8 lg:p-12 space-y-8 bg-slate-50/50">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-white premium-shadow border border-slate-100 group">
                <img src={prevImage} className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm" alt="Bg" />
                <img src={selectedColor.img} className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-110 ${fade ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`} alt={selectedColor.name} />
                <div className="absolute top-10 left-10">
                  <span className="bg-slate-900 text-white px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl flex items-center gap-2">
                    <ShieldCheck size={14} className="text-emerald-400" /> KCC Authentic
                  </span>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                {variants.colors.map((c, i) => (
                  <button key={i} onClick={() => handleColorChange(c)} className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all p-1 ${selectedColor.name === c.name ? 'border-emerald-600 ring-4 ring-emerald-50' : 'border-white opacity-40'}`}>
                    <img src={c.img} className="w-full h-full object-cover rounded-xl" alt={c.name} />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Column */}
            <div className="p-8 lg:p-20 flex flex-col justify-center space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex text-amber-500 gap-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-amber-500" />)}
                  </div>
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Verified Excellence</span>
                </div>

                <h1 className="text-5xl font-black text-slate-900 tracking-tighter leading-none">
                  KCC Ultra-Fast <br/>
                  <span className="text-emerald-600">Pro Power Station</span>
                </h1>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                  <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 inline-flex flex-col gap-1 min-w-[240px]">
                     <div className="flex items-center gap-2 mb-1">
                        <TrendingDown size={12} className="text-emerald-600" />
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.4em]">Special PK Offer</span>
                     </div>
                     <div className="flex items-baseline gap-4">
                       <span className={`text-5xl font-black text-slate-900 tracking-tighter transition-all duration-300 ${priceFlash ? 'animate-price-pop' : ''}`}>
                         Rs. {unitPrice.toLocaleString()}
                       </span>
                       <span className="text-lg text-slate-400 font-bold line-through">Rs. {oldPrice.toLocaleString()}</span>
                     </div>
                  </div>

                  {/* Enhanced Social Sharing Section */}
                  <div className="space-y-4">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                       <Share2 size={12} /> Spread the word
                    </p>
                    <div className="flex gap-3">
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" className="w-12 h-12 rounded-2xl bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all shadow-sm group">
                        <Facebook size={20} className="group-hover:scale-110 transition-transform" />
                      </a>
                      <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`} target="_blank" className="w-12 h-12 rounded-2xl bg-slate-900/10 text-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-sm group">
                        <Twitter size={20} className="group-hover:scale-110 transition-transform" />
                      </a>
                      <a href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`} target="_blank" className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all shadow-sm group">
                        <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Options & CTA */}
              <div className="space-y-10">
                <div className="space-y-6">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] block">Capacity</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {variants.capacities.map((cap, i) => (
                      <button key={i} onClick={() => setSelectedCap(cap)} className={`text-left p-5 rounded-2xl border-2 transition-all relative ${selectedCap.name === cap.name ? 'border-emerald-600 bg-emerald-50/30' : 'border-slate-100 hover:border-slate-200'}`}>
                        <p className={`font-black text-sm uppercase ${selectedCap.name === cap.name ? 'text-emerald-900' : 'text-slate-900'}`}>{cap.name}</p>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{cap.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-6 pt-10 border-t border-slate-100">
                   <div className="flex flex-col sm:flex-row items-center gap-6">
                      <div className="flex items-center gap-6 bg-slate-50 p-2 rounded-2xl border border-slate-100 w-full sm:w-fit justify-between">
                         <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all"><Minus size={18} /></button>
                         <span className="w-8 text-center font-black text-xl">{quantity}</span>
                         <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all"><Plus size={18} /></button>
                      </div>
                      
                      <button onClick={handleAddToCart} disabled={isSuccess} className={`flex-1 w-full py-6 rounded-3xl font-black text-lg shadow-2xl transition-all flex items-center justify-center gap-4 relative overflow-hidden ${isSuccess ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-white hover:bg-black'}`}>
                         <div className={`transition-all duration-500 flex items-center gap-4 ${isSuccess ? 'scale-0 opacity-0 translate-y-4' : 'scale-100 opacity-100 translate-y-0'}`}>
                           <ShoppingCart size={24} /> Confirm Order
                         </div>
                         <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isSuccess ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 -translate-y-4'}`}>
                           <Check size={28} strokeWidth={3} />
                         </div>
                      </button>
                   </div>

                   {/* Main WhatsApp Order Button */}
                   <button onClick={handleWhatsAppOrder} className="w-full py-6 bg-emerald-600 text-white rounded-3xl font-black text-lg shadow-2xl shadow-emerald-600/30 hover:bg-emerald-700 transition-all flex items-center justify-center gap-4 active:scale-95 group">
                      <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" /> 
                      Order on WhatsApp • Rs. {totalPrice.toLocaleString()}
                   </button>

                   {/* Dedicated WhatsApp Support Contact */}
                   <div className="flex items-center justify-center gap-8 pt-4 border-t border-slate-100">
                     <button onClick={handleWhatsAppSupport} className="flex items-center gap-3 text-slate-500 hover:text-emerald-600 transition-colors group">
                       <HelpCircle size={18} />
                       <span className="text-xs font-black uppercase tracking-widest">Get Support</span>
                     </button>
                     <div className="w-px h-4 bg-slate-200"></div>
                     <a href={`tel:${businessNumber}`} className="flex items-center gap-3 text-slate-500 hover:text-slate-900 transition-colors group">
                       <ExternalLink size={18} />
                       <span className="text-xs font-black uppercase tracking-widest">+92 329 5147517</span>
                     </a>
                   </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                 {[
                   { icon: <Truck size={16} />, text: 'FREE SHIPPING' },
                   { icon: <MapPin size={16} />, text: 'COD AVAILABLE' },
                   { icon: <Package size={16} />, text: '7-DAY REPLACEMENT' },
                 ].map((sig, i) => (
                   <div key={i} className="flex flex-col items-center gap-2 opacity-60">
                      <div className="text-emerald-600">{sig.icon}</div>
                      <span className="text-[8px] font-black uppercase tracking-[0.2em]">{sig.text}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recently Viewed */}
        <section className="space-y-12">
          <div className="flex items-center gap-6">
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter shrink-0">Recent Explorations</h2>
            <div className="h-0.5 flex-1 bg-slate-100"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {recentlyViewed.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-white rounded-[2.5rem] overflow-hidden premium-shadow mb-6 border border-slate-50 relative">
                  <img src={`https://picsum.photos/seed/recent-v2-${item.id}/800/1000`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={item.name} />
                  <button className="absolute top-5 right-5 w-10 h-10 bg-white/90 backdrop-blur rounded-2xl flex items-center justify-center text-slate-400 hover:text-rose-500 transition-all shadow-sm">
                    <Heart size={18} />
                  </button>
                </div>
                <div className="px-2">
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">{item.cat}</p>
                  <h3 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">{item.name}</h3>
                  <p className="mt-2 text-xl font-black tracking-tighter">Rs. {item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductTemplateView;
