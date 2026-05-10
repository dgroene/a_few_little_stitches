# A Few Little Stitches — Project Reference

## Project Overview

A static website for **A Few Little Stitches**, a crafting studio in Frederick, Maryland. The site is hosted on GitHub Pages with a custom domain and is purposed to convert visitors into monthly subscribers for in-person crafting classes.

## Business Details

| Field | Value |
|---|---|
| Business Name | A Few Little Stitches |
| Owner | Jordan Love |
| Location | Frederick, Maryland |
| Email | info@afewlittlestitches.com |
| Instagram | [@afewlittlestitches](https://instagram.com/afewlittlestitches) |
| Custom Domain | www.afewlittlestitches.com |
| GitHub Username | dgroene |
| Repo | dgroene/a_few_little_stitches_web |

## Mission Statement

> A Few Little Stitches' mission is about crafting community in the sense that we are building a community of like-minded people who can congregate in real life, and enjoy human interaction in a device-driven world. In a world where things are done by machines, A Few Little Stitches embraces the imperfections of hand-crafted items that humans make themselves.

## Site Structure

Pages (no others):
- **Home** — hero, mission, class teaser, CTA to subscribe
- **Classes** — all 9 classes with descriptions, tiers, pricing, and sign-up links
- **Calendar** — weekly class schedule with holidays marked
- **About** — Jordan's story, mission, studio culture
- **Contact** — email and Instagram link

## Brand Guidelines

### Logo Usage
- The logo must always be **large and clearly visible** in all contexts — header, footer, and any other placement.
- Minimum size: `h-16` (64px) in the navbar; `h-24` (96px) in the footer. Never display the logo smaller than these values.
- Use `logo.svg` (light background version) on white/light backgrounds; use `logo-dark.svg` (dark/inverted version) on dark backgrounds such as the footer.
- Do not crop, distort, recolor, or apply effects to the logo.
- The logo already appears in the nav — do not duplicate it in page hero sections.

### Color Accessibility
- All text must meet **WCAG AA** contrast ratios: 4.5:1 for normal text, 3:1 for large text (≥ 18pt or ≥ 14pt bold).
- Brand colors (`#FF6B6B`, `#00B4D8`, `#9B5DE5`, `#FFC300`) may be used freely for decorative elements (backgrounds, borders, icons) but should **not** be used as text color on light backgrounds — they do not meet 4.5:1 contrast against white.
- Use `text-neutral` (dark `#2D2D2D`) for all body copy and labels on light backgrounds.
- Avoid opacity-reduced text classes below `/75` on light backgrounds (e.g., `text-base-content/60` fails WCAG AA; use `/75` or higher).

## Design System

### Logo
- File: `logo_stitches_v4_preview.svg`
- Tagline: "crafting community"
- Logo uses craft-inspired letterforms spelling "STITCHES"

### Color Palette (from logo)
| Name | Hex |
|---|---|
| Coral Red | `#FF6B6B` |
| Cyan Blue | `#00B4D8` |
| Purple | `#9B5DE5` |
| Golden Yellow | `#FFC300` |
| Dark Text | `#2D2D2D` |
| Muted Gray | `#999999` |
| Background | `#FFFFFF` |

### Typography
- Choose fonts that complement the logo: clean, modern, warm — not cold or corporate. A humanist sans-serif for body text and a display/script or chunky serif for headings work well. Suggest Google Fonts (free, no build tooling needed).

### Style
- Vibrant, warm, handcrafted feel
- Celebrate imperfection and human touch
- Community-forward, not luxury/exclusive

## Classes

### Structure
- **3 crafts:** Knitting, Bag Making, Quilting
- **3 skill tiers per craft:** Little Leaguer (beginner), All-Star (intermediate), GOAT (advanced)
- **9 total classes**
- In-person only, studio in Frederick MD
- 1.5 hours per session
- Once per week, weekday evenings (specific days/times TBD — use placeholders)
- Maximum **10 students** per class
- **All supplies included**

### Subscription Pricing
- **$175/month** — includes 4 class sessions per month
- Cancel anytime
- One Memberful sign-up link per class (9 links total)
- Use `https://afewlittlestitches.memberful.com/checkout?plan=CLASSNAME` as dummy links until real ones are provided

### Class Descriptions
Use reasonable placeholder content for all class and project descriptions. Descriptions should be warm, encouraging, and community-focused. They will be edited by Jordan before launch.

## Project Rotations

Classes feature rotating projects on a 3-month cycle:

| Quarter | Months |
|---|---|
| Q1 | July – September |
| Q2 | October – December |
| Q3 | January – March |
| Q4 | April – June |

The **next rotation starts July 2026**. Use placeholder project names for all four quarters and all three crafts. Project names should sound realistic and appealing (e.g., "The Market Tote," "Classic Ribbed Beanie," "Log Cabin Lap Quilt").

## Calendar & Schedule

### Class Frequency
- Once per week per class, weekday evenings
- Specific day/time per class is TBD — use Mon–Fri placeholder slots

### Holidays (No Classes)

**All US Federal Holidays:**
- New Year's Day — January 1
- Martin Luther King Jr. Day — 3rd Monday in January
- Presidents' Day — 3rd Monday in February
- Memorial Day — Last Monday in May
- Juneteenth — June 19
- Independence Day — July 4
- Labor Day — 1st Monday in September
- Columbus/Indigenous Peoples' Day — 2nd Monday in October
- Veterans Day — November 11
- Thanksgiving — 4th Thursday in November
- Christmas Day — December 25

**Additional Studio Holidays:**
- Pi Day — March 14
- Earth Day — April 22

*(Juneteenth is both a federal holiday and listed separately — mark it once.)*

### Calendar Display
- Show a monthly calendar view
- Mark all holidays with a clear visual indicator
- Show the class schedule (which class meets which day)
- The calendar year should be displayed starting from the current month

## Technical Specifications

### Stack
- Pure static HTML/CSS/JS — no frameworks, no build step required
- Single `index.html` or separate `.html` files per page (prefer separate files for clarity)
- All assets self-contained in the repo

### Hosting
- GitHub Pages, deployed from the `main` branch `/docs` folder OR `gh-pages` branch
- Custom domain: `www.afewlittlestitches.com`
- Include a `CNAME` file with `www.afewlittlestitches.com`

### Deployment
- GitHub Actions workflow at `.github/workflows/deploy.yml`
- Triggers on push to `main`
- Deploys static files to GitHub Pages
- No build step needed — just copy files

### Analytics
- None

### Third-Party Services
- **Memberful** for class registration and billing (sign-up links per class)
- **Instagram** embed or link only — no other social integrations

## File Structure (Target)

```
/
├── CLAUDE.md
├── CNAME
├── index.html                  # Home
├── classes.html
├── calendar.html
├── about.html
├── contact.html
├── assets/
│   ├── logo_stitches_v4_preview.svg
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── calendar.js         # Calendar rendering logic
└── .github/
    └── workflows/
        └── deploy.yml
```

## Content To-Dos (Jordan to complete before launch)

- [ ] Confirm day/time for each of the 9 classes
- [ ] Provide real Memberful sign-up links for each class
- [ ] Review and edit all class descriptions
- [ ] Review and edit project rotation names and descriptions
- [ ] Provide any photos of the studio or finished projects for the gallery/hero
- [ ] Confirm About page copy (bio, story)
- [ ] Verify holiday list is complete
