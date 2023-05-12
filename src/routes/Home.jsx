import React from "react";
import { useLoaderData } from "react-router-dom";
import HomeBanner from "../components/HomeBanner.jsx";
import FeaturedProducts from "../components/FeaturedProducts.jsx";
import WhatShoppinOffers from "../components/WhatShoppinOffers.jsx";
import TrendingProduct from "../components/TrendingProduct.jsx";
import DiscountProducts from "../components/DiscountProducts.jsx";
import Categories from "../components/Categories.jsx";

const Home = () => {
  const [featured, discount, categories] = useLoaderData();

  return (
    <>
      <HomeBanner />
      <FeaturedProducts featured={featured} />
      <WhatShoppinOffers />
      <TrendingProduct />
      <DiscountProducts discount={discount} />
      <Categories categories={categories} />
    </>
  );
};

export default Home;
