import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLoader from "./loaders/HomeLoader.js";
import ShopLoader from "./loaders/ShopLoader.js";
import WishlistLoader from "./loaders/WishlistLoader.js";
import ViewProductLoader from "./loaders/ViewProductLoader.js";
import CartLoader from "./loaders/CartLoader.js";
import DashboardOverviewLoader from "./loaders/DashboardOverviewLoader.js";
import AuthProvider from "./providers/AuthProvider.jsx";
import AppStatus from "./components/AppStatus.jsx";
import LogOffRoute from "./components/LogOffRoute.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import Root from "./routes/Root.jsx";
import Error from "./routes/Error.jsx";
import Home from "./routes/Home.jsx";
import Shop from "./routes/Shop.jsx";
import Contact from "./routes/Contact.jsx";
import Login from "./routes/Login.jsx";
import Signup from "./routes/Signup.jsx";
import Wishlist from "./routes/Wishlist.jsx";
import ViewProduct from "./routes/ViewProduct.jsx";
import Cart from "./routes/Cart.jsx";
import Checkout from "./routes/Checkout.jsx";
import OrderComplete from "./routes/OrderComplete.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import DashboardOverview from "./routes/DashboardOverview.jsx";
import DashboardProducts from "./routes/DashboardProducts.jsx";
import AddProduct from "./routes/AddProduct.jsx";
import UpdateProduct from "./routes/UpdateProduct.jsx";
import DashboardOrderHistory from "./routes/DashboardOrderHistory.jsx";
import Settings from "./routes/Settings.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AppStatus>
          <AuthProvider>
            <Root />
          </AuthProvider>
        </AppStatus>
      ),
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "/shop",
          element: <Shop />,
          loader: ShopLoader,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: (
            <LogOffRoute>
              <Login />
            </LogOffRoute>
          ),
        },
        {
          path: "/signup",
          element: (
            <LogOffRoute>
              <Signup />
            </LogOffRoute>
          ),
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
          loader: WishlistLoader,
        },
        {
          path: "/shop/view-product/:id",
          element: <ViewProduct />,
          loader: ({ params }) => ViewProductLoader(params.id),
        },
        {
          path: "/cart",
          element: <Cart />,
          loader: CartLoader,
        },
        {
          path: "/checkout",
          element: <Checkout />,
          loader: CartLoader,
        },
        {
          path: "/order-complete",
          element: <OrderComplete />,
        },
        {
          path: "/dashboard",
          element: (
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          ),
          children: [
            {
              path: "/dashboard/overview",
              element: <DashboardOverview />,
              loader: DashboardOverviewLoader,
            },
            {
              path: "/dashboard/products",
              element: (
                <AdminRoute>
                  <DashboardProducts />
                </AdminRoute>
              ),
              loader: ShopLoader,
            },
            {
              path: "/dashboard/products/add",
              element: (
                <AdminRoute>
                  <AddProduct />
                </AdminRoute>
              ),
            },
            {
              path: "/dashboard/products/update/:id",
              element: (
                <AdminRoute>
                  <UpdateProduct />
                </AdminRoute>
              ),
              loader: ({ params }) => ViewProductLoader(params.id),
            },
            {
              path: "/dashboard/order-history",
              element: <DashboardOrderHistory />,
            },
          ],
        },
        {
          path: "/settings",
          element: (
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
