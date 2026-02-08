# NextJS Landing Page

A modern, responsive landing page built with Next.js 16, featuring dark/light theme toggle and animated UI components.

## Tech Stack

- **Framework**: Next.js 16.1.6 (Turbopack)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: tw-animate-css, Framer Motion
- **Theme**: next-themes (dark/light mode)

## Features

- Responsive hero section with animated text effects
- Dark/Light theme toggle
- Customer logo showcase
- FAQ accordion
- Team section
- Stats display
- Integration showcases

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Known Issues

- **Routing is not working** - Navigation links (`#link`) are placeholders and do not route to actual pages yet.

## Project Structure

```
├── app/           # Next.js app directory
├── components/    # React components
│   ├── ui/        # shadcn/ui components
│   └── logos/     # Brand logo SVG components
├── lib/           # Utility functions
└── public/        # Static assets
```

## License

MIT
