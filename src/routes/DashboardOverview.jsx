import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider.jsx";

const DashboardOverview = () => {
  const { userInfo } = useContext(AuthContext);
  const [{ totalProducts }, { totalOrders }] = useLoaderData();
  const [orderProducts, setOrderProducts] = useState(0);

  useEffect((_) => {
    fetch(`https://shoppin.webie.link/orders?count=true&id=${userInfo.uid}`)
      .then((response) => response.json())
      .then((result) => setOrderProducts(result));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-10 p-4 text-center">
      {userInfo.isAdmin ? (
        <div className="card bg-sky-50">
          <div className="card-body">
            <h2 className="card-title justify-center">Products</h2>
            <p>{totalProducts}</p>
          </div>
        </div>
      ) : null}
      <div className="card bg-sky-50">
        <div className="card-body">
          <h2 className="card-title justify-center">Orders</h2>
          <p>{userInfo.isAdmin ? totalOrders : orderProducts.totalOrders}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
