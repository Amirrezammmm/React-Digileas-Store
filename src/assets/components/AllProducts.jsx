import { useState, useEffect } from "react";
import Products from "../components/Products";
import ProductModal from "../components/ProductModal";
import '../css/AllProducts.css'

export default function  AllProducts(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct,setSelectedProduct] = useState(null);
    const [isModalOpen,setIsModalOpen] = useState(false); 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;


    useEffect(() => {
        fetch("https://api.digileas.com/general/products?category=%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE")
        .then((res) => res.json())
        .then((data) => {
            const list = data?.data?.data;
            if (Array.isArray(list)) {
            setProducts(list);
            } else {
            console.error("ساختار داده اشتباهه");
            setProducts([]);
            }
            setLoading(false);
        })
        .catch((err) => {
            console.error("خطا:", err);
            setLoading(false);
        });
    }, []);


    
    const handleModalOpen = (product) =>{
        setSelectedProduct(product);
        setIsModalOpen(true);
    };
    
    const handleCloseModal = () =>{
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    const handlePageChange = (page) => {
    setCurrentPage(page);
    };


    const toPersianNumber = (num) => num.toLocaleString("fa-IR");

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(products.length / itemsPerPage);
    
    return(
        <>
            <div className="container">
                <h2>لپ تاب ها</h2>
                <Products 
                    products={currentProducts} 
                    loading={loading} 
                    onProductClick={handleModalOpen}
                />
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button 
                            key={index} 
                            onClick={() => handlePageChange(index + 1)}
                            className={currentPage === index + 1 ? "active" : "unActive"}
                        >
                            {toPersianNumber(index + 1)}
                        </button>
                    ))}
                </div>
                {isModalOpen &&
                    <ProductModal 
                        product={selectedProduct} 
                        onClose={handleCloseModal}
                    />
                }
            </div>

        </>
    );
}