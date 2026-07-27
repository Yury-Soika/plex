const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), geolocation=(), microphone=(), payment=(), usb=()',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data:",
      "img-src 'self' data: blob: https://www.google-analytics.com",
      // data: is required for @react-pdf/renderer's base64-inlined Yoga WASM fetch (see serverExternalPackages note below).
      "connect-src 'self' data: https://api.emailjs.com https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com",
      "frame-src 'self' blob:",
      "worker-src 'self' blob:",
    ].join('; '),
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000',
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // @react-pdf/renderer must not be webpack-bundled: it relies on a custom
  // reconciler (React-version-selected at runtime) and a base64-inlined Yoga
  // WASM layout engine. Bundling them breaks PDF generation on serverless
  // (works in dev, 500s in production). Keep it external so it loads from
  // node_modules with its assets intact.
  serverExternalPackages: ['@react-pdf/renderer'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
