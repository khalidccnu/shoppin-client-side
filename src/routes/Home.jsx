import React, { useEffect } from "react";
import AOS from "aos";
import HomeBanner from "../components/HomeBanner.jsx";
import FeaturedProducts from "../components/FeaturedProducts.jsx";
import Newsletter from "../components/Newsletter.jsx";
import WhatShoppinOffers from "../components/WhatShoppinOffers.jsx";
import TrendingProduct from "../components/TrendingProduct.jsx";
import DiscountProducts from "../components/DiscountProducts.jsx";
import Categories from "../components/Categories.jsx";

const Home = () => {
  useEffect((_) => {
    AOS.init({ delay: 150, duration: 3000 });
  }, []);

  return (
    <>
      <HomeBanner />
      <FeaturedProducts />
      <Newsletter />
      <WhatShoppinOffers />
      <TrendingProduct />
      <DiscountProducts />
      <Categories />
    </>
  );
};

export default Home;
