
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/almentor-bl/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/almentor-bl"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2211, hash: '4274c7d9aa5da66b59963525dc36812fb65a09a842bc383de8328b92400014ce', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: '2bc12515801b1e184bd7a6e4c6bed1bb7ea21031a706ae6f783080390b9eacf5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 76447, hash: '660c942b3e59c1b25b293a8a7d5ca16cb3f603a7cc138bbb92c4fe33022003fa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-M7YU24LW.css': {size: 8984, hash: '+6uP4kUcIIo', text: () => import('./assets-chunks/styles-M7YU24LW_css.mjs').then(m => m.default)}
  },
};
