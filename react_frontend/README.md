# UI Component Showcase (Ocean Professional)

A React + Tailwind CSS showcase featuring interactive components: Accordion, Bento Menu, Breadcrumbs, Carousel, Chatbot, Form Wizard, Testimonial, and Toast.

## Run locally

- npm start — start development server on http://localhost:3000
- npm run build — production build
- npm test — run tests

No external services are required. The app reads environment variables if present but works with defaults.

## Navigation

The app presents a gradient header and a left sidebar. The sidebar lists:
- Overview
- Accordion
- Bento Menu
- Breadcrumbs
- Carousel
- Chatbot
- Form Wizard
- Testimonial
- Toast

The active link is highlighted. Click any item to view that demo. The main content area shows the interactive preview.

## Theme

Ocean Professional theme:
- primary #2563EB
- secondary/success #F59E0B
- error #EF4444
- gradient from-blue-500/10 to-gray-50
- background #f9fafb
- surface #ffffff
- text #111827

These are set via CSS variables and Tailwind theme extensions in:
- tailwind.config.js
- src/tailwind.css

## Notes

- The Router basename uses REACT_APP_FRONTEND_URL if provided.
- All demos are built with accessible semantics, ARIA attributes, and focus styles.
