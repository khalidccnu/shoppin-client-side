import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLoader from "./loaders/HomeLoader.js";
import ShopLoader from "./loaders/ShopLoader.jsx";
import WishlistLoader from "./loaders/WishlistLoader.js";
import AppStatus from "./components/AppStatus.jsx";
import Root from "./routes/Root.jsx";
import Home from "./routes/Home.jsx";
import Shop from "./routes/Shop.jsx";
import Contact from "./routes/Contact.jsx";
import Wishlist from "./routes/Wishlist.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AppStatus>
          <Root />
        </AppStatus>
      ),
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
          path: "/wishlist",
          element: <Wishlist />,
          loader: WishlistLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
