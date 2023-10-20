import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-removebg.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import defaultUserPhoto from "../assets/user.png";
// import { CiDark, CiLight } from "react-icons/ci";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  // console.log(themeQuery);
  const option = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
  ];

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        break;
    }
  }, [theme, element]);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error.message));
  };

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
        {user ? (
          <p className="text-sm font-semibold text-color-secondary mr-1">
            {user.displayName}
          </p>
        ) : (
          ""
        )}
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full mr-1">
            <img src={user ? user?.photoURL : defaultUserPhoto} />
          </div>
        </label>
        {user ? (
          <button onClick={handleLogout} className="btns px-2">
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btns px-2">Login</button>
          </Link>
        )}
        {/* <Link to="/login">
          <button className="signbtn text-neutralSilver">Login</button>
        </Link> */}
        <div className="flex items-center gap-2 px-2">
          {option?.map((opt) => (
            <button
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={` ${theme === opt.text && "text-sky-600"}`}
            >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
