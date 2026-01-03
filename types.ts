
import React from 'react';

export enum AppSection {
  SITEMAP = 'sitemap',
  HOMEPAGE = 'homepage',
  PRODUCT_TEMPLATE = 'product-template',
  BLOG = 'blog',
  SEO_PLAN = 'seo-plan',
  DESIGN_SYSTEM = 'design-system',
  PLUGINS = 'plugins',
  LAUNCH_CHECKLIST = 'checklist'
}

export interface MenuItem {
  id: AppSection;
  label: string;
  icon: React.ReactNode;
}