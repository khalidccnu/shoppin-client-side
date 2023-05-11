import React from "react";
import { useLoaderData } from "react-router-dom";
import HomeBanner from "../components/HomeBanner.jsx";
import FeaturedProducts from "../components/FeaturedProducts.jsx";
import WhatShoppinOffers from "../components/WhatShoppinOffers.jsx";
import TrendingProduct from "../components/TrendingProduct.jsx";

const Home = () => {
  const featured = useLoaderData();

  return (
    <>
      <HomeBanner />
      <FeaturedProducts featured={featured} />
      <WhatShoppinOffers />
      <TrendingProduct />
    </>
  );
};

export default Home;
