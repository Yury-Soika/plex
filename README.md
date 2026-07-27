# Plex

Plex is the studio website for an independent European digital product studio. It presents custom websites, web applications, booking systems, internal tools, mobile applications, AI integrations, and business automation.

Hospitality remains a demonstrated area of expertise, but the offer is designed for service businesses and product teams across industries.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS for the contact workflow
- Four locales: English, Estonian, Polish, and Russian

## Local development

```bash
npm ci
npm run dev -- --port 3100
```

Open `http://127.0.0.1:3100`.

## Production checks

```bash
npm run lint
npm run build
```

After starting the production build separately, run the dependency-free release
smoke test:

```bash
npm run start -- --port 3100
# In another terminal:
npm run smoke
```

Use `PLEX_BASE_URL=https://your-preview-host.example npm run smoke` to verify a
deployed preview. The test does not submit forms, call external previews, or
change remote state.

The production contact form also needs the public EmailJS variables documented in `.env.example`. Without them, the UI deliberately reports that messaging is unavailable rather than showing a false success.

Optional GA4 measurement is consent-gated and inactive without a configured
measurement ID. The event policy and production verification procedure are in
[`ANALYTICS.md`](./ANALYTICS.md).

The boundary between locally verified work and production-only checks is
documented in [`LAUNCH_READINESS.md`](./LAUNCH_READINESS.md).

## Public information architecture

- `/` — studio overview
- `/services` — capabilities and engagement models
- `/work` — selected work
- `/work/[project]` — case studies
- `/labs/aster` — self-contained commerce and checkout workflow demo
- `/labs/relay` — self-contained AI-assisted operations workflow demo
- `/insights` — practical product and operations perspectives
- `/insights/[article]` — static editorial guides with Article schema
- `/expertise/hospitality` — retained industry expertise
- `/about` — studio and leadership
- `/contact` — qualified project enquiry
- `/privacy` and `/terms` — legal information

## Portfolio evidence policy

Velvet, Nightfall, Venue, Venue Mobile, Relay, and Aster Supply are labelled as
concepts unless real client and outcome evidence is available. Do not add client
names, testimonials, metrics, launch claims, or production claims without
verifiable source material and approval.

The Insights articles are Plex editorial perspectives. They deliberately avoid
invented benchmarks, client outcomes, and time-sensitive claims. Long-form
articles are currently published in English; the surrounding navigation and
interface labels remain available in all four site languages.

## Before deployment

1. Run lint and a clean production build.
2. Verify every locale and public route at desktop and mobile widths.
3. Confirm EmailJS variables with a controlled test recipient.
4. Check canonical URLs, sitemap, robots rules, and social previews.
5. Confirm external demo destinations are healthy.
6. Record real-device coverage separately for mobile applications.
7. If GA4 is enabled, verify consent withdrawal and every allowed event against
   the approved production property.
