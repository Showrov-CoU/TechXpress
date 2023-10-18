import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import "../App.css";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
