# Plex - Digital Agency Website

Premium digital agency website for nightlife and entertainment venues.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 🎨 Features

- ✅ Modern, responsive design
- ✅ Dark theme with purple/blue accents
- ✅ Smooth scroll animations
- ✅ Interactive components
- ✅ Contact form
- ✅ Portfolio showcase
- ✅ Service packages
- ✅ Mobile-friendly navigation
- ✅ SEO optimized
- ✅ **Content Management System** - All text in one JSON file
- ✅ TypeScript for type safety
- ✅ No hardcoded content

## 📁 Project Structure

```
app/
├── components/
│   ├── Navbar.tsx         # Fixed navigation bar
│   ├── Hero.tsx           # Hero section with CTA
│   ├── Services.tsx       # Services grid
│   ├── Portfolio.tsx      # Portfolio projects
│   ├── TechStack.tsx      # Technologies used
│   ├── Process.tsx        # Work process timeline
│   ├── Pricing.tsx        # Pricing packages
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer with links
├── data/
│   └── content.json       # 🔥 All content in one place
├── utils/
│   └── content.ts         # Content management utilities
├── globals.css            # Global styles
├── layout.tsx             # Root layout
└── page.tsx               # Main page
```

## 🛠️ Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## 🎯 Sections

1. **Hero** - Eye-catching headline with CTAs
2. **Services** - What we build (4 service cards)
3. **Portfolio** - Showcase of work (concept projects)
4. **Tech Stack** - Technologies we use
5. **Process** - How we work (4-step timeline)
6. **Pricing** - 3 pricing tiers (Starter, Professional, Enterprise)
7. **About** - Company story and values
8. **Contact** - Contact form and information

## 🎨 Design Tokens

### Colors

- Background: `#0a0a0a`
- Surface: `#1a1a1a`
- Accent: `#8b5cf6` (Purple)
- Accent Hover: `#7c3aed`

### Fonts

- Primary: Inter (Google Fonts)

## 📝 Customization

### Update Content

**All website content is managed in one place:**

Edit `app/data/content.json` to update:

- Site name, tagline, description
- Navigation links
- Hero section text
- Services and features
- Portfolio projects
- Tech stack
- Process steps
- Pricing packages
- About section
- Contact form labels
- Footer information

No need to touch component files! 🎉

### Change Colors

Update color variables in `app/globals.css`:

- `--background`: Main background color
- `--foreground`: Text color
- `--accent`: Primary accent color (buttons, links)
- `--accent-hover`: Accent hover state

### Content Management

The content system includes:

- **Type-safe**: TypeScript types for all content
- **Easy to update**: Change text without touching code
- **Localization ready**: Easy to add multiple languages
- **Single source of truth**: One file for all content

**Example content.json structure:**

```json
{
  "hero": {
    "title": "Plex",
    "headline": "We Build Premium Digital",
    "cta": {
      "primary": "Get Started",
      "secondary": "View Our Work"
    }
  }
}
```

All content is imported via `app/utils/content.ts` with type safety.

## 🚢 Deployment

### Vercel (Recommended - Free & Easy)

1. **Push to GitHub** (create repo and push your code)
2. **Go to [Vercel](https://vercel.com)** and sign in with GitHub
3. **Import your repository** - Click "Import Project"
4. **Deploy** - Vercel auto-detects Next.js and deploys
5. **Done!** - Your site is live with automatic deployments

Every push to `main` branch = automatic deployment 🚀

### Alternative: Netlify, Railway, or any Node.js hosting

This is a standard Next.js app - works anywhere!

## 📧 Contact

For questions or support, email: contact@plex.ee

## 📄 License

© 2025 Plex. All rights reserved.
