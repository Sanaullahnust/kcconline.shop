
import React from 'react';
import { Plug, Shield, Zap, CreditCard, Ship, MessageSquare, Search, Layout, Phone } from 'lucide-react';

const PluginsView: React.FC = () => {
  const plugins = [
    { category: 'Conversion', name: 'Order on WhatsApp', icon: <Phone size={18} />, note: 'Essential for PK. Users prefer ordering via WhatsApp chat.' },
    { category: 'SEO', name: 'Rank Math SEO', icon: <Search size={18} />, note: 'Better Schema support for PKR currency than alternatives.' },
    { category: 'Speed', name: 'WP Rocket', icon: <Zap size={18} />, note: 'Crucial for slow mobile connections across Pakistan.' },
    { category: 'Payment', name: 'WooCommerce COD Advanced', icon: <CreditCard size={18} />, note: 'Add fees/discounts based on Cash on Delivery.' },
    { category: 'Payment', name: 'EasyPaisa/JazzCash Gateway', icon: <Shield size={18} />, note: 'Integrated local wallet payments for digital checkouts.' },
    { category: 'Shipping', name: 'Courier Tracking PK', icon: <Ship size={18} />, note: 'Auto-tracking for TCS, Leopard, and M&P couriers.' },
    { category: 'Security', name: 'Wordfence Security', icon: <Shield size={18} />, note: 'Strong protection against localized brute force attacks.' },
    { category: 'Images', name: 'Imagify (WebP)', icon: <Layout size={18} />, note: 'Reduces image size by 70% for faster local loading.' }
  ];

  return (
    <div className="space-y-12">
      <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 flex items-center gap-6">
        <div className="p-4 bg-emerald-600 text-white rounded-2xl shadow-lg">
          <Plug size={32} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">PK Optimized Tech Stack</h3>
          <p className="text-slate-600 text-sm">Lightweight, localized, and highly secure plugins selected specifically for Pakistani market conditions.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plugins.map((p, i) => (
          <div key={i} className="bg-white border p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="text-emerald-600 mb-4">{p.icon}</div>
            <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">{p.category}</p>
            <h4 className="font-bold text-slate-800 mb-2">{p.name}</h4>
            <p className="text-xs text-slate-500 leading-relaxed">{p.note}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-2xl p-8 text-white">
        <h4 className="font-bold mb-4 flex items-center gap-2"><Phone size={18} className="text-emerald-400" /> Why WhatsApp?</h4>
        <p className="text-sm text-slate-400 leading-relaxed">
          In Pakistan, over 70% of e-commerce queries happen over WhatsApp. Integrating a 'WhatsApp Order' button can increase your conversion rate by up to 30% by building immediate trust with the customer.
        </p>
      </div>
    </div>
  );
};

export default PluginsView;
