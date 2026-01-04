
import React from 'react';

const GalleryView: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1590000476487-dfd3a489fa6f?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1591123109677-24d317047746?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1593611358412-231bb803b097?auto=format&fit=crop&q=80&w=800',
  ];

  return (
    <div className="bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[10px] font-black text-brand-blue uppercase tracking-[0.5em]">The Showcase</span>
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter">Elite Gear In Action.</h1>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
           {images.map((img, i) => (
             <div key={i} className="break-inside-avoid rounded-[3rem] overflow-hidden shadow-xl border-4 border-white hover:scale-[1.02] transition-transform cursor-zoom-in">
                <img src={img} className="w-full h-auto" alt={`Gallery ${i}`} loading="lazy" />
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryView;
