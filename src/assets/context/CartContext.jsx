import React, { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const handleRemove = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  };


  const addToCart = (product) => {
    let existingProductIndex = cart.findIndex(item => item.id === product.id);
    let newCart = [...cart];

    if (existingProductIndex >= 0) {
      newCart[existingProductIndex].quantity += 1;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }

    setCart(newCart);
  };


  const applyDiscount = () => {
    if (discountCode === "OFF10") {
      setDiscount(0.1); 
    } else if (discountCode === "OFF20") {
      setDiscount(0.2); 
    } else {
      setDiscount(0);
      alert("کد تخفیف نامعتبر است!");
    }
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price.total * item.quantity, 0);
  const total = subtotal - subtotal * discount;

  return (
    <CartContext.Provider value={{
      cart, setCart,
      discountCode, setDiscountCode,
      discount, applyDiscount,
      addToCart, handleRemove,
      subtotal, total,cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
}
