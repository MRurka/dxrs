// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-template-js": preferDefault(require("/Users/Rurka/dxrs/src/templates/blogTemplate.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/Rurka/dxrs/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Rurka/dxrs/src/pages/index.js"))
}

