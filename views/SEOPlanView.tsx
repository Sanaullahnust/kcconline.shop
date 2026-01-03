
import React from 'react';
import { Search, Globe, Zap, Smartphone, Link as LinkIcon, ClipboardList } from 'lucide-react';

const SEOPlanView: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
            <Zap size={20} />
          </div>
          <h4 className="font-bold text-slate-900 mb-2">Technical Speed</h4>
          <ul className="text-xs text-slate-600 space-y-2">
            <li>• Next-gen image formats (WebP/AVIF)</li>
            <li>• Critical CSS inlining for ATF</li>
            <li>• Brotli Compression enabled</li>
            <li>• Redis Object Caching</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
            <Globe size={20} />
          </div>
          <h4 className="font-bold text-slate-900 mb-2">Structure & Indexing</h4>
          <ul className="text-xs text-slate-600 space-y-2">
            <li>• Permalink: /product/%postname%/</li>
            <li>• Automated Dynamic Sitemap.xml</li>
            <li>• Custom Robots.txt with Crawl-delay</li>
            <li>• Canonical Tag consistency check</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
            <Smartphone size={20} />
          </div>
          <h4 className="font-bold text-slate-900 mb-2">Mobile-First Strategy</h4>
          <ul className="text-xs text-slate-600 space-y-2">
            <li>• Responsive Layout (Tailwind JIT)</li>
            <li>• Tap Target Size optimization (min 44px)</li>
            <li>• Font Scaling for readability</li>
            <li>• Mobile-only menu lazy loading</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-900 text-slate-300 rounded-2xl p-8 lg:p-12">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <ClipboardList /> On-Page & Off-Page Masterplan
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h5 className="text-indigo-400 font-bold uppercase tracking-widest text-xs">On-Page Checklist</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} />
                <span>Optimize H1-H3 hierarchy for every single page.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} />
                <span>Internal linking with keyword-rich anchor text (Siloing).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} />
                <span>LSI Keyword integration in product long-descriptions.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} />
                <span>User-generated content (reviews) for fresh keyword updates.</span>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="text-indigo-400 font-bold uppercase tracking-widest text-xs">Off-Page & Authority</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <LinkIcon className="text-indigo-500 shrink-0 mt-0.5" size={16} />
                <span>Guest posting on niche-relevant tech & lifestyle blogs.</span>
              </li>
              <li className="flex items-start gap-3">
                <LinkIcon className="text-indigo-500 shrink-0 mt-0.5" size={16} />
                <span>Press releases for new major product launches.</span>
              </li>
              <li className="flex items-start gap-3">
                <LinkIcon className="text-indigo-500 shrink-0 mt-0.5" size={16} />
                <span>Affiliate network creation to boost referral traffic.</span>
              </li>
              <li className="flex items-start gap-3">
                <LinkIcon className="text-indigo-500 shrink-0 mt-0.5" size={16} />
                <span>Social signals via automated product-to-social sharing.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckCircle = ({ className, size }: { className: string, size: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
);

export default SEOPlanView;
