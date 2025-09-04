import { useState, useEffect } from "react";
import Products from "../components/Products";
import ProductModal from "../components/ProductModal";

export default function Lenovo() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch("https://api.digileas.com/general/products?category=%D9%84%D9%86%D9%88%D9%88")
      .then((res) => res.json())
      .then((productsData) => {
        const list = productsData?.data?.data;
        console.log("products list:", list);
        if (Array.isArray(list)) {
          setProducts(list);
        } else {
          setProducts([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("خطا در گرفتن محصولات:", err);
        setLoading(false);
      });
  }, []);

  const handleModalOpen = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setDetails(null); // پاک می‌کنیم تا قبل از لودینگ چیزی نشون نده

    // گرفتن جزئیات محصول بر اساس slug
    fetch(`https://api.digileas.com/general/product/${product.slug}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data?.data || {});
      })
      .catch((err) => {
        console.error("خطا در گرفتن جزئیات:", err);
      });
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
    setDetails(null);
  };

  return (
    <>
      <Products
        products={products}
        loading={loading}
        onProductClick={handleModalOpen}
      />
      {isModalOpen && (
        <ProductModal
          product={selectedProduct}
          details={details}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
