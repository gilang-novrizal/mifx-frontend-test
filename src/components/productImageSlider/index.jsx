import "./productImageSlider.scss";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import { useState } from "react";

const ProductImagesSlider = ({
  products,
  handleChangeProduct,
  activeIndex,
}) => {
  const [activeThumb, setActiveThumb] = useState();
  console.log(activeIndex);
  return (
    <div className="product-images-slider-container">
      <Swiper
        onSlideChange={(swiper) => handleChangeProduct(swiper.activeIndex)}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: activeThumb }}
        className="product-images-slider"
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.image} alt="product images" />
            <p>
              {activeIndex + 1} / {products.length}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        activeSlideKey={1}
        onClick={setActiveThumb}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className="product-images-slider-thumbs "
      >
        {products.map((item, index) => (
          <SwiperSlide
            className={activeIndex && "swiper-slide-thumb-active"}
            key={index}
          >
            <div className="product-images-slider-thumbs-wrapper">
              <img src={item.image} alt="product images" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

ProductImagesSlider.propTypes = {
  products: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  handleChangeProduct: PropTypes.func.isRequired,
};

export default ProductImagesSlider;
