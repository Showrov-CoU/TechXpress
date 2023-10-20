import { Link } from "react-router-dom";
import banner from "../assets/Banner.png";
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-[80vh] bg-neutralSilver dark:bg-color-primary-dark px-[3%] md:px-[5%]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} className="w-full lg:w-full rounded-xl " />
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-brandPrimary">
              Tech Essentials for Everyone
            </h1>
            <p className="py-6">
              Explore a world of possibilities with Google, Apple, Microsoft,
              and Samsung. Discover how technology can enhance and simplify your
              daily routine.
            </p>
            <Link to="/register">
              <button className="signbtn">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
