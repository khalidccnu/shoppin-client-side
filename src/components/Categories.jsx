import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Category from "./Category.jsx";
import imgMenSneaker from "../assets/men-sneaker.jpg";
import imgMenPant from "../assets/men-pant.jpg";
import imgMenBoot from "../assets/men-boot.jpg";
import imgBag from "../assets/bag.jpg";
import imgCap from "../assets/cap.jpg";
import imgEarphone from "../assets/earphone.jpg";
import imgBottle from "../assets/bottle.jpg";

const Categories = ({ categories }) => {
  const categoriesImg = [
    imgMenSneaker,
    imgMenPant,
    imgMenBoot,
    imgBag,
    imgCap,
    imgEarphone,
    imgBottle,
  ];

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
          {categories.map((categoryName, idx) => (
            <SwiperSlide key={idx} className="group">
              <Category
                key={idx}
                category={{ name: categoryName, img: categoriesImg[idx] }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;
