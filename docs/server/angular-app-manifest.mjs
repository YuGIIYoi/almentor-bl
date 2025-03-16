
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/almentorbusiness/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/almentorbusiness"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 516, hash: 'c0b9d5a27aab115ef9b8471ee4523a583360c1d03a4041388e5451d342121062', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1029, hash: '6c010ab3fc08be03dd0f44fea0292e68e1c5e962b68bbd8b593d9f1988fc604b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20864, hash: '6f7b96af0170b6f3daf9ab1afdca6797b78e99091010091263b67094e06a80ed', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
