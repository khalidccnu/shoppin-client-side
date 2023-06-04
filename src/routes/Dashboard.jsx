import React, { useContext, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaDotCircle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider.jsx";

const Dashboard = () => {
  const { userInfo } = useContext(AuthContext);

  useEffect((_) => {
    sessionStorage.setItem("_vu", JSON.stringify(true));
  }, []);

  return (
    <section className="py-10">
      <div className="container">
        <div>
          <div>
            <h5 className="font-semibold">Hello,</h5>
            <h3 className="font-bold text-2xl">
              {userInfo.displayName || "Anonymous"}
            </h3>
          </div>
          <div className="mt-5 border-b-2 border-dotted"></div>
          <div className="drawer drawer-mobile">
            <input type="checkbox" className="drawer-toggle" id="db-drawer" />
            <div className="drawer-content">
              <div className="mt-4 lg:mt-0 text-end">
                <label
                  htmlFor="db-drawer"
                  className="lg:hidden drawer-button btn btn-xs btn-outline"
                >
                  <FaDotCircle />
                </label>
              </div>
              <Outlet />
            </div>
            <div className="drawer-side">
              <label htmlFor="db-drawer" className="drawer-overlay"></label>
              <ul className="menu bg-white w-80 p-4 lg:border-r-2 lg:border-dotted">
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? "text-pink-600" : ""
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/products"
                    className={({ isActive }) =>
                      isActive ? "text-pink-600" : ""
                    }
                  >
                    Products
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
