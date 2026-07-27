# Plex analytics and conversion measurement

Plex uses optional Google Analytics 4 only after a visitor chooses **Allow
all**. When no `NEXT_PUBLIC_GA_ID` is configured, no analytics script loads and
conversion events are inert.

The interactive Relay lab at `/labs/relay` never loads analytics, regardless of
consent.

## Event model

| Event | Purpose | Allowed parameters |
| --- | --- | --- |
| `page_view` | Understand public route usage | GA page path, URL, and document title |
| `cta_click` | Compare calls to action | Interface location and destination |
| `work_open` | Understand portfolio interest | Interface location and concept project ID |
| `insight_open` | Understand editorial interest | Interface location and article slug |
| `contact_form_start` | Measure qualified-enquiry starts | Interface location only |
| `contact_form_submit` | Diagnose the enquiry completion boundary | `success`, `delivery_error`, or `unconfigured` |
| `calendar_click` | Measure intro-call intent | Interface location only |
| `email_click` | Measure direct-contact intent | Interface location only |

Names, email addresses, company names, messages, budgets, timelines, and other
form values must never be added to analytics events.

## Consent behaviour

- Before a choice, Google Analytics is not requested.
- **Only essential** keeps analytics disabled.
- **Allow all** loads GA4 and enables anonymous interaction events.
- **Cookie preferences** in the footer reopens the consent panel.
- Withdrawing analytics consent stops future event calls and removes accessible
  first-party `_ga` cookies.
- The essential consent choice is stored for one year using `SameSite=Lax` and
  `Secure` on HTTPS.

## Configuration

Set the public GA4 measurement ID:

```text
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

No measurement ID should be committed to the repository. Configure it in the
production environment.

## Production verification

1. Open a private browser session and confirm no request to
   `googletagmanager.com` occurs before consent.
2. Choose **Only essential** and confirm page navigation and CTA clicks create no
   GA4 events.
3. Reopen **Cookie preferences**, choose **Allow all**, and use GA4 DebugView to
   confirm a single page view for each client-side route.
4. Verify CTA, portfolio, Insights, calendar, email, and contact-form milestones.
5. Inspect event parameters and confirm that no personal or free-text form data
   is present.
6. Withdraw consent through the footer and confirm no further events are sent.

Production verification requires the approved analytics property and its
configured `NEXT_PUBLIC_GA_ID`.
