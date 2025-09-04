  import { useParams } from "react-router-dom";
  import { useEffect, useState, useRef  } from "react";
  import Products from "../components/Products";
  import ProductModal from "../components/ProductModal";
  import ReactPaginate from "react-paginate";
  import "../css/CategoryTemplate.css";

  export default function CategoryTemplate() {
    const { categoryName } = useParams(); 
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 18;
    const productsRef = useRef(null);

    const apiMap = {
      Mobile: [
        "https://api.digileas.com/general/products?category=%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84&page=1",
        "https://api.digileas.com/general/products?category=%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84&page=2",
        "https://api.digileas.com/general/products?category=%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84&page=3",
        "https://api.digileas.com/general/products?category=%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84&page=4",
        "https://api.digileas.com/general/products?category=%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84&page=5",
      ],
      Laptop: [
        "https://api.digileas.com/general/products?category=%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE&page=1",
      ],
      Accessory:[
        "https://api.digileas.com/general/products?category=%D8%A7%DA%A9%D8%B3%D8%B3%D9%88%D8%B1%DB%8C-%D9%87%D8%A7"
      ],
      Gadget:[
        "https://api.digileas.com/general/products?category=%DA%AF%D8%AC%D8%AA-%D9%87%D8%A7%DB%8C-%D9%87%D9%88%D8%B4%D9%85%D9%86%D8%AF"
      ],
      Cooler:[
        "https://api.digileas.com/general/products?category=%DA%A9%D9%88%D9%84%D8%B1"
      ],
      phoneCase:[
        "https://api.digileas.com/general/products?category=%D9%82%D8%A7%D8%A8-%DA%AF%D9%88%D8%B4%DB%8C&page=1",
        "https://api.digileas.com/general/products?category=%D9%82%D8%A7%D8%A8-%DA%AF%D9%88%D8%B4%DB%8C&page=2",
        "https://api.digileas.com/general/products?category=%D9%82%D8%A7%D8%A8-%DA%AF%D9%88%D8%B4%DB%8C&page=3",
        "https://api.digileas.com/general/products?category=%D9%82%D8%A7%D8%A8-%DA%AF%D9%88%D8%B4%DB%8C&page=4",
      ]
    };


    useEffect(() => {
      const fetchAllPages = async () => {
        if (!apiMap[categoryName]) return;

        try {
          setLoading(true);

          const results = await Promise.all(
            apiMap[categoryName].map(url => fetch(url).then(res => res.json()))
          );

          const allData = results.flatMap(json => json?.data?.data || []);
          console.log(allData);
          setData(allData);

        } catch (error) {
          console.error("خطا در گرفتن داده:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchAllPages();
    }, [categoryName]);


    const handleModalOpen = (product) => {
      setSelectedProduct(product);
      setIsModalOpen(true);
    };
    
    const handleCloseModal = () => {
      setSelectedProduct(null);
      setIsModalOpen(false);
    };

    const toPersianNumber = (num) => num.toLocaleString("fa-IR");

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const subCategoryMap = {
      Mobile:[
        { name: "RefurbishedPhone", imageUrl: "../images/logo.webp" },
        { name: "Samsung", imageUrl: "../images/logo.webp" },
        { name: "Apple", imageUrl: "../images/apple.webp" },
      ],
      Laptop:[
        { name:"Hp", imageUrl:""},
        { name:"Acer", imageUrl:""},
        { name:"Asus", imageUrl:""},
        { name:"Lenovo", imageUrl:""},
      ],
      Accessory:[
        { name:"AppleWatch", imageUrl:""},
        { name:"AppleHeadPhone", imageUrl:""},
        { name:"SumsungHeadPhone", imageUrl:""},
        { name:"SumsungHeadPhone", imageUrl:""},
      ]
    };
    let subItems = null;

    if(categoryName==="Mobile"){
      subItems = subCategoryMap["Mobile"].map((item, index)=>(
        <div key={index} className="subCategory">
            <img src={item.imageUrl} alt={item.name} />
        </div>
      ))
    }
    console.log(subItems);
    return (
      <div className="container" ref={productsRef}>
        <h2>{categoryName}</h2>
        
        <h2 className="cat">دسته بندی محصولات</h2>
        <div className="subCatContainer">
          {subItems}
        </div>

        <Products 
          products={currentProducts} 
          loading={loading} 
          onProductClick={handleModalOpen}
        />

        <ReactPaginate
          previousLabel={<span className="arrow">&#x2192;</span>} 
          nextLabel={<span className="arrow">&#x2190;</span>} 
          breakLabel={"..."}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={(selected) => {
                    setCurrentPage(selected.selected + 1);
                    productsRef.current.scrollIntoView({ behavior: "smooth", top: 0 });
                  }}
          forcePage={currentPage - 1}
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          renderOnZeroPageCount={null}
          pageLabelBuilder={(page) => toPersianNumber(page)}
        />

        {isModalOpen &&
          <ProductModal 
            product={selectedProduct} 
            onClose={handleCloseModal}
          />
        }
      </div>
    );
  }
