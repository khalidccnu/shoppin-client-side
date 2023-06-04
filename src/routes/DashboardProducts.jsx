import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DashboardProduct from "../components/DashboardProduct.jsx";
import Pagination from "../components/Pagination.jsx";

const DashboardProducts = () => {
  const [_, { totalProducts }] = useLoaderData();
  const [currentProducts, setCurrentProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(20);
  const [pageCount] = useState(Math.ceil(totalProducts / productsPerPage));

  useEffect(
    (_) => {
      fetch(
        `https://shoppin.webie.link/products?page=${currentPage}&limit=${productsPerPage}`
      )
        .then((response) => response.json())
        .then((result) => setCurrentProducts(result));
    },
    [currentPage]
  );

  return (
    <div className="p-4">
      <div className="overflow-x-auto border rounded-lg">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Shipping</th>
              <th>Quantity</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => (
              <DashboardProduct key={product["_id"]} product={product} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination setCurrentPage={setCurrentPage} pageCount={pageCount} />
    </div>
  );
};

export default DashboardProducts;
