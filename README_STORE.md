# Novedades Angel y Chuy - Frontend Only

A modern, responsive e-commerce website for jewelry, bags, and perfumes built with React and Vite.

## Features

✨ **Complete Frontend**
- Responsive design for all devices
- Product catalog with categories and filtering
- Shopping cart with calculations
- Wishlist functionality
- Modern UI with smooth animations
- Mock product data included

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Navigation bar with cart counter
│   ├── Footer.jsx              # Footer with links and info
│   └── ProductCard.jsx         # Reusable product card component
├── pages/
│   ├── HomePage.jsx            # Landing page with featured products
│   ├── ProductsPage.jsx        # Product catalog with filters
│   └── CartPage.jsx            # Shopping cart and checkout preview
├── data/
│   └── products.js             # Mock product data
├── App.jsx                     # Main app with routing logic
├── App.css                     # Global app styles
├── index.css                   # Global CSS variables and theme
└── main.jsx                    # Entry point
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Build

```bash
npm run build
```

Builds to `docs/` for GitHub Pages deployment.

## Features Overview

### 1. Home Page
- Hero banner with call-to-action
- Featured products section
- Benefits highlight section
- Customer testimonials

### 2. Products Page
- Product grid with 6 mock items
- Category filter (Jewelry, Bags, Perfumes)
- Sort options (Name, Price, Rating)
- Responsive grid layout

### 3. Shopping Cart
- Add/remove items
- Update quantities
- Cart calculations (subtotal, shipping, tax)
- Free shipping over $100
- Cart persistence (can add backend later)

### 4. Wishlist
- Heart icon on product cards
- Toggle to/from wishlist
- Persistent in local state

## Technology Stack

- **React 19.2.4** - UI framework
- **Vite 8** - Build tool
- **Bootstrap 5.3** - CSS framework
- **React Router 7** - Routing (available but using simple state management for now)

## Styling

- **CSS Variables** for theming
- **Responsive design** with media queries
- **Custom CSS** with modern features (grid, flexbox, aspect-ratio)
- Light/dark mode support (from index.css)

## Mock Data

The app includes 6 mock products:
1. Diamond Necklace - $299.99
2. Leather Crossbody Bag - $149.99
3. Luxury Perfume - $89.99
4. Pearl Earrings - $179.99
5. Designer Handbag - $349.99
6. Cologne Gift Set - $129.99

## Next Steps to Add Backend

When ready to add backend:
1. Replace mock data with API calls
2. Add user authentication
3. Integrate payment processing (Stripe/PayPal)
4. Add order management
5. Implement admin dashboard
6. Add email notifications

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge)

## License

MIT
