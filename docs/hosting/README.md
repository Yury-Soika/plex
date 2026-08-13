# Outage / maintenance page — how it actually works

> Written 2026-08-13, during a full Spaceship shared-hosting outage that took
> `plex.ee` completely offline (all ports dead, ICMP 100% loss).

## The thing to understand first

**A maintenance page has to be served by something that is still running.**

Spaceship's own `spacemail.com` can show a nice "Under maintenance" page while their
backend is down because **Cloudflare sits in front of it** — the 503 comes from
Cloudflare's edge (`server: cloudflare`), not from their server.

`plex.ee` has **no such layer**. DNS points straight at the origin box
(`66.29.148.128` = `server41-1.shared.spaceship.host`). So there are two very
different failure modes, and only one of them can be fixed from inside this repo:

| Failure mode | What's still alive | Can we show a page? |
|---|---|---|
| **A. Node app crashes / restarts** (common) | Apache/LiteSpeed on the box | ✅ **Yes** — that's what the files here do |
| **B. Whole box unreachable** (the 2026-08-13 outage) | nothing | ❌ **No** — needs an edge layer in front (see bottom) |

Anything added to the Next.js app itself — `error.tsx`, `global-error.tsx`, a custom
503 route — only runs *if Node is running*. In mode B it dies with everything else.
Those files are still worth having; they just solve a different problem.

## What's in this repo

- **`public/maintenance.html`** — a standalone, zero-dependency page. No JS required,
  no fonts, no images, no build step. Brand-matched to the site. Re-checks every 60s
  via `<meta http-equiv="refresh">` so a visitor who leaves the tab open gets dropped
  back on the real site automatically.
- **`docs/hosting/htaccess-error-pages.txt`** — the Apache directives that make it appear
  when the Node app is down.

## Installing the Apache side

⚠️ **Do not replace the existing `.htaccess` on the server.** On CloudLinux + Node.js
Selector it contains Passenger directives, and clobbering it takes the site down.
**Append** to it instead.

1. Deploy as usual (`./deploy.sh`) — this now ships `maintenance.html` and the snippet.
2. In cPanel → File Manager, open the `.htaccess` in the **document root**
   (usually `public_html/`), enable "show hidden files" if needed.
3. Paste the contents of `docs/hosting/htaccess-error-pages.txt` at the **end** of the file.
4. Copy `maintenance.html` into that same document root so Apache can reach it on disk
   without Node's help.

## Verify it actually works (do this once the server is back)

The failure mode this guards against is hard to test by wishing. Force it:

```bash
# 1. The page is reachable as a plain static file:
curl -I https://plex.ee/maintenance.html          # expect: HTTP/2 200

# 2. Stop the Node app in cPanel (Node.js Selector → Stop App), then:
curl -sI https://plex.ee/ | head -3               # expect: 503 + the maintenance page
#    ...and confirm in a browser that it LOOKS right, not just that it returns 503.

# 3. Start the app again and confirm the real site returns:
curl -sI https://plex.ee/ | head -3               # expect: 200
```

If step 2 returns a bare Apache error page instead of the branded one, the
`ErrorDocument` path is wrong for this server's layout — adjust the path in the
snippet to be relative to the document root and retry.

## Mode B — surviving a whole-box outage

This needs something in front of the origin that stays up. The standard fix is to put
**Cloudflare** (free tier) in front of `plex.ee` and enable a custom error page /
"Always Online".

⚠️ **Real risk to weigh before doing this.** `plex.ee` currently uses Zone.eu
nameservers (`ns.zone.eu` / `ns2.zone.ee`), and the **SPF, DKIM and DMARC records that
made cold email deliverable live there** — that was a hard-won fix on 2026-07-26 after
Gmail was rejecting sends outright (550 5.7.350). Moving to Cloudflare's nameservers
means migrating those records, and getting one wrong silently breaks email
deliverability again.

**If you do it:** export every DNS record first, migrate them all, and re-run the
deliverability self-test (send `contact@plex.ee` → Gmail, confirm SPF/DKIM/DMARC all
PASS) *before* considering the migration finished.

**Cheaper alternative if that risk isn't worth it:** accept that a total box outage
shows the browser's default error, and instead put a status note somewhere off this
host entirely — the Plex FB/LinkedIn page, or a one-page site on different infra.
That covers the "clients wonder what happened" problem without touching DNS at all.
