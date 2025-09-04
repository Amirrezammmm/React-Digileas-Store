import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/ImageSlider.css'

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  const images = [
    "https://api.digileas.com/attachments/admin/sliders/browser/6f3875b6f356cff40bf4f00a6992b67d.webp",
    "https://api.digileas.com/attachments/admin/sliders/browser/db1f7a65cf6469a22aa3365aafe30d24.webp",
    "https://api.digileas.com/attachments/admin/sliders/browser/27c57f26d06ef307ad3091c7e6456846.webp",
    "https://api.digileas.com/attachments/admin/sliders/browser/8cca99217e7772bfca0bf21779f5a9ab.webp",
    "https://api.digileas.com/attachments/admin/sliders/browser/ffe61278954e1144e420e972b3eb6c46.webp"
  ];

  return (
    <div className="slider_container" >
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img 
              className="slider_image"
              src={src}
              alt={`slide-${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
