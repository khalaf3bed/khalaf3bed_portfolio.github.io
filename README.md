# 🌐 Abed Khalaf | Personal Portfolio Website

A personal portfolio built with a **modern minimalist & editorial aesthetic**. Designed to deliver fast loading times, an intuitive user experience, clean typography, and full cross-device responsiveness across mobile, tablet, and desktop screens.

---

## ✨ Key Features

* **Multi-Language Support (i18n):** Full support for 4 languages — Hebrew (default), Arabic, English, and Spanish, including automatic bidirectional layout switching (RTL / LTR) and local persistence.
* **Smart Dark & Light Modes:**
  * Automatically detects and matches the device/system theme preference (`prefers-color-scheme`).
  * Manual toggle option with user selection saved to `localStorage`.
* **Micro-Interactions & Dynamic UI:**
  * Rotating status indicator highlighting availability for freelance projects as well as full-time employment.
  * Reading progress bar located at the very top.
  * Category-based project filtering (Code & Development / Marketing & Strategy).
  * Single-click email copying with a non-intrusive Toast notification.
  * Subtle ambient cursor glow on desktop devices.
* **Modular Clean Architecture:** Structured codebase cleanly separated into semantic HTML, custom Tailwind CSS, and vanilla JavaScript without heavy external libraries.

---

## 🛠️ Tech Stack

* **Markup & Structure:** HTML5
* **Styling & Design:** [Tailwind CSS](https://tailwindcss.com/) (CDN) + Custom CSS
* **Scripting & Logic:** Vanilla JavaScript (ES6+)
* **Icons:** [Lucide Icons](https://lucide.dev/) + Inline Scalable Brand Vectors (GitHub & LinkedIn)
* **Typography:** Google Fonts (Plus Jakarta Sans & IBM Plex Sans Arabic)

---

## 📂 Project Structure

```plaintext
├── index.html       # Core page layout, semantic tags, and section scaffolding
├── style.css        # Custom styles, theme rules, and mobile-specific fixes
├── script.js        # Multilingual logic, category filters, theme management, and animations
└── README.md        # Project documentation
