import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styles from "./CSS/Carousel.module.css";

const images = [
  { src: "https://static.wixstatic.com/media/b87f83_3984ca8f5d97472ebe0f78082100ec3a~mv2.jpeg/v1/fill/w_649,h_408,q_85,usm_0.66_1.00_0.01/b87f83_3984ca8f5d97472ebe0f78082100ec3a~mv2.jpeg", alt: "Acomodação 1" },
  { src: "https://static.wixstatic.com/media/b87f83_f07179544559435c967a19c767edd577~mv2.jpeg/v1/fill/w_649,h_408,q_85,usm_0.66_1.00_0.01/b87f83_f07179544559435c967a19c767edd577~mv2.jpeg", alt: "Acomodação 2" },
  { src: "https://static.wixstatic.com/media/b87f83_372231fb9efe40798c040f28d773e461~mv2.jpg/v1/fill/w_649,h_408,q_85,usm_0.66_1.00_0.01/b87f83_372231fb9efe40798c040f28d773e461~mv2.jpg", alt: "Acomodação 3" },
  { src: "https://static.wixstatic.com/media/b87f83_fd189730414e46d39003c5767b995e9b~mv2.jpg/v1/fill/w_649,h_408,q_85,usm_0.66_1.00_0.01/b87f83_fd189730414e46d39003c5767b995e9b~mv2.jpg", alt: "Acomodação 4" },
  { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/a2/24/e0/photo2jpg.jpg?w=1100&h=1100&s=1", alt: "Acomodação 5" },
  { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/a2/24/de/photo0jpg.jpg?w=1100&h=1100&s=1", alt: "Acomodação 6" }
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={Styles.carouselWrapper}> {/* Adicione um container para limitar o tamanho */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={Styles.carouselItem}>
            <img src={image.src} alt={image.alt} className={Styles.carouselImage} />
            <div className={Styles.overlay}>
              <span>SAIBA MAIS</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
  
};

export default Carousel;