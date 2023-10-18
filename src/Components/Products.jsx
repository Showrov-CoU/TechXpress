import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const loadProduct = useLoaderData();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(loadProduct);
  }, [loadProduct]);
  console.log(products);
  return (
    <div>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      ) : (
        <h1 className="text-center mx-16 mt-20 text-brandPrimary text-4xl font-bold">
          Currently, we don&apos;t have any products available under this brand.
          Please explore our other brands for a wide selection of tech and
          electronics.
        </h1>
      )}
    </div>
  );
};

export default Products;
