
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
    'index.csr.html': {size: 2211, hash: 'd6932c42b3dee5ce2e222113e3143420b061f2c1c75e568df0695d094ca6b483', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: '1e371886a33e0484dc8131a176a1a7d731e5d1cdc856b0e8cf4bf6c4b30025b5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 77840, hash: '428be0c319b144a49ed887507f4bee47b3282f87ec5fc76497f6a4e659a76800', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-M7YU24LW.css': {size: 8984, hash: '+6uP4kUcIIo', text: () => import('./assets-chunks/styles-M7YU24LW_css.mjs').then(m => m.default)}
  },
};
