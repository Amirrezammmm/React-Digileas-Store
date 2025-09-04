import { useState, useEffect } from "react";
import Products from "../components/Products";
import ProductModal from "../components/ProductModal";

export default function Acer(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct,setSelectedProduct] = useState(null);
    const [isModalOpen,setIsModalOpen] = useState(false); 
    const [details,setDetails] = useState([]);



    useEffect(() => {
    const fetchProducts = fetch("https://api.digileas.com/general/products?category=%D8%A7%DB%8C%D8%B3%D8%B1")
        .then((res) => res.json());

    const fetchDetails = fetch("https://api.digileas.com/general/product/-%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D8%A7%D8%B3%D8%AA%D9%88%DA%A9-acer-aspire-3-a315-55g-%D9%85%D8%AF%D9%84-core-i5-%D9%86%D8%B3%D9%84-10")
        .then((res) => res.json());

    Promise.all([fetchProducts, fetchDetails])
        .then(([productsData, categoriesData]) => {
        const list = productsData?.data?.data;
        if (Array.isArray(list)) {
            setProducts(list);
        } else {
            console.error("ساختار داده محصولات اشتباهه");
            setProducts([]);
        }

        setDetails(categoriesData?.data || []);
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
    
    return(
        <>
            <Products 
                products={products} 
                loading={loading} 
                onProductClick={handleModalOpen}
            />
            {isModalOpen &&
                <ProductModal 
                    product={selectedProduct}
                    details = {details}
                    onClose={handleCloseModal}
                />
            }
        </>
    );
}

    // useEffect(() => {
    //     fetch("https://api.digileas.com/general/products?category=%D8%A7%DB%8C%D8%B3%D8%B1")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         const list = data?.data?.data;
    //         if (Array.isArray(list)) {
    //         setProducts(list);
    //         } else {
    //         console.error("ساختار داده اشتباهه");
    //         setProducts([]);
    //         }
    //         setLoading(false);
    //     })
    //     .catch((err) => {
    //         console.error("خطا:", err);
    //         setLoading(false);
    //     });
    // }, []);