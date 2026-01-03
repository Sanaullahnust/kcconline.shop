
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  Menu, 
  X, 
  PhoneCall,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  ShoppingBag
} from 'lucide-react';
import HomepageView from './views/HomepageView.tsx';
import ProductTemplateView from './views/ProductTemplateView.tsx';
import BlogView from './views/BlogView.tsx';

type Page = 'home' | 'product' | 'blog';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const businessNumber = "923295147517";
  const displayPhone = "+92 329 5147517";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'home': return <HomepageView />;
      case 'product': return <ProductTemplateView />;
      case 'blog': return <BlogView />;
      default: return <HomepageView />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      {/* Dynamic SEO/Promo Ticker */}
      <div className="bg-[#1a1a1a] text-white py-2.5 px-4 overflow-hidden whitespace-nowrap border-b border-white/5">
        <div className="flex animate-[scroll_35s_linear_infinite] gap-12 text-[10px] font-black uppercase tracking-[0.2em] w-max">
          <span>⚡ FLASH SALE: UP TO 20% OFF ON KITCHEN GADGETS</span>
          <span>🚚 FREE NATIONWIDE SHIPPING ON ORDERS OVER RS. 5,000</span>
          <span>📦 100% GENUINE PRODUCTS WITH 7-DAY REPLACEMENT</span>
          <span>💎 PREMIUM QUALITY GADGETS IN PAKISTAN</span>
          <span>⚡ FLASH SALE: UP TO 20% OFF ON KITCHEN GADGETS</span>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Header with Brand Logo Integration */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-header py-3 shadow-md' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Identity - Recreating the provided logo look */}
          <button onClick={() => setCurrentPage('home')} className="flex items-center gap-3 group">
            <div className="relative flex items-center gap-2">
              <div className="relative">
                <ShoppingBag size={34} className="text-[#84cc16] group-hover:rotate-12 transition-transform duration-300" strokeWidth={2.5} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mb-1 ml-1"></div>
                </div>
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="font-black text-xl tracking-tighter text-black uppercase">KCC</span>
                <span className="font-black text-lg text-[#84cc16] -mt-1">Online<span className="text-black">.Shop</span></span>
                <span className="text-[7px] font-bold text-slate-400 uppercase tracking-[0.3em]">FAST SOLUTION</span>
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {['home', 'product', 'blog'].map((page) => (
              <button 
                key={page}
                onClick={() => setCurrentPage(page as Page)}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all relative group py-2 ${currentPage === page ? 'text-[#84cc16]' : 'text-slate-500 hover:text-black'}`}
              >
                {page === 'product' ? 'Collection' : page}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#84cc16] transition-all duration-300 ${currentPage === page ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
          </nav>

          {/* Action Hub */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center bg-slate-100 rounded-full px-4 py-2 border border-slate-200 focus-within:ring-2 focus-within:ring-[#84cc16]/20 transition-all">
              <Search size={14} className="text-slate-400" />
              <input type="text" placeholder="Search products..." className="bg-transparent border-none focus:outline-none text-[11px] ml-2 w-28 font-bold" />
            </div>
            
            <div className="flex items-center gap-1">
              <button className="p-2 text-slate-500 hover:text-[#84cc16] transition-colors"><Heart size={18} /></button>
              <button className="relative p-3 bg-black text-white rounded-2xl hover:bg-[#84cc16] transition-all shadow-lg active:scale-95 group ml-2">
                <ShoppingCart size={18} />
                <span className="absolute -top-1 -right-1 bg-[#84cc16] text-white text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">2</span>
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-black ml-1"><Menu size={24} /></button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)}>
          <div className={`absolute right-0 top-0 h-full w-[80%] bg-white p-10 transform transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-16">
               <span className="font-black text-lg uppercase tracking-widest">Menu</span>
               <button onClick={() => setIsMenuOpen(false)}><X size={28} /></button>
            </div>
            <div className="space-y-10">
              {['home', 'product', 'blog'].map(page => (
                <button 
                  key={page}
                  onClick={() => {setCurrentPage(page as Page); setIsMenuOpen(false);}}
                  className={`block w-full text-left text-4xl font-black uppercase tracking-tighter ${currentPage === page ? 'text-[#84cc16]' : 'text-slate-300'}`}
                >
                  {page}
                </button>
              ))}
            </div>
            <div className="mt-32 pt-10 border-t border-slate-100">
               <a href={`https://wa.me/${businessNumber}`} target="_blank" className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600"><PhoneCall size={20} /></div>
                  <div>
                    <p className="text-sm font-black text-slate-900">{displayPhone}</p>
                    <p className="text-xs font-medium text-slate-400">WhatsApp Support 24/7</p>
                  </div>
               </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {renderContent()}
      </main>

      <footer className="bg-[#0f0f0f] text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
            <div className="lg:col-span-5 space-y-10">
              <div className="flex items-center gap-2">
                <ShoppingBag size={40} className="text-[#84cc16]" strokeWidth={2.5} />
                <div className="flex flex-col">
                  <span className="font-black text-2xl tracking-tighter uppercase leading-none">KCC ONLINE</span>
                  <span className="text-[10px] font-bold text-[#84cc16] uppercase tracking-[0.3em]">FAST SOLUTION</span>
                </div>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed font-medium max-w-md">
                Pakistan's gold standard for curated tech accessories and smart kitchen tools. We bridge the gap between global quality and local trust.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#84cc16] transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#84cc16]">Explore</h4>
                <ul className="space-y-4 text-sm font-bold text-slate-400">
                  <li><button onClick={() => setCurrentPage('product')} className="hover:text-white">New Arrivals</button></li>
                  <li><button onClick={() => setCurrentPage('product')} className="hover:text-white">Kitchen Deals</button></li>
                  <li><button onClick={() => setCurrentPage('product')} className="hover:text-white">Tech Essentials</button></li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#84cc16]">Policies</h4>
                <ul className="space-y-4 text-sm font-bold text-slate-400">
                  <li><a href="#" className="hover:text-white">Refund & Returns</a></li>
                  <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
                  <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#84cc16]">Support</h4>
                <ul className="space-y-4 text-sm font-bold text-slate-400">
                  <li><a href={`https://wa.me/${businessNumber}`} target="_blank" className="hover:text-white">WhatsApp Order</a></li>
                  <li><a href="#" className="hover:text-white">Track Your Order</a></li>
                  <li><a href="#" className="hover:text-white">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-10">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-600 text-center lg:text-left">
              &copy; 2024 KCC Online Shop Pakistan. All Rights Reserved.
            </p>
            <div className="flex gap-10 grayscale opacity-40">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
              <div className="text-[10px] font-black uppercase tracking-widest border border-white/20 px-2 flex items-center">Cash On Delivery</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
