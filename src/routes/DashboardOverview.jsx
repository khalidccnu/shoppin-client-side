import React from "react";
import { useLoaderData } from "react-router-dom";

const DashboardOverview = () => {
  const [{ totalProducts }, { totalOrders }] = useLoaderData();

  return (
    <div className="grid grid-cols-2 gap-10 p-4 text-center">
      <div className="card bg-sky-50">
        <div className="card-body">
          <h2 className="card-title justify-center">Products</h2>
          <p>{totalProducts}</p>
        </div>
      </div>
      <div className="card bg-sky-50">
        <div className="card-body">
          <h2 className="card-title justify-center">Orders</h2>
          <p>{totalOrders}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
