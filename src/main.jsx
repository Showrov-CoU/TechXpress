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
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ErrorPage from "./Components/ErrorPage";
import UpdateProduct from "./Pages/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        //   fetch(`https://tech-xpress-server-h0fi5pzmo-ashikur-rahman-showrovs-projects.vercel.app/product/${params.brandName}`),
      },
      {
        path: "/productdetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tech-xpress-server-h0fi5pzmo-ashikur-rahman-showrovs-projects.vercel.app/productdetails/${params.id}`
          ),
      },

      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`https://tech-xpress-server-h0fi5pzmo-ashikur-rahman-showrovs-projects.vercel.app/mycart/${params.email}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tech-xpress-server-h0fi5pzmo-ashikur-rahman-showrovs-projects.vercel.app/productdetails/${params.id}`
          ),
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
