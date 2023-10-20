import { useEffect, useState } from "react";
import BrandCard from "../Components/BrandCard";
import Banner from "../Components/Banner";
import AboutUs from "../Components/AboutUs";
import Review from "../Components/Review";

const Home = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/brand")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  // console.log(brands);
  return (
    <div className="bg-white dark:bg-color-primary-light">
      <div>
        <Banner></Banner>
      </div>

      {/* Our Brand  */}
      <h1 className="text-center text-4xl font-bold pt-12 text-brandPrimary">
        Our Brands
      </h1>
      <p className="text-center pt-2 pb-5 md:px-[5%]">
        Leading the Way in Technology and Innovation, Exploring the Future, One
        Brand at a Time.
      </p>
      <div className="px-[5%] md:px[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {brands?.map((brand) => (
          <BrandCard key={brand._id} brand={brand}></BrandCard>
        ))}
      </div>

      {/* About Us */}
      <h1 className="text-center text-4xl font-bold pt-12 text-brandPrimary">
        About Us
      </h1>
      <p className="pt-2 pb-5 px-[5%] md:px-[20%] text-justify">
        TechXpress is a dedicated team of tech enthusiasts driven by a common
        mission: to simplify and enrich your tech experience. We&apos;re
        committed to offering you the best from the world of Apple, Google,
        Microsoft, Intel, and beyond.
      </p>
      <div className="px-[5%]">
        <AboutUs></AboutUs>
      </div>

      {/* Review  */}
      <h1 className="text-center text-4xl font-bold pt-14 text-brandPrimary">
        Client Review
      </h1>
      <p className="pt-2 pb-5 px-[5%] md:px-[20%] text-justify">
        At TechXpress, we are committed to providing our customers with the best
        possible experience. That&apos;s why we love to hear from our customers
        and learn about their experiences with our products and services. Here
        are just a few reviews from our happy customers
      </p>
      <div className="px-[5%] pb-10">
        <Review></Review>
      </div>
    </div>
  );
};

export default Home;
