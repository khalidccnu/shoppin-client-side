import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { filterProducts } from "./utils/index.js";
import Root from "./routes/Root.jsx";
import Home from "./routes/Home.jsx";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
