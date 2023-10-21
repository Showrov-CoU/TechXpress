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

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };
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
        localStorage.removeItem("theme", "dark");
        onWindowMatch();
        break;
    }
  }, [theme]);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error.message));
  };

  const links = (
    <>
      <li className="mr-5 text-base">
        <NavLink to="/">
          {({ isActive }) => (
            <span className={isActive ? "text-brandPrimary" : ""}>Home</span>
          )}
        </NavLink>
      </li>
      <li className="mr-5 text-base">
        <NavLink to="/addProduct">
          {({ isActive }) => (
            <span className={isActive ? "text-brandPrimary" : ""}>
              Add Product
            </span>
          )}
        </NavLink>
      </li>
      <li className="mr-5 text-base">
        <NavLink to="/myCart">
          {({ isActive }) => (
            <span className={isActive ? "text-brandPrimary" : ""}>My Cart</span>
          )}
        </NavLink>
      </li>
      <li className="mr-5 text-base">
        <NavLink to="/contact">
          {({ isActive }) => (
            <span className={isActive ? "text-brandPrimary" : ""}>Contact</span>
          )}
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar border-solid border-neutralDGrey bg-neutralSilver dark:bg-color-primary-dark text-neutralDGrey dark:text-white px-[3%] md:px-[5%]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="p-0 btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 p-0"
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
            className="dropdown-content space-y-1 mt-3 z-[1] p-2 shadow bg-neutralSilver dark:bg-color-primary-light text-neutralDGrey dark:text-white rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="">
          <img src={logo} alt="" className="w-48" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <p className="text-sm font-semibold text-neutralDGrey dark:text-color-secondary mr-1 hidden md:block">
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
        <div className="flex flex-col md:flex-row items-center justify-center  md:gap-2 pl-1 md:px-2">
          {option?.map((opt) => (
            <button
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={` ${theme === opt.text && "text-sky-600 text-lg"}`}
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
