import React from "react";
import { useLoaderData } from "react-router-dom";
import HomeBanner from "../components/HomeBanner.jsx";
import FeaturedProducts from "../components/FeaturedProducts.jsx";
import WhatShoppinOffers from "../components/WhatShoppinOffers.jsx";
import TrendingProduct from "../components/TrendingProduct.jsx";
import DiscountProducts from "../components/DiscountProducts.jsx";

const Home = () => {
  const [featured, discount] = useLoaderData();

  return (
    <>
      <HomeBanner />
      <FeaturedProducts featured={featured} />
      <WhatShoppinOffers />
      <TrendingProduct />
      <DiscountProducts discount={discount} />
    </>
  );
};

export default Home;
