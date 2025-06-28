import { defineConfig } from 'wxt';
import tailwindcss from '@tailwindcss/vite';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  entrypointsDir: "entrypoints",
  modules: ['@wxt-dev/module-react'],
  vite: () => ({
    plugins: [tailwindcss()],
  }),
  manifest: {
	name:'Propalyze',
	description: 'Property Analysis Tool',
	version: '1.0.0',
	permissions: [
		"activeTab",
		"scripting",
		"contextMenus",
		"tabs",
		"storage",
	],
	background: {
      service_worker: 'src/background.ts',
      type: 'module',
    },
	content_scripts: [
      {
        matches: ['*://*.google.com/*'],
        js: ['src/content.ts'],
        run_at: 'document_idle',
      },
    ],
    web_accessible_resources: [
      {
        resources: ['currHomeInfo.ts'],
        matches: ['*://*.google.com/*'],
      },
    ],
  },
});
