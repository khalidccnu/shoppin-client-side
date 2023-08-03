import React, { useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { featuredProducts } from "../utils/index.js";
import Product from "./Product.jsx";

const FeaturedProducts = () => {
  const [isLoading, setLoading] = useState(true);
  const [featured, setFeatured] = useState([]);

  useEffect((_) => {
    (async (_) => {
      const products = await featuredProducts();
      setFeatured(products);
      setLoading(false);
    })();
  }, []);

  return (
    <section className="py-10 text-center">
      <div className="container">
        <h3 className="font-bold text-2xl mb-10">Featured Products</h3>
        {!isLoading ? (
          <Swiper
            className="pb-14"
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ pauseOnMouseEnter: true, disableOnInteraction: false }}
            slidesPerView="1"
            spaceBetween="50"
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {featured.map((product) => (
              <SwiperSlide
                key={product["_id"]}
                className="group card card-compact bg-sky-50 hover:bg-sky-200/60 h-auto transition-[background-color] duration-500"
              >
                <Product key={product["_id"]} product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Rings
            width="50"
            height="50"
            color="#35bef0"
            wrapperClass="justify-center"
          />
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
