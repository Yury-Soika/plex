# Plex launch readiness

This checklist separates what is verified in the repository from what must be
verified against the real production environment. A successful local build is
necessary, but it does not prove email delivery, analytics ownership, DNS, TLS,
or approved client evidence.

## Verified locally

- Repository-wide ESLint passes.
- TypeScript validation passes.
- The production build generates all public routes.
- Unknown routes return a branded `404` response with `noindex`.
- `/invoice` is excluded from indexing in metadata and `robots.txt`.
- The web manifest is available at `/manifest.webmanifest`.
- Public responses include:
  - Content Security Policy
  - clickjacking protection
  - MIME sniffing protection
  - referrer restrictions
  - browser feature restrictions
  - one-year HSTS
- Fingerprinted `/_next/static` assets use immutable one-year browser caching.
- The Content Security Policy permits the current EmailJS and consent-gated GA4
  architecture while keeping other connection destinations closed.
- The Aster and Relay labs remain analytics-free.
- `npm run smoke` checks public routes, canonicals, the legacy redirect,
  discovered internal links, crawler files, noindex boundaries, the manifest,
  security headers, and branded 404 behavior against a separately running build.

## Required production inputs

- Approved `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- Approved `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- Approved `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- Controlled contact-form recipient
- Approved `NEXT_PUBLIC_GA_ID`, if GA4 will be enabled
- Access to the production GA4 property and DebugView
- Confirmed DNS and TLS for `plex.ee`
- Written approval for any real client name, testimonial, metric, or outcome
- Named physical iOS and Android devices for Venue Mobile verification

## Deployment gate

1. Confirm that the deployment contains the exact reviewed source state.
2. Run `npm ci`, `npm run lint`, and `npm run build`.
   Start the resulting build and run `npm run smoke` in a separate terminal.
3. Confirm `https://plex.ee`, the canonical host, redirects consistently and has
   a valid certificate.
4. Check `/robots.txt`, `/sitemap.xml`, and `/manifest.webmanifest`.
5. Inspect the response headers on `/`, `/contact`, `/insights`, and `/invoice`.
6. Submit one controlled contact message and verify:
   - one message reaches the approved recipient;
   - the visitor sees success only after confirmed delivery;
   - no duplicate message is produced;
   - no form values appear in analytics.
7. Follow the consent and GA4 procedure in `ANALYTICS.md`.
8. Test the main journey at 1440px and 390px:
   - homepage to Services;
   - homepage to Work;
   - case study to interactive preview;
   - Insights article to Contact;
   - Contact form validation and delivery.
9. Verify keyboard navigation, visible focus, reduced motion, and the branded 404.
10. Check social previews using the deployed Open Graph image.

## Post-launch observation

During the first week, review only operational signals:

- contact delivery failures;
- 404 paths that indicate broken links;
- Content Security Policy errors in the browser console;
- unexpected layout shifts or slow portfolio imagery;
- analytics events missing from the documented contract.

Do not change positioning based on a very small traffic sample. Collect enough
qualified enquiries and search data to distinguish a real pattern from noise.

## Rollback principle

Keep the last known-good production artifact available. If contact delivery,
navigation, or core rendering fails after deployment, restore that artifact
before investigating optional analytics or visual polish.
