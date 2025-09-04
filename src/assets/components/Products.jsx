import React, { useContext } from "react";
import '../css/Products.css'
import { CartContext } from "../context/CartContext"

export default function Products({ products, loading, onProductClick }) {
  const { cart, setCart } = useContext(CartContext);

  if (loading) {
    return <p className="loading">در حال بارگذاری...</p>;
  }

  if (!products || products.length === 0) {
    return <p>محصولی یافت نشد</p>;
  }

  function formatPrice(number) {
    return new Intl.NumberFormat('fa-IR').format(Number(number));
  }

  function addToCart(product) {
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex >= 0) {
      const updatedCart = cart.map((item, index) =>
        index === existingIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    alert("محصول به سبد خرید اضافه شد ✅");
  }

  return (
    <div className="Container">
      {products.map((product) => (
        <div
          className="Card"
          key={product.id}
          onClick={() => onProductClick(product)}
        >
          <img
            src={product?.image?.url}
            alt={product.title}
            className="Image"
          />
          <h4>{product?.name ?? "نامشخص"}</h4>
          <p>
            <span className={product.price.amount === 0 ? "outOfStock" : "normalPrice"}>
              {product.price.amount === 0 
                ? "ناموجود"
                : `${formatPrice(product.price.amount)} تومان`}
            </span>
          </p>
          <p className="offerPrice">
            {product.price.amount ===0 
              ? ""
              : `${formatPrice(product.price.total)} تومان`}
          </p>
          <button className={product.price.amount === 0 ? "buttonOff" : "buttonOn"}
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
          >
            افزودن به سبد خرید
          </button>
        </div>
      ))}
    </div>
  );
}
