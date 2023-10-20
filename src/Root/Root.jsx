import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import "../App.css";
import { Toaster } from "react-hot-toast";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div className="tracking-wider leading-relaxed text-neutralDGrey dark:bg-slate-500">
      <Navbar></Navbar>
      <div className="">
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
