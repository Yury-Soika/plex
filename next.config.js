/** @type {import('next').NextConfig} */
const nextConfig = {
  // @react-pdf/renderer must not be webpack-bundled: it relies on a custom
  // reconciler (React-version-selected at runtime) and a base64-inlined Yoga
  // WASM layout engine. Bundling them breaks PDF generation on serverless
  // (works in dev, 500s in production). Keep it external so it loads from
  // node_modules with its assets intact.
  serverExternalPackages: ['@react-pdf/renderer'],
};

module.exports = nextConfig;
