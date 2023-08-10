import type { Manifest } from 'webextension-polyfill'
import pkg from '../package.json'

const manifest: Manifest.WebExtensionManifest = {
  manifest_version: 3,
  name: pkg.displayName,
  version: pkg.version,
  description: pkg.description,
  permissions: ['tabs', 'debugger', 'storage'],
  //options_ui: {
  //  page: 'src/pages/options/index.html',
  //},
  background: {
    service_worker: 'src/pages/background/index.js',
    type: 'module',
  },
  action: {
    //default_popup: 'src/pages/popup/index.html',
    default_icon: 'icons/yt-logo-48.png',
  },
  //chrome_url_overrides: {
  //  newtab: 'src/pages/newtab/index.html',
  //},
  icons: {
    '16': 'icons/yt-logo-16.png',
    '32': 'icons/yt-logo-32.png',
    '48': 'icons/yt-logo-48.png',
    '64': 'icons/yt-logo-64.png',
    '128': 'icons/yt-logo-128.png',
  },
  host_permissions: ['http://127.0.0.1/*'],
  content_scripts: [
    {
      matches: ['https://www.youtube.com/*'],
      js: ['src/pages/content/index.js'],
      run_at: 'document_idle',
    },
    {
      matches: ['https://www.youtube.com/watch?v=*'],
      css: ['contentStyle.css'],
      run_at: 'document_start',
    },
  ],
  devtools_page: 'src/pages/devtools/index.html',
  web_accessible_resources: [
    {
      resources: ['contentStyle.css', 'icon-128.png', 'icon-34.png'],
      matches: [],
    },
    {
      resources: ['qualityScoreUI.html'],
      matches: ['<all_urls>'],
    },
  ],
}

export default manifest
