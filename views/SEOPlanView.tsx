
import React from 'react';
import { Search, Globe, Zap, Smartphone, Link as LinkIcon, ClipboardList, AlertTriangle, ShieldCheck, Activity } from 'lucide-react';

const SEOPlanView: React.FC = () => {
  return (
    <div className="space-y-8 pb-20">
      {/* DNS TROUBLESHOOTING ALERT (Added to address NXDOMAIN issue) */}
      <section className="bg-amber-50 border-2 border-amber-200 rounded-[2rem] p-8 lg:p-12 shadow-sm animate-in fade-in slide-in-from-top duration-500">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="p-4 bg-amber-500 text-white rounded-2xl shadow-lg shadow-amber-500/20">
            <AlertTriangle size={32} />
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="text-2xl font-black text-amber-900 tracking-tight">Connectivity & DNS Resolver</h3>
              <p className="text-amber-800/80 font-medium">Resolving "DNS_PROBE_FINISHED_NXDOMAIN" for 1sourcelabai.com</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-white/50 p-6 rounded-2xl border border-amber-200/50">
                <h4 className="text-xs font-black text-amber-900 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Activity size={14} /> Immediate Actions
                </h4>
                <ul className="text-sm space-y-3 text-amber-900/70 font-semibold">
                  <li className="flex items-center gap-2 italic">• Check Registrar "Domain Status" (Must be 'OK' or 'Active')</li>
                  <li className="flex items-center gap-2 italic">• Verify A Record: @ -> [Your Server IP]</li>
                  <li className="flex items-center gap-2 italic">• Verify CNAME: www -> 1sourcelabai.com</li>
                  <li className="flex items-center gap-2 italic">• Flush Local DNS: 'ipconfig /flushdns'</li>
                </ul>
              </div>
              <div className="bg-amber-900 text-amber-50 p-6 rounded-2xl">
                <h4 className="text-[10px] font-black uppercase tracking-widest mb-3 text-amber-400">Pro Tip</h4>
                <p className="text-xs leading-relaxed opacity-90">
                  If you recently updated Nameservers, propagation can take 1-24 hours. Use tools like <strong>DNSChecker.org</strong> to see if the domain is resolving in different regions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORIGINAL SEO METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
            <Zap size={20} />
          </div>
          <h4 className="font-bold text-slate-900 mb-2">Technical Speed</h4>
          <ul className="text-xs text-slate-600 space-y-2 font-medium">
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
          <ul className="text-xs text-slate-600 space-y-2 font-medium">
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
          <ul className="text-xs text-slate-600 space-y-2 font-medium">
            <li>• Responsive Layout (Tailwind JIT)</li>
            <li>• Tap Target Size optimization (min 44px)</li>
            <li>• Font Scaling for readability</li>
            <li>• Mobile-only menu lazy loading</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-900 text-slate-300 rounded-[2.5rem] p-8 lg:p-16 border border-white/5 shadow-2xl">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <h3 className="text-3xl font-black text-white flex items-center gap-4 tracking-tight">
            <ClipboardList className="text-indigo-500" /> On-Page & Off-Page Masterplan
          </h3>
          <div className="bg-white/5 px-4 py-2 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-indigo-400">
            Strategy Version 4.2
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h5 className="text-indigo-400 font-black uppercase tracking-widest text-xs flex items-center gap-2">
              <div className="w-6 h-px bg-indigo-500/50"></div> On-Page Checklist
            </h5>
            <ul className="space-y-6">
              {[
                "Optimize H1-H3 hierarchy for every single page.",
                "Internal linking with keyword-rich anchor text (Siloing).",
                "LSI Keyword integration in product long-descriptions.",
                "User-generated content (reviews) for fresh keyword updates."
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <div className="p-1 bg-emerald-500/20 rounded text-emerald-500 mt-1 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <CheckCircle size={14} />
                  </div>
                  <span className="text-sm font-medium leading-relaxed group-hover:text-white transition-colors">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <h5 className="text-indigo-400 font-black uppercase tracking-widest text-xs flex items-center gap-2">
              <div className="w-6 h-px bg-indigo-500/50"></div> Off-Page & Authority
            </h5>
            <ul className="space-y-6">
              {[
                "Guest posting on niche-relevant tech & lifestyle blogs.",
                "Press releases for new major product launches.",
                "Affiliate network creation to boost referral traffic.",
                "Social signals via automated product-to-social sharing."
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <div className="p-1 bg-indigo-500/20 rounded text-indigo-500 mt-1 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                    <LinkIcon size={14} />
                  </div>
                  <span className="text-sm font-medium leading-relaxed group-hover:text-white transition-colors">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckCircle = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
);

export default SEOPlanView;
