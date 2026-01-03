
import React from 'react';
import { Palette, Type, Square, Layout } from 'lucide-react';

const DesignSystemView: React.FC = () => {
  return (
    <div className="space-y-12">
      <section>
        <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-slate-800"><Palette /> Primary Color Palette</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            { name: 'Primary Indigo', hex: '#4F46E5', usage: 'Buttons, Accents' },
            { name: 'Midnight Navy', hex: '#1E1B4B', usage: 'Header, Text' },
            { name: 'Clean White', hex: '#FFFFFF', usage: 'Background' },
            { name: 'Slate Gray', hex: '#475569', usage: 'Body Text' },
            { name: 'Soft Silver', hex: '#F1F5F9', usage: 'Section BG' },
          ].map((color, i) => (
            <div key={i} className="bg-white border p-3 rounded-2xl shadow-sm">
              <div className="w-full h-24 rounded-xl mb-4" style={{ backgroundColor: color.hex }}></div>
              <p className="font-bold text-sm text-slate-800">{color.name}</p>
              <p className="text-[10px] text-slate-500 font-mono mb-2 uppercase">{color.hex}</p>
              <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-tight">{color.usage}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Type /> Typography Stack</h3>
          <div className="space-y-8">
            <div>
              <p className="text-xs text-slate-400 font-bold mb-2 uppercase">Primary Font: Inter (Sans-Serif)</p>
              <h1 className="text-4xl font-extrabold text-slate-900">Heading 1 - Bold & Modern</h1>
              <h2 className="text-2xl font-bold text-slate-800 mt-2">Heading 2 - Clear Hierarchy</h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Body text is optimized for readability with a 1.6 line-height and a base size of 16px. We prioritize legibility across all viewport sizes.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Square /> Component Styles</h3>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold text-sm">Primary Button</button>
              <button className="px-6 py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg font-bold text-sm">Ghost Button</button>
            </div>
            <div className="p-4 bg-slate-50 border rounded-xl flex items-center justify-between">
              <span className="text-sm font-medium">Input Field Preview</span>
              <div className="w-24 h-2 bg-slate-300 rounded-full"></div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-[10px]">Icon Set</div>
              <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-[10px]">Lucide</div>
              <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-[10px]">Library</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignSystemView;
