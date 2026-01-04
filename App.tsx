
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
  ShoppingBag,
  ArrowRight
} from 'lucide-react';
import HomepageView from './views/HomepageView.tsx';
import ProductsView from './views/ProductsView.tsx';
import AboutView from './views/AboutView.tsx';
import GalleryView from './views/GalleryView.tsx';
import ContactView from './views/ContactView.tsx';

type Page = 'home' | 'products' | 'about' | 'gallery' | 'deals' | 'contact';

// High-fidelity SVG recreation of the KCC logo from the user's image with enhanced visibility
export const KCCLogo = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 500 500" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="logo-bg-grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
        <stop offset="85%" style={{ stopColor: '#f8fafc', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#f1f5f9', stopOpacity: 1 }} />
      </radialGradient>
      <linearGradient id="ring-gradient-enhanced" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 0.9 }} />
        <stop offset="50%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#84cc16', stopOpacity: 0.9 }} />
      </linearGradient>
      <filter id="icon-shadow" x="-20%" y="-20%" width="140%" height="140%">
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
    
    {/* Outer Glowing Ring - Enhanced Visibility */}
    <circle cx="250" cy="250" r="240" fill="none" stroke="url(#ring-gradient-enhanced)" strokeWidth="14" />
    <circle cx="250" cy="250" r="230" fill="none" stroke="#ffffff" strokeWidth="4" opacity="0.5" />
    
    {/* Inner Gradient Circle for better contrast */}
    <circle cx="250" cy="250" r="225" fill="url(#logo-bg-grad)" />
    
    {/* Bag & Text Group with filter for depth */}
    <g transform="translate(100, 100) scale(0.6)" filter="url(#icon-shadow)">
      {/* Shopping Bag Icon */}
      <g transform="translate(40, 20)">
        {/* Handle */}
        <path d="M120,150 Q200,30 280,150" fill="none" stroke="#1e293b" strokeWidth="15" strokeLinecap="round" />
        {/* Bag Body */}
        <path d="M80,160 L320,160 L380,300 L20,300 Z" fill="#84cc16" />
        {/* Dots on Bag */}
        <circle cx="140" cy="180" r="10" fill="#1e293b" />
        <circle cx="260" cy="210" r="10" fill="#1e293b" />
        {/* Curved Path Swoosh */}
        <path d="M20,330 Q200,180 380,310" fill="none" stroke="#84cc16" strokeWidth="35" strokeLinecap="round" />
        <path d="M360,280 L430,315 L360,350 Z" fill="#84cc16" />
      </g>
      
      {/* Text Elements - Sharpened for visibility */}
      <text x="250" y="440" fontFamily="Inter, sans-serif" fontSize="65" fontWeight="900" textAnchor="middle" fill="#0f172a">KCC</text>
      <text x="250" y="525" fontFamily="Inter, sans-serif" fontSize="90" fontWeight="900" textAnchor="middle">
        <tspan fill="#84cc16">Online</tspan>
        <tspan fill="#0f172a">.Shop</tspan>
      </text>
      <text x="250" y="585" fontFamily="Inter, sans-serif" fontSize="32" fontWeight="800" textAnchor="middle" fill="#64748b" letterSpacing="12">FAST SOLUTION</text>
    </g>
  </svg>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const businessNumber = "923295147517";
  const displayPhone = "+92 329 5147517";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'home': return <HomepageView onNavigate={setCurrentPage} />;
      case 'products': return <ProductsView />;
      case 'about': return <AboutView />;
      case 'gallery': return <GalleryView />;
      case 'contact': return <ContactView />;
      case 'deals': return <HomepageView onNavigate={setCurrentPage} initialScrollTo="deals" />;
      default: return <HomepageView onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      <style>{`
        :root {
          --brand-blue: #007BFF;
          --brand-orange: #FF9500;
          --brand-green: #84cc16;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .text-brand-blue { color: var(--brand-blue); }
        .bg-brand-blue { background-color: var(--brand-blue); }
        .bg-brand-orange { background-color: var(--brand-orange); }
        .logo-container-glow {
          box-shadow: 0 4px 25px -5px rgba(0, 123, 255, 0.2), 0 8px 10px -6px rgba(132, 204, 22, 0.1);
          border: 1px solid rgba(0, 123, 255, 0.1);
        }
      `}</style>

      {/* Promo Ticker */}
      <div className="bg-[#1a1a1a] text-white py-2 px-4 overflow-hidden whitespace-nowrap border-b border-white/5">
        <div className="flex animate-[scroll_40s_linear_infinite] gap-12 text-[10px] font-black uppercase tracking-[0.2em] w-max">
          <span>⚡ BEST ELECTRIC LIGHTERS IN KARAK - RS. 850 ONLY</span>
          <span>🚚 FREE DELIVERY IN KARAK ON ORDERS OVER RS. 3,000</span>
          <span>💎 PREMIUM QUALITY GADGETS & TOOLS AT WHOLESALE PRICES</span>
          <span>⚡ BEST ELECTRIC LIGHTERS IN KARAK - RS. 850 ONLY</span>
        </div>
      </div>

      <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || currentPage !== 'home' ? 'bg-white py-3 shadow-md border-b border-slate-100' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <button onClick={() => setCurrentPage('home')} className="flex items-center gap-4 group">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105 overflow-hidden logo-container-glow">
              <KCCLogo className="w-14 h-14" />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="font-black text-xl text-slate-900">KCC <span className="text-brand-blue">ONLINE</span></span>
              <span className="text-[7px] font-black text-slate-500 uppercase tracking-[0.6em] mt-1">FAST SOLUTION</span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {['home', 'products', 'deals', 'about', 'gallery', 'contact'].map((page) => (
              <button 
                key={page}
                onClick={() => setCurrentPage(page as Page)}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative group py-2 ${currentPage === page ? 'text-brand-blue' : 'text-slate-500 hover:text-black'}`}
              >
                {page}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-orange transition-all duration-300 ${currentPage === page ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={`tel:${businessNumber}`} className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-[10px] font-black text-slate-600 hover:bg-brand-blue hover:text-white transition-all">
              <PhoneCall size={14} /> {displayPhone}
            </a>
            <button className="p-3 bg-brand-orange text-white rounded-2xl hover:bg-orange-600 transition-all shadow-lg active:scale-95">
              <ShoppingCart size={18} />
            </button>
            <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2"><Menu size={24} /></button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)}>
        <div className={`absolute right-0 top-0 h-full w-[80%] bg-white p-10 transform transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-12">
             <span className="font-black text-lg uppercase tracking-widest">Navigation</span>
             <button onClick={() => setIsMenuOpen(false)}><X size={28} /></button>
          </div>
          <div className="space-y-8">
            {['home', 'products', 'deals', 'about', 'gallery', 'contact'].map(page => (
              <button 
                key={page}
                onClick={() => {setCurrentPage(page as Page); setIsMenuOpen(false);}}
                className={`block w-full text-left text-3xl font-black uppercase tracking-tighter ${currentPage === page ? 'text-brand-blue' : 'text-slate-300'}`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="flex-1 pt-0">
        {renderContent()}
      </main>

      <footer className="bg-[#0f0f0f] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <KCCLogo className="w-14 h-14" />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-2xl uppercase tracking-tighter">KCC ONLINE</span>
                  <span className="text-[10px] font-bold text-brand-green uppercase tracking-[0.5em] mt-1">FAST SOLUTION</span>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Karak's most trusted shop for high-quality tools, smart gadgets, and kitchen essentials. Quality you can trust, delivered fast.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:bg-brand-blue transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-orange">Quick Links</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                {['home', 'products', 'deals', 'about'].map(p => (
                  <li key={p}><button onClick={() => setCurrentPage(p as Page)} className="hover:text-white capitalize">{p}</button></li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-orange">Contact Info</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>KCC near Jail Chowk, Karak, KPK</li>
                <li>WhatsApp: +92 329 5147517</li>
                <li>Email: support@kcconline.shop</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-orange">Business Hours</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex justify-between"><span>Mon - Sun:</span> <span>10 AM - 10 PM</span></li>
                <li className="text-brand-blue font-bold">Open 7 Days a Week</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
              © 2024 KCC Online Shop Karak. Built for Excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
