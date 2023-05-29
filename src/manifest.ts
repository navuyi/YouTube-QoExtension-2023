import type { Manifest } from 'webextension-polyfill';
import pkg from '../package.json';

const manifest: Manifest.WebExtensionManifest = {
  manifest_version: 3,
  name: pkg.displayName,
  version: pkg.version,
  description: pkg.description,
  //options_ui: {
  //  page: 'src/pages/options/index.html',
  //},
  background: {
    service_worker: 'src/pages/background/index.js',
    type: 'module',
  },
  action: {
    //default_popup: 'src/pages/popup/index.html',
    default_icon: 'icon-34.png',
  },
  //chrome_url_overrides: {
  //  newtab: 'src/pages/newtab/index.html',
  //},
  icons: {
    '128': 'icon-128.png',
  },
  content_scripts: [
    {
      matches: ["https://www.youtube.com/*"],
      js: ['src/pages/content/index.js'],
      run_at: "document_idle"
    },
    {
      matches: ["https://www.youtube.com/watch?v=*"],
      css: ['contentStyle.css'],
      run_at: "document_start"
    }
  ],
  devtools_page: 'src/pages/devtools/index.html',
  web_accessible_resources: [
    {
      resources: ['contentStyle.css', 'icon-128.png', 'icon-34.png'],
      matches: [],
    },
  ],
};

export default manifest;
