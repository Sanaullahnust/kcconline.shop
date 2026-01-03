
import React from 'react';
import { CheckSquare, ListTodo, Server, Rocket } from 'lucide-react';

const ChecklistView: React.FC = () => {
  const stages = [
    {
      title: 'Phase 1: Foundation',
      items: [
        'Domain & Hosting (SSD, LiteSpeed enabled)',
        'SSL Certificate Installation',
        'WordPress & WooCommerce Core Installation',
        'Theme Framework Setup (Customized Child Theme)'
      ]
    },
    {
      title: 'Phase 2: Configuration',
      items: [
        'Tax & Currency settings for target markets',
        'Shipping zone and class setup',
        'Payment gateway integration (Stripe/Payoneer)',
        'Email notification branding'
      ]
    },
    {
      title: 'Phase 3: SEO & Content',
      items: [
        'Permalinks & Meta Defaults setup',
        'Upload & SEO-optimize first 20 products',
        'Google Search Console verification',
        'Google Analytics 4 / Tag Manager installation'
      ]
    },
    {
      title: 'Phase 4: Optimization',
      items: [
        'Cloudflare CDN activation',
        'Page speed audit (Lighthouse 90+ score)',
        'Database cleaning and cron-job setup',
        'Broken link check and 404 monitoring'
      ]
    }
  ];

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Final Launch Checklist</h2>
          <p className="text-slate-500">The road to 100% readiness for kcconline.shop</p>
        </div>
        <div className="flex gap-4">
           <button className="px-6 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold flex items-center gap-2">
             <Rocket size={18} /> Deploy to Production
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stages.map((stage, i) => (
          <div key={i} className="bg-white border rounded-2xl p-8 shadow-sm">
            <h4 className="text-lg font-bold text-indigo-600 mb-6 flex items-center gap-3">
              <CheckSquare /> {stage.title}
            </h4>
            <ul className="space-y-4">
              {stage.items.map((item, j) => (
                <li key={j} className="flex items-center gap-3 text-sm text-slate-600 group cursor-pointer">
                  <div className="w-5 h-5 border-2 rounded border-slate-300 group-hover:border-indigo-500 transition-colors flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-indigo-500 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-emerald-900 rounded-3xl p-12 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-4">Ready for Launch?</h3>
          <p className="max-w-xl text-emerald-100 mb-8">
            All systems are optimized for scale. Follow this checklist to ensure a 100% bug-free customer experience from day one.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-emerald-800 rounded-lg text-xs font-bold flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-emerald-400"></div> SPEED TEST PASSED
            </div>
            <div className="px-4 py-2 bg-emerald-800 rounded-lg text-xs font-bold flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-emerald-400"></div> SEO VALIDATED
            </div>
            <div className="px-4 py-2 bg-emerald-800 rounded-lg text-xs font-bold flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-emerald-400"></div> SSL ACTIVE
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10">
           <Server size={300} />
        </div>
      </div>
    </div>
  );
};

export default ChecklistView;
