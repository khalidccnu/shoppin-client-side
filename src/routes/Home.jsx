import React from "react";
import HomeBanner from "../components/HomeBanner.jsx";
import FeaturedProducts from "../components/FeaturedProducts.jsx";
import WhatShoppinOffers from "../components/WhatShoppinOffers.jsx";
import TrendingProduct from "../components/TrendingProduct.jsx";
import DiscountProducts from "../components/DiscountProducts.jsx";
import Categories from "../components/Categories.jsx";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <FeaturedProducts />
      <WhatShoppinOffers />
      <TrendingProduct />
      <DiscountProducts />
      <Categories />
    </>
  );
};

export default Home;
