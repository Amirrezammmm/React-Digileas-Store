import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './assets/components/Layout';
import HomePage from './assets/pages/HomePage';
import HP from './assets/pages/HP';
import Acer from './assets/pages/Acer';
import Asus from './assets/pages/Asus';
import Lenovo from './assets/pages/Lenovo';
import CartPage from './assets/pages/CartPage';
import Categories from './assets/components/Categories';
import CategoryTemplate from './assets/components/CategoryTemplate'
import { CartProvider } from "./assets/context/CartContext";
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="Categories" element={<Categories />} />
            <Route path="category/:categoryName" element={<CategoryTemplate />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
