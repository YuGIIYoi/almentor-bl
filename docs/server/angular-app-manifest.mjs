
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
    'index.csr.html': {size: 2211, hash: '63371d287ad9c3d3102b5ce97d726f00fbdbea8b3c74b58feb411b36c8aee0d7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: '688a727182bb6002528098ecdb2057eb8b433147e40cf6de1afccbb91db0040a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 76285, hash: '85f87bc873a40d3d00e805d3d51778751febb4b76df1019497c86d3984ad0d78', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-I6AZBZIR.css': {size: 8995, hash: '52DzibDny2M', text: () => import('./assets-chunks/styles-I6AZBZIR_css.mjs').then(m => m.default)}
  },
};
