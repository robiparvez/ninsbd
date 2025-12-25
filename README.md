# নর্দান ইন্সটিটিউট অব নার্সিং সায়েন্স (এনআইএনএস)

A static React frontend for নর্দান ইন্সটিটিউট অব নার্সিং সায়েন্স (এনআইএনএস) website, built with Vite. This is a public-facing website showcasing the institute's information, courses, faculty, and more. All content is static and hardcoded, with no backend integration.

## Features

### Core Pages

- **Home Page**: Hero slider, principal's message, latest notices, course introduction, photo gallery preview
- **About**: Institute's aim and objectives, characteristics
- **Gallery**: Full photo gallery with lightbox viewer
- **Course**: Detailed course information including introduction, benefits, eligibility, rules, and admission details
- **Notice**: Latest notices displayed as images with lightbox
- **Teacher**: Faculty profiles with photos, names, positions, and qualifications
- **Director**: Governing body and board of directors profiles
- **Staff**: Administrative staff profiles
- **Contact**: Contact form with EmailJS integration for inquiries

### Interactive Components

- **Contact Form**: Form validation using react-hook-form, sends emails via EmailJS
- **Photo Gallery**: Grid layout with lightbox (yet-another-react-lightbox) featuring zoom, slideshow, counter, and fullscreen
- **Notice Viewer**: Image-based notices with lightbox navigation
- **Facebook Messenger Widget**: Fixed button for direct messaging
- **Scroll to Top**: Automatic scroll restoration on navigation, manual scroll button

### UI/UX Features

- **Responsive Design**: Bootstrap-based responsive layout
- **Animations**: AOS (Animate On Scroll) for smooth page transitions
- **Navigation**: Fixed topbar with collapsible menu
- **Footer**: Contact information, embedded map, social links
- **Theme**: MUI theme with Montserrat font, custom CSS styling

## Tech Stack

- **React 19**: Modern React with hooks and concurrent features
- **Vite 7**: Fast build tool and development server
- **React Router v7**: Client-side routing
- **Material-UI v7**: Component library for consistent UI
- **Bootstrap 5**: CSS framework for responsive design
- **React Bootstrap**: Bootstrap components for React
- **yet-another-react-lightbox**: Image gallery with advanced features
- **EmailJS**: Client-side email sending service
- **AOS**: Scroll animations library
- **html-react-parser**: HTML content parsing
- **react-hook-form**: Form validation and handling
- **styled-components**: CSS-in-JS styling

## Project Structure

```bash
src/
├── components/
│   ├── router/
│   │   ├── AppRouter.jsx    # Route definitions
│   │   └── Router.jsx       # Router wrapper
│   └── user/
│       ├── components/      # Interactive components (Contact, Teacher, etc.)
│       ├── container/       # Page components (About, Gallery, etc.)
│       ├── images/          # Static image assets
│       └── Data.jsx         # Global static data
├── services/                # Utilities (ScrollToTop)
├── assets/                  # Additional assets
├── App.jsx                  # Main app with theme provider
└── main.jsx                 # App entry point
public/
└── images/                  # Static images (logos, gallery, etc.)
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd ninsbd
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install lightbox plugins (optional, for development):

   ```bash
   npm run install-lightbox
   npm run install-lightbox-plugins
   ```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Configuration

### Static Data

All content is stored in `Data.jsx` files throughout the `src/components/user/` directory:

- `src/components/user/Data.jsx`: Global constants (institute name, FB chat config)
- Component-specific data files: Course details, teacher profiles, etc.

### EmailJS Setup

Contact form uses EmailJS. Configuration is in `src/components/user/components/contact/Data.jsx`:

```javascript
export const emailJsConfig = {
    serviceId: 'your-service-id',
    templateId: 'your-template-id',
    userId: 'your-user-id'
};
```

### Lightbox Plugins

Gallery uses yet-another-react-lightbox with plugins. Install via tasks or manually:

```bash
npm install yet-another-react-lightbox
npm install @yet-another-react-lightbox/zoom @yet-another-react-lightbox/slideshow @yet-another-react-lightbox/counter @yet-another-react-lightbox/fullscreen
```

## Key Components Overview

### Routing

- Home (`/`): Aggregates multiple components (Slider, Principal, News, CourseContainer, PhotoGallery)
- Individual pages: `/about`, `/gallery`, `/course`, `/notice`, `/teacher`, `/director`, `/staff`, `/contact`
- Fixed layout: Topbar and Footer on all pages
- ScrollToTop wrapper for navigation

### Data Management

- Static exports in ES6 modules
- Data separated by component/feature

### Styling

- Bootstrap for grid and utilities
- MUI for theme and icons
- Custom CSS files per component
- Responsive design with mobile-first approach

### External Integrations

- **EmailJS**: Contact form submissions
- **Facebook Messenger**: Direct messaging widget
- **Google Maps**: Embedded map in footer (via MapContainer)

## Development Workflow

1. **Component Development**: Create components in appropriate `user/components/` or `user/container/` subdirectories
2. **Data Updates**: Modify `Data.jsx` files for content changes
3. **Styling**: Add custom CSS or use Bootstrap/MUI classes
4. **Testing**: Manual testing in browser, check responsiveness
5. **Build**: Run `npm run build` for production deployment

## Contributing

1. Follow existing code patterns and component structure
2. Use meaningful component and file names
3. Maintain Bengali text for content
4. Test responsiveness across devices
5. Update static data files for content changes

## License

Copyright (c) 2025 <parvezrobi@yahoo.com>

All rights reserved. This software and associated documentation files are the property of <parvezrobi@yahoo.com> and may not be copied, modified, or distributed without explicit written permission.
