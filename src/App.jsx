import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { filterProducts } from "./utils/index.js";
import Root from "./routes/Root.jsx";
import Home from "./routes/Home.jsx";
import Wishlist from "./routes/Wishlist.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: filterProducts,
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
