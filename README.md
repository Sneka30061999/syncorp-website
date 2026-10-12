# Syncorp Technologies – SaaS Product Showcase

A responsive, data-driven company website built with **React 18 + Vite + React Router**.
Midnight-black theme with silver borders, white text and subtle glow.

## Features (matches the reference design)
- Header: logo, Home / About / Products / Solutions / Contact, and a Get in Touch button (mobile menu included)
- Hero with tagline, intro, Explore Products + Contact Us buttons and a laptop dashboard visual
- **Dynamic products**: the product cards, detail pages, and contact dropdown are generated from `src/data/products.js`
- Solutions section, "Why Choose" (About) section, and a call-to-action banner
- Product detail page at `/products/:id`: hero with laptop screenshot, Overview, Key Features (6), Why Choose, and a Ready to Get Started banner, all generated from the product data
- Optional **Watch Demo** button: add `demoUrl: "https://..."` to a product to show it
- **Get in Touch** opens a contact modal (Name, Email, Phone, Message) with the message **prefilled**: "I am interested in learning more about TaskFlow."
- Form validation: required fields, email format, phone digits, minimum message length
- Footer with logo, links, email, phone and social icons
- SEO: page title and meta description per page, image alt text, lazy-loaded SVG images
- Responsive: desktop, tablet, mobile; cards stack vertically on small screens

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the build
```

## Add or change products (no component edits needed)
Edit `src/data/products.js`. Each product needs: `id`, `name`, `category`, `subtitle`, `tagline`, `intro`, `short` (card text), `icon` (card image), `image` (detail-page screenshot), `overviewTitle`, `purpose`, `highlights[3]`, `featuresTitle`, `featuresIntro`, `features[6]`, `whyTitle`, `whyText`, `whyPoints[4]`, `ctaText`. Copy an existing product as a template. Icon names for `highlights` and `features` are listed in `src/components/Icons.jsx`.
Put files in `public/images/` and point `icon` / `image` to them. The sample SVGs can be regenerated with `npm run images`.
Company text, solutions list, why-choose points and contact details live in `src/data/company.js`.

## Contact form submissions
- Demo mode (default): enquiries are saved to the browser's `localStorage` (`syncorp_enquiries`).
- Real delivery: copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT` to a Formspree / Web3Forms / your own API URL.

## Project structure
```
src/
  components/  Header, Hero, Products, ProductCard, Solutions, About, CtaBanner,
               ProductDetails, ContactForm, ContactModal, Footer, Logo, Icons
  pages/       Home, ProductPage, ContactPage, NotFound
  data/        products.js, company.js
  hooks/       useDocumentMeta.js, useReveal.js
```

## Test checklist
1. Nav links scroll to About / Products; Contact opens /contact.
2. Click a card image and Learn More → correct detail page.
3. Get in Touch → modal opens, message is prefilled with the product name.
4. Submit empty form → errors shown; invalid email → error; valid data → success message.
5. Resize to ~768px and ~375px → layout adapts, cards stack, menu becomes a button.

## Deploy / GitHub
```bash
git init && git add . && git commit -m "Syncorp website"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
For static hosting (Netlify/Vercel) the build output is `dist`. Add a rewrite of all paths to `/index.html` so `/products/taskflow` works on refresh.
