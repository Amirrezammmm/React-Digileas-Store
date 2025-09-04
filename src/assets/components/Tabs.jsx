import React from "react";
import '../css/Tabs.css'
import { Link } from "react-router-dom";
import hp from '../images/hp.png'
import acer from '../images/Acer.png'
import asus from '../images/asus.png'
import lenovo from '../images/lenovo.png'

export default function Tabs(){

    return (
        <div className="container">
            <h2>دسته بندی محصولات</h2>
            <div className="tabs">
                <Link className="tab" to="/hp">
                    <img className="hp" src={hp} alt="hp" />
                </Link>
                <Link className="tab" to="/acer">
                    <img className="acer" src={acer} alt="acer" />
                </Link>
                <Link className="tab" to="/asus">
                    <img className="asus" src={asus} alt="asus" />
                </Link>
                <Link className="tab" to="/lenovo">
                    <img className="lenovo" src={lenovo} alt="lenovo" />
                </Link>
            </div>
        </div>
    );
}