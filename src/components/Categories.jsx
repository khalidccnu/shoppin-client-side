import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Category from "./Category.jsx";

const Categories = ({ categories }) => {
  return (
    <section className="py-10 text-center">
      <div className="container">
        <h3 className="font-bold text-2xl mb-10">Categories</h3>
        <Swiper
          className="max-w-3xl px-5"
          slidesPerView="1"
          spaceBetween="50"
          breakpoints={{
            400: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category["_id"]} className="group">
              <Category key={category["_id"]} category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;
