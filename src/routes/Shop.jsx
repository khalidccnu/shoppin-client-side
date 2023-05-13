import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaThLarge, FaList } from "react-icons/fa";
import ShopView from "../components/ShopView.jsx";

const Shop = () => {
  const [getGridView, products] = useLoaderData();
  const [isGridView, setGridView] = useState(getGridView);

  const handleGridView = (_) => {
    localStorage.setItem("shopView", JSON.stringify("grid"));
    setGridView(true);
  };

  const handleListView = (_) => {
    localStorage.setItem("shopView", JSON.stringify("list"));
    setGridView(false);
  };

  return (
    <section className="py-10">
      <div className="container">
        <div
          className={`hidden sm:flex justify-end mb-5 max-w-sm ${
            isGridView
              ? "sm:max-w-lg md:max-w-2xl lg:max-w-5xl"
              : "sm:max-w-2xl"
          } mx-auto`}
        >
          <div className="flex space-x-2">
            <span
              className={`p-1 cursor-pointer hover:text-pink-600${
                isGridView ? " border border-sky-200 pointer-events-none" : ""
              }`}
              onClick={handleGridView}
            >
              <FaThLarge />
            </span>
            <span
              className={`p-1 cursor-pointer hover:text-pink-600${
                !isGridView ? " border border-sky-200 pointer-events-none" : ""
              }`}
              onClick={handleListView}
            >
              <FaList />
            </span>
          </div>
        </div>
        <div
          className={`grid grid-cols-1 gap-5 max-w-sm ${
            isGridView
              ? "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:max-w-lg md:max-w-2xl lg:max-w-5xl"
              : "sm:max-w-2xl"
          } mx-auto`}
        >
          {products.map((product) => (
            <ShopView
              key={product["_id"]}
              isGridView={isGridView}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
