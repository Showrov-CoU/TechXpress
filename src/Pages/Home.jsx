import { useEffect, useState } from "react";
import BrandCard from "../Components/BrandCard";

const Home = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/brand")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  // console.log(brands);
  return (
    <div>
      <h1 className="text-center text-3xl text-neutral font-bold">
        Our Brands
      </h1>
      <p className="text-center">
        Leading the Way in Technology and Innovation, Exploring the Future, One
        Brand at a Time.
      </p>
      <div className="grid grid-cols-3 gap-4">
        {brands?.map((brand) => (
          <BrandCard key={brand._id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
