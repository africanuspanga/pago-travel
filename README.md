# ZANZIONE TOURS & SAFARIS

Premium Zanzibar Tours, Tanzania Safari & Kilimanjaro Climbing Expeditions

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/africanus-s-projects/v0-website-with-logo)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/1M5gFFZAbSf)

## About

ZANZIONE TOURS & SAFARIS is a premier tour operator based in Shangani, Stone Town, Zanzibar. We specialize in authentic East African adventures including:

- **Zanzibar Island Tours** - Pristine beaches, spice farms, Stone Town heritage, and marine life
- **Tanzania Safaris** - Big Five game viewing in Serengeti, Ngorongoro, and other iconic parks
- **Kilimanjaro Climbing** - Expert-guided expeditions to Africa's highest peak
- **Transfer Services** - Comfortable airport and hotel transfers across Zanzibar

## Technology Stack

- **Framework:** Next.js 15 with React 19
- **Styling:** Tailwind CSS 4 with custom design system
- **UI Components:** shadcn/ui with Radix UI primitives
- **Icons:** Lucide React
- **Deployment:** Static export for cPanel hosting

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/YOUR-USERNAME/zanzione-tours.git
cd zanzione-tours
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

To create a static export for deployment:

\`\`\`bash
npm run build
\`\`\`

This generates an `out` directory with all static files ready for deployment to cPanel or any static hosting.

## Deployment

### Option 1: cPanel Deployment (Static HTML)

For detailed deployment instructions to cPanel, see [DEPLOYMENT.md](./DEPLOYMENT.md)

Quick deployment steps:
1. Build the site: `npm run build`
2. Upload the `out` directory contents to your cPanel `public_html` folder
3. Configure `.htaccess` for proper routing
4. Visit your domain to verify

### Option 2: Vercel Deployment

Your project is live at:

**[https://vercel.com/africanus-s-projects/v0-website-with-logo](https://vercel.com/africanus-s-projects/v0-website-with-logo)**

Continue building your app on:

**[https://v0.app/chat/projects/1M5gFFZAbSf](https://v0.app/chat/projects/1M5gFFZAbSf)**

## Project Structure

\`\`\`
zanzione-tours/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── zanzibar/          # Zanzibar tours
│   ├── safari/            # Safari packages
│   ├── kilimanjaro/       # Climbing expeditions
│   ├── itineraries/       # Tour packages
│   ├── transfers/         # Transfer services
│   ├── admin/             # Admin dashboard
│   └── admin-login/       # Admin authentication
├── components/            # Reusable React components
│   ├── navigation.tsx     # Site navigation
│   ├── footer.tsx         # Site footer
│   ├── ui/               # shadcn/ui components
│   └── whatsapp-float.tsx # WhatsApp contact button
├── public/               # Static assets
│   └── images/           # Image files
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json          # Project dependencies
\`\`\`

## Features

- 🌴 **Comprehensive Tour Listings** - Detailed information about all tours and packages
- 📱 **Mobile Responsive** - Optimized for all device sizes
- ⚡ **Fast Performance** - Static site generation for lightning-fast loading
- 🔍 **SEO Optimized** - Meta tags, structured data, and semantic HTML
- 🎨 **Custom Design System** - Brand colors and consistent styling
- 📞 **WhatsApp Integration** - Quick contact via floating button
- 👨‍💼 **Admin Dashboard** - Demonstration admin interface

## Admin Access

- **Login URL:** `/admin-login`
- **Email:** admin@zanzionetours.com
- **Password:** Zanzi@1964

Note: Admin dashboard is for demonstration purposes with sample data.

## Contact Information

**ZANZIONE TOURS & SAFARIS**
- **Location:** Shangani, Stone Town, Zanzibar
- **Email:** zanzionetoursandtravel@gmail.com
- **Facebook:** [ZANZIONE TOURS](https://www.facebook.com/share/17Wn8GXrd8/)

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## License

© 2025 ZANZIONE TOURS & SAFARIS. All rights reserved.

## Support

For technical support or inquiries about the website, please contact the development team or refer to [DEPLOYMENT.md](./DEPLOYMENT.md) for common issues and solutions.
