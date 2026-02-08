# Agent Automations — One-page site (GitHub Pages)

This is a static one-page marketing site with a booking modal that supports:
- Calendly embedded scheduling (recommended)
- A fallback booking request form via Formspree

## Setup

### 1) Replace Calendly URL
In `index.html`, find:

`data-url="https://calendly.com/charlenecassar/15min"`



Replace with your Calendly scheduling link.

### 2) (Optional) Enable booking request form
Create a Formspree form and replace:

`action="https://formspree.io/f/YOUR_FORM_ID"`

You can also swap this to Tally/Google Forms instead.

## Deploy on GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: `main` / root
4. Save and wait for GitHub Pages to publish your site.

## Custom domain (optional)
If you have a domain:
- Add a `CNAME` file with your domain (e.g. `agentcraft.ai`)
- Configure DNS per GitHub Pages instructions
