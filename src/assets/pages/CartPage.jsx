import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const {
    cart, handleRemove,
    discountCode, setDiscountCode,
    discount, applyDiscount,
    subtotal, total
  } = useContext(CartContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 سبد خرید شما</h2>
      
      {cart.length === 0 ? (
        <p>سبد خرید خالی است</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}>
              <img src={item.image.url} alt={item.name} width={60} style={{ marginRight: "10px" }} />
              <span>{item.name}</span>
              <span style={{ margin: "0 10px" }}>تعداد: {item.quantity}</span>
              <span>قیمت: {item.price.total * item.quantity} تومان</span>
              <button 
                onClick={() => handleRemove(item.id)} 
                style={{ marginLeft: "15px", background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}
              >
                حذف
              </button>
            </div>
          ))}

          <h3>جمع کل: {subtotal} تومان</h3>

          <div style={{ marginTop: "20px" }}>
            <input 
              type="text" 
              placeholder="کد تخفیف" 
              value={discountCode} 
              onChange={(e) => setDiscountCode(e.target.value)}
              style={{ padding: "5px", marginRight: "10px" }}
            />
            <button onClick={applyDiscount} style={{ padding: "5px 10px" }}>اعمال</button>
          </div>

          {discount > 0 && (
            <p style={{ color: "green" }}>✅ کد تخفیف اعمال شد: {discount * 100}%</p>
          )}

          <h2>مبلغ نهایی: {total} تومان</h2>
        </div>
      )}
    </div>
  );
}
