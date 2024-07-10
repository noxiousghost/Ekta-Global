import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sponsor.css";
function Sponsor() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    pauseOnFocus: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className="carousel-item">
            <img
              src={`../../public/sponsor/sponsor_logo_${(i % 5) + 1}.png`}
              alt={`Sponsor ${i + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Sponsor;