
import React, { useState } from 'react';
import { ShoppingCart, Hammer, Smartphone, Utensils, Search, Filter } from 'lucide-react';

const ProductsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'home' | 'gadgets' | 'kitchen'>('all');

  const products = [
    { category: 'home', name: 'Industrial Power Drill', price: 2500, img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800', desc: 'Heavy duty, variable speed, pro grade.' },
    { category: 'home', name: 'Hammer Drill Kit', price: 3500, img: 'https://images.unsplash.com/photo-1540103390171-184e6665e64a?auto=format&fit=crop&q=80&w=800', desc: 'Full 12V set for masonry and wood.' },
    { category: 'home', name: 'LED Work Light', price: 650, img: 'https://images.unsplash.com/photo-1555529669-26f9d103abdd?auto=format&fit=crop&q=80&w=800', desc: 'Ultra bright, magnetic base, rechargeable.' },
    { category: 'gadgets', name: 'Electric Arc Lighter', price: 850, img: 'https://images.unsplash.com/photo-1622445275576-72142f60d715?auto=format&fit=crop&q=80&w=800', desc: 'Windproof USB rechargeable technology.' },
    { category: 'gadgets', name: 'Mini Thermal Printer', price: 1800, img: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800', desc: 'Inkless wireless printing from phone.' },
    { category: 'gadgets', name: 'USB-C Desk Fan', price: 550, img: 'https://images.unsplash.com/photo-1591123109677-24d317047746?auto=format&fit=crop&q=80&w=800', desc: 'Silent blades, powerful airflow for Karak summer.' },
    { category: 'kitchen', name: 'Pro Food Blender', price: 3200, img: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&q=80&w=800', desc: 'High-speed motor for perfect smoothies.' },
    { category: 'kitchen', name: 'Stainless Knife Set', price: 900, img: 'https://images.unsplash.com/photo-1593611358412-231bb803b097?auto=format&fit=crop&q=80&w=800', desc: '6-piece non-stick coating set.' },
    { category: 'kitchen', name: 'Airtight Storage Jars', price: 1400, img: 'https://images.unsplash.com/photo-1590653246756-3c09038f870a?auto=format&fit=crop&q=80&w=800', desc: 'Set of 4 BPA-free organizing jars.' },
    { category: 'kitchen', name: 'Smart Kettle', price: 2100, img: 'https://images.unsplash.com/photo-1594914141221-c452be6696b9?auto=format&fit=crop&q=80&w=800', desc: 'Temperature control, boiling in seconds.' },
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-6xl font-black tracking-tighter text-slate-900 leading-none">The Collection.</h1>
            <p className="text-lg text-slate-500 font-medium">Curated innovation for every home in Karak.</p>
          </div>
          
          <div className="flex bg-slate-100 p-2 rounded-[2rem] gap-2 overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'All Essentials' },
              { id: 'home', label: 'Home Tools' },
              { id: 'gadgets', label: 'Smart Gadgets' },
              { id: 'kitchen', label: 'Kitchenware' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === tab.id ? 'bg-brand-blue text-white shadow-lg' : 'text-slate-500 hover:bg-slate-200'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {filteredProducts.map((p, i) => (
            <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-500">
               <div className="aspect-[4/5] overflow-hidden relative">
                  <img src={p.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={p.name} loading="lazy" />
                  <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl font-black text-brand-blue text-xs">Rs. {p.price}</div>
               </div>
               <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-brand-blue transition-colors">{p.name}</h3>
                    <p className="text-xs text-slate-400 font-medium mt-2 leading-relaxed italic line-clamp-2">"{p.desc}"</p>
                  </div>
                  <a 
                    href={`https://wa.me/923295147517?text=Hi%20KCC!%20Order%20${encodeURIComponent(p.name)}%20Rs%20${p.price}`}
                    target="_blank"
                    className="w-full py-4 bg-brand-orange text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-md shadow-orange-500/20 active:scale-95"
                  >
                    <ShoppingCart size={16} /> Order Now
                  </a>
               </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
             <p className="text-slate-400 font-bold">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsView;
