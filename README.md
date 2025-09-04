# React Digileas Store

A modern e-commerce storefront built with **React**.  
This project started as a learning and experimentation ground and is evolving into a full-featured online store.  
Currently it supports browsing laptop categories, viewing products in a modal, and managing a shopping cart with persistent storage.  
Future iterations will add invoices, a complete checkout flow, an admin dashboard, and a customer account panel.

---

## 🌟 Features (Current)

- **React + React Router v6** for clean routing and navigation
- **Context API** for centralized cart state and localStorage persistence
- **Product browsing** by category (HP, Lenovo, Asus, Acer)
- **Responsive header** with search box, navigation menu, and live cart counter
- **Image slider** on the homepage (powered by [react-slick](https://react-slick.neostack.com))
- **Product modal** for quick view of details, price formatting with locale support
- **Cart management** (add/remove, quantity updates, discount code example)

---

## 🔮 Roadmap (Planned)

- Complete **checkout & invoice** workflow  
- **Admin panel** for product CRUD, inventory, and order management  
- **User authentication** and **account panel** (order history, saved addresses)  
- Search and filter system with query params  
- Migration path to **TypeScript** for stronger type safety  
- Integration with a backend API or headless CMS  
- Improved SEO and accessibility

---

## 📂 Project Structure
src/
├─ assets/
│ ├─ components/ # UI components (Header, Footer, Products, ProductModal, ImageSlider, Tabs ...)
│ ├─ context/ # React Context (CartContext)
│ ├─ pages/ # Page-level views (HomePage, HP, Lenovo, Acer, CartPage ...)
│ ├─ css/ # Stylesheets (CSS Modules / plain CSS)
│ └─ images/ # Static assets
├─ App.jsx # Application root with routing
├─ index.jsx # React entry point
└─ ...


## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 16  
- npm or yarn

### Installation & Run
```bash
git clone https://github.com/USERNAME/react-digileas-store.git
cd react-digileas-store
npm install
npm start
```

Open http://localhost:3000 in your browser to view the app.

### 🧩 Tech Stack

- **React 18** – UI Library

- **React Router v6** – Client-side routing

- **React Context API** – Global state management (cart)

- **react-slick** – Responsive carousel/slider

- **Intl.NumberFormat** – Locale-aware price formatting

- **localStorage** – Persistent cart between sessions

### ⚙️ Development Notes

**CartContext** handles all shopping cart logic: add, remove, quantity, discounts.

Prices are displayed using **Iranian locale (fa-IR)** formatting for better UX.

Components are intentionally split into **UI (presentational)** and **stateful (context)** parts to allow scaling.

The project is currently written in **JavaScript,** but the structure is **TypeScript-friendly** for an easy future migration.

### 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo, open issues, or submit pull requests.

### 📄 License

This project is released under the MIT License.
You are free to use, modify, and distribute this code for educational or commercial purposes with proper attribution.

### ✏️ Author

Amir Reza – Frontend developer & React enthusiast
https://github.com/Amirrezammmm


### ⚠️ Disclaimer: This project is still under heavy development.
### Expect breaking changes and unfinished features in the current stage.
