import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Context from "./context/Context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>
);
