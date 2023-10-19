import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-removebg.png";

const Navbar = () => {
  const links = (
    <>
      <li className="mr-5 text-base font-medium">
        <NavLink to="/">
          {({ isActive }) => (
            <span className={isActive ? "text-brandPrimary" : ""}>Home</span>
          )}
        </NavLink>
      </li>
      <li className="mr-5 text-base font-medium">
        <NavLink to="/addProduct">
          {({ isActive }) => (
            <span className={isActive ? "text-brandPrimary" : ""}>
              Add Product
            </span>
          )}
        </NavLink>
      </li>
      <li className="mr-5 text-base font-medium">
        <NavLink to="/myCart">
          {({ isActive }) => (
            <span className={isActive ? "text-brandPrimary" : ""}>My Cart</span>
          )}
        </NavLink>
      </li>
      <li className="mr-5 text-base font-medium">
        <NavLink to="/contact">
          {({ isActive }) => (
            <span className={isActive ? "text-brandPrimary" : ""}>
              Contact Us
            </span>
          )}
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar border-solid border-neutralDGrey bg-neutralSilver">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="">
          <img src={logo} alt="" className="w-48" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <button className="signbtn text-neutralSilver">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
