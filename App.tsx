
import React, { useState } from 'react';
import { 
  Layout, 
  Home, 
  Package, 
  Search, 
  Palette, 
  FileText, 
  Plug, 
  CheckCircle,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { AppSection } from './types';
import SitemapView from './views/SitemapView';
import HomepageView from './views/HomepageView';
import ProductTemplateView from './views/ProductTemplateView';
import BlogView from './views/BlogView';
import SEOPlanView from './views/SEOPlanView';
import DesignSystemView from './views/DesignSystemView';
import PluginsView from './views/PluginsView';
import ChecklistView from './views/ChecklistView';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOMEPAGE);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { id: AppSection.HOMEPAGE, label: 'Homepage Content', icon: <Home size={20} /> },
    { id: AppSection.SITEMAP, label: 'Website Sitemap', icon: <Layout size={20} /> },
    { id: AppSection.PRODUCT_TEMPLATE, label: 'Product Template', icon: <Package size={20} /> },
    { id: AppSection.BLOG, label: 'Blog & Content', icon: <FileText size={20} /> },
    { id: AppSection.SEO_PLAN, label: 'Technical SEO', icon: <Search size={20} /> },
    { id: AppSection.DESIGN_SYSTEM, label: 'Design System', icon: <Palette size={20} /> },
    { id: AppSection.PLUGINS, label: 'Recommended Plugins', icon: <Plug size={20} /> },
    { id: AppSection.LAUNCH_CHECKLIST, label: 'Launch Checklist', icon: <CheckCircle size={20} /> },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case AppSection.SITEMAP: return <SitemapView />;
      case AppSection.HOMEPAGE: return <HomepageView />;
      case AppSection.PRODUCT_TEMPLATE: return <ProductTemplateView />;
      case AppSection.BLOG: return <BlogView />;
      case AppSection.SEO_PLAN: return <SEOPlanView />;
      case AppSection.DESIGN_SYSTEM: return <DesignSystemView />;
      case AppSection.PLUGINS: return <PluginsView />;
      case AppSection.LAUNCH_CHECKLIST: return <ChecklistView />;
      default: return <HomepageView />;
    }
  };

  return (
    <div className="flex h-screen bg-white text-slate-900 overflow-hidden">
      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-indigo-600 text-white rounded-full shadow-lg"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 lg:static fixed inset-y-0 left-0 z-40
        w-72 bg-slate-900 text-slate-300 transition-transform duration-300 ease-in-out
        flex flex-col border-r border-slate-800
      `}>
        <div className="p-8">
          <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <span className="bg-indigo-600 px-2 py-1 rounded">KCC</span>
            <span>online.shop</span>
          </h1>
          <p className="text-xs text-slate-500 mt-2 uppercase tracking-widest font-semibold">Deliverables Console</p>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setIsSidebarOpen(false);
              }}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                ${activeSection === item.id 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'hover:bg-slate-800 hover:text-white'}
              `}
            >
              {item.icon}
              {item.label}
              {activeSection === item.id && <ChevronRight size={16} className="ml-auto" />}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-800 text-[10px] text-slate-500 text-center">
          © 2024 kcconline.shop | SEO Blueprint
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="h-16 border-b flex items-center justify-between px-8 bg-white/80 backdrop-blur-md sticky top-0 z-10">
          <h2 className="text-lg font-semibold text-slate-800">
            {menuItems.find(i => i.id === activeSection)?.label}
          </h2>
          <div className="hidden sm:flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500"></div> SEO Ready</span>
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Conversion Optimized</span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto bg-slate-50/50 p-4 lg:p-12">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
