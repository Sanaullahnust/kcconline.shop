
import React from 'react';
import { MapPin, Phone, MessageSquare, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactView: React.FC = () => {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
               <span className="text-[10px] font-black text-brand-orange uppercase tracking-[0.5em]">Get In Touch</span>
               <h1 className="text-6xl font-black text-slate-900 tracking-tighter">Visit Us in Karak.</h1>
               <p className="text-lg text-slate-500 font-medium">We are located at the heart of Karak City. Stop by for a coffee and explore our collection.</p>
            </div>
            
            <div className="space-y-8">
               <div className="flex items-center gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-blue shadow-sm"><MapPin /></div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-1">Our Location</h4>
                    <p className="text-slate-600 font-bold">KCC near Jail Chowk, Karak, KPK, Pakistan</p>
                  </div>
               </div>
               <div className="flex items-center gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-orange shadow-sm"><MessageSquare /></div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-1">WhatsApp Orders</h4>
                    <p className="text-slate-600 font-bold">+92 329 5147517</p>
                  </div>
               </div>
            </div>

            <div className="pt-10 flex gap-6">
               {[Facebook, Instagram, Twitter].map((Icon, i) => (
                 <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all">
                   <Icon size={24} />
                 </a>
               ))}
            </div>
          </div>
          
          <div className="h-[600px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-slate-50 bg-slate-100 flex items-center justify-center relative">
             {/* Mock Map Placeholder */}
             <div className="absolute inset-0 grayscale opacity-40">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
             </div>
             <div className="relative z-10 bg-white p-10 rounded-[3rem] shadow-2xl text-center max-w-sm border border-slate-100">
                <MapPin size={48} className="text-brand-orange mx-auto mb-6" />
                <h3 className="text-2xl font-black text-slate-900 mb-2">Visit Our Shop</h3>
                <p className="text-sm text-slate-500 font-medium mb-6">Open Mon-Sun (10AM - 10PM) <br/> Near Jail Chowk, Karak</p>
                <a href="https://maps.google.com/?q=Jail+Chowk+Karak" target="_blank" className="inline-block px-10 py-4 bg-brand-blue text-white font-black rounded-2xl shadow-xl hover:bg-blue-600 transition-all">Open in Maps</a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
