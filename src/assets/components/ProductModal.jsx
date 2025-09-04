import React from "react";
import "../css/Modal.css";

export default function ProductModal({ product, details, onClose }) {
  if (!product) return null;

  function formatPrice(number) {
    return new Intl.NumberFormat("fa-IR").format(Number(number));
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <div className="right">
          <img
            src={details?.images?.[0]?.url || product?.image?.url}
            alt={product?.name}
            className="modal-img"
          />
        </div>

        <div className="left">
          <h2 className="pname">{details?.name || product?.name}</h2>
          {console.log(details)}
          <p>{details?.description ?? "بدون توضیحات"}</p>

          {product?.price?.total ? (
            <p>قیمت: {formatPrice(product.price.total)} تومان</p>
          ) : (
            <p>ناموجود</p>
          )}
        </div>
      </div>
    </div>
  );
}
