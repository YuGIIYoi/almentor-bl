
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
    'index.csr.html': {size: 2211, hash: '2bab7aba8a518f9f97785645797eea320c3e813cb1fe26369eae7cbc719fb674', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: '3690faa71e00d71e2164b4330d84fa5413f83155381b5f2f986bb4b50d4725e8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 71321, hash: '0ad585b0ba38b5668ed525e036b36b753d18b828d5176a028760b07aa93e9ce2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-M7YU24LW.css': {size: 8984, hash: '+6uP4kUcIIo', text: () => import('./assets-chunks/styles-M7YU24LW_css.mjs').then(m => m.default)}
  },
};
