import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import "../App.css";
import { Toaster } from "react-hot-toast";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div className="tracking-wider leading-relaxed text-neutralDGrey dark:text-white">
      <div className="fixed top-0 left-0 right-0 z-10 ">
        <Navbar></Navbar>
      </div>
      <div className="mt-16 md:mt-20">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Root;
