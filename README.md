# 🐉 Terrasque Dice

<div align="center">
  <h3>Premium Handcrafted Dice for Tabletop Adventures</h3>
  <p>A modern, high-performance e-commerce frontend built with React & Vite.</p>
</div>

---

## 📖 About

**Terrasque Dice** is a premium e-commerce frontend designed for selling artisanal tabletop gaming dice. Inspired by industry leaders like *Dispel Dice*, this project features a "Dark Luxury" aesthetic that puts the product front and center.

The design focuses on immersive visuals, clean typography, and a seamless user experience, making it perfect for luxury gaming accessories.

## ✨ Features

*   **🎨 Premium Design System**: Custom "Dark Luxury" theme with metallic gold accents (`#D4AF37`) and deep black backgrounds.
*   **🌗 Light/Dark Mode Ready**: Built with CSS variables to support seamless theming (defaulting to a clean Light Mode for the shop).
*   **🧭 Sticky Navigation**: Glassmorphic sticky header with split navigation and hover-triggered dropdown menus.
*   **🖼️ Immersive Hero**: Full-screen parallax-style hero section with high-impact typography.
*   **🛍️ Product Grid**: Responsive gallery layout with sidebar filters, sorting options, and interactive product cards.
*   **⚡ High Performance**: Powered by Vite for instant server start and lightning-fast HMR (Hot Module Replacement).

## 🛠️ Tech Stack

*   **Framework**: [React](https://react.dev/) (v19)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v3)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Typography**: [Cinzel](https://fontsource.org/fonts/cinzel) (Serif) & [Inter](https://fontsource.org/fonts/inter) (Sans) via Fontsource.

## 🚀 Getting Started

Follow these steps to get the project running locally.

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm (v9 or higher)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/JoanDidac/Terrasque-Dice.git
    cd Terrasque-Dice
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # If you encounter peer dependency issues with React 19:
    npm install --legacy-peer-deps
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open in browser**
    Navigate to `http://localhost:5173` to view the app.

## 📂 Project Structure

```bash
src/
├── assets/          # Static assets
├── components/      # UI Components
│   ├── Navbar.tsx   # Sticky navigation with dropdowns
│   ├── Hero.tsx     # Landing page hero section
│   ├── ProductGrid.tsx # Gallery with filters
│   └── Footer.tsx   # Site footer
├── App.tsx          # Main application layout
├── index.css        # Tailwind directives & CSS variables
└── main.tsx         # Entry point
```

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p><i>Roll with advantage.</i></p>
</div>
