import React from "react";
import { useLoaderData } from "react-router-dom";
import HomeBanner from "../components/HomeBanner.jsx";
import FeaturedProducts from "../components/FeaturedProducts.jsx";

const Home = () => {
  const featured = useLoaderData();

  return (
    <>
      <HomeBanner />
      <FeaturedProducts featured={featured} />
    </>
  );
};

export default Home;
