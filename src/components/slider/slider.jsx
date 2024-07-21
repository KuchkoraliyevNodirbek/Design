import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

import Sliders from "../../assets/sliders.png";

export function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <div className="container pt-[30px]">
      <Slider {...settings}>
        <img src={Sliders} alt="" />
        <img src={Sliders} alt="" />
        <img src={Sliders} alt="" />
        <img src={Sliders} alt="" />
      </Slider>
    </div>
  );
}
