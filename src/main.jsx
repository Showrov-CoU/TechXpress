import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import Root from "./Root/Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import AddProduct from "./Pages/AddProduct";
import MyCart from "./Pages/MyCart";
import Contact from "./Pages/Contact";

import ProductDetails from "./Components/ProductDetails";
import Products from "./Components/Products";
import AuthProvider from "./AuthProvider/AuthProvider";
import Login from "./Components/Login";
import Register from "./Components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/product/:brandName",
        element: <Products></Products>,
        // loader: ({ params }) =>
        //   fetch(`http://localhost:3000/product/${params.brandName}`),
      },
      {
        path: "/productdetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/productdetails/${params.id}`),
      },

      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
        loader: () => fetch("http://localhost:3000/mycart"),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
