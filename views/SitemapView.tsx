
import React from 'react';
import { Network, Home, ShoppingBag, User, HelpCircle, FileText, Info } from 'lucide-react';

const SitemapView: React.FC = () => {
  const map = [
    {
      title: 'Main Hub',
      icon: <Home className="text-indigo-500" />,
      items: ['Home', 'Shop', 'Track Order']
    },
    {
      title: 'Commerce Engine',
      icon: <ShoppingBag className="text-blue-500" />,
      items: ['Product Categories', 'Product Pages (Template)', 'Cart', 'Checkout']
    },
    {
      title: 'Account & CRM',
      icon: <User className="text-emerald-500" />,
      items: ['My Account', 'Order History', 'Wishlist', 'Address Book']
    },
    {
      title: 'Legal & Compliance',
      icon: <ShieldCheck className="text-red-500" />,
      items: ['Privacy Policy', 'Refund & Returns', 'Terms & Conditions', 'Shipping Policy']
    },
    {
      title: 'Information & Blog',
      icon: <FileText className="text-amber-500" />,
      items: ['About Us', 'Contact Us', 'FAQ', 'Blog Feed', 'Blog Categories']
    }
  ];

  return (
    <div className="space-y-12">
      <div className="bg-indigo-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Network /> Logical Website Architecture
        </h3>
        <p className="mt-2 opacity-80">This sitemap is designed for maximum crawlability and logical user journeys (UX).</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {map.map((section, idx) => (
          <div key={idx} className="bg-white border rounded-xl p-6 shadow-sm hover:border-indigo-200 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-slate-50 rounded-lg">
                {section.icon}
              </div>
              <h4 className="font-bold text-slate-800">{section.title}</h4>
            </div>
            <ul className="space-y-3">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-600 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-indigo-500 transition-colors"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-8">
        <h4 className="font-bold text-slate-800 mb-4">Blog Category Suggestions</h4>
        <div className="flex flex-wrap gap-3">
          {['Buying Guides', 'Industry News', 'How-to Tutorials', 'Product Spotlights', 'Customer Stories'].map((cat, i) => (
            <span key={i} className="px-4 py-2 bg-white border rounded-full text-xs font-semibold text-slate-600 shadow-sm">
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ShieldCheck = ({ className }: { className: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
);

export default SitemapView;
