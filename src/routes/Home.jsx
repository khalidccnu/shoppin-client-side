import React from "react";
import { useLoaderData } from "react-router-dom";
import HomeBanner from "../components/HomeBanner.jsx";
import FeaturedProducts from "../components/FeaturedProducts.jsx";
import WhatShoppinOffers from "../components/WhatShoppinOffers.jsx";

const Home = () => {
  const featured = useLoaderData();

  return (
    <>
      <HomeBanner />
      <FeaturedProducts featured={featured} />
      <WhatShoppinOffers />
    </>
  );
};

export default Home;
