// import React, { useEffect, useState } from "react";
import '../css/Header.css'
import basket from'../images/basket.png'
import logo from '../images/logo.webp'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext"; 


export default function Header(){
    const { cartCount } = useContext(CartContext);

    // useEffect(() => {
    //     const updateCartCount = () => {
    //         const cart = JSON.parse(localStorage.getItem("cart")) || [];
    //         const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    //         setCartCount(totalItems);
    //     };

    //     updateCartCount();

    //     // گوش دادن به تغییرات localStorage
    //     window.addEventListener("storage", updateCartCount);
    //     return () => window.removeEventListener("storage", updateCartCount);
    // }, []);

    return(
        <header className="Header">
            <div className="h_container">
                <div className="logo">
                    <Link to="/" className="logo">
                        <img src={logo} alt="لوگو" />
                    </Link>
                </div>
                <nav>
                    <form className="search">
                        <button disabled className='searchIcon' aria-label='جستجو'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <input id='search' name='search' aria-label='Search' type="text" className="searchBar" placeholder='جستجوی محصول...'/>
                    </form>
                    <div className="menu">
                        <ul>
                            <li className="menu_item"><a href="">خانه</a></li>
                            <li className="menu_item"><a href="">لباس اورجینال</a></li>
                            <li className="menu_item"><a href="">تکنولوژی</a></li>
                            <li className="menu_item"><a href="">لوازم جانبی</a></li>
                            <li className="menu_item"><a href="">جواهرات</a></li>
                            <li className="menu_item"><a href="">درباره ما</a></li>
                            <li className="menu_item"><a href="">تماس با ما</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="actions">
                    <button className="shop_basket">
                        <Link to="/cart">
                            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                            <img src={basket} alt="" />
                        </Link>
                    </button>
                    <button className="login">
                        ثبت نام | ورود
                    </button>
                </div>
            </div>
        </header>
    );
}