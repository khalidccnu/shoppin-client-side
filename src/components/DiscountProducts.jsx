import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper";
import Product from "./Product.jsx";

const DiscountProducts = ({ discount }) => {
  return (
    <section className="py-10 text-center">
      <div className="container">
        <h3 className="font-bold text-2xl mb-10">Discount Products</h3>
        <Swiper
          className="max-w-4xl mx-auto"
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          autoplay={{ pauseOnMouseEnter: true, disableOnInteraction: false }}
          slidesPerView="1"
          spaceBetween="25"
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {discount.map((product) => (
            <SwiperSlide
              key={product["_id"]}
              className="group card card-compact bg-sky-50 hover:bg-sky-200/60 h-auto transition-[background-color] duration-500"
            >
              <Product key={product["_id"]} product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DiscountProducts;
