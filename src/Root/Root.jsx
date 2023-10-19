import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import "../App.css";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="tracking-wider leading-relaxed text-neutralDGrey">
      <Navbar></Navbar>
      <div className="mx-[5%]">
        <Outlet></Outlet>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Root;
