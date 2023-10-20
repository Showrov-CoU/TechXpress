import { useEffect, useState } from "react";
import BrandCard from "../Components/BrandCard";
import Banner from "../Components/Banner";

const Home = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/brand")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  // console.log(brands);
  return (
    <div className="bg-white dark:bg-color-primary">
      <div>
        <Banner></Banner>
      </div>
      <h1 className="text-center text-4xl font-bold pt-10 text-neutralDGrey dark:text-white">
        Our Brands
      </h1>
      <p className="text-center pt-2 pb-5 md:px[5%]">
        Leading the Way in Technology and Innovation, Exploring the Future, One
        Brand at a Time.
      </p>
      <div className="px-[5%] md:px[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {brands?.map((brand) => (
          <BrandCard key={brand._id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
