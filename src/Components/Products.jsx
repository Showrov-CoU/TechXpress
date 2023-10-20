// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Product from "./Product";
import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setloding] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:3000/product/${brandName}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setloding(false);
      });
  }, [brandName]);
  //console.log(products);

  return (
    <div>
      <div className={products.length > 0 ? "w-100vw py-5" : ""}>
        {products.length > 0 ? (
          <div className="carousel carousel-center gap-5 bg-brandPrimary opacity-80 py-6 h-80">
            {loading ? (
              <span className="block mx-auto mt-20 loading loading-dots loading-lg text-success"></span>
            ) : (
              <>
                {products.map((item) => (
                  <div key={item._id} className="carousel-item">
                    <img
                      src={item.image}
                      alt="Product"
                      className="w-full h-full rounded-xl"
                    />
                  </div>
                ))}
              </>
            )}
            {/* <div className="carousel-item">
            <img src={im} alt="Pizza" />
          </div>
          <div className="carousel-item">
            <img src={im} alt="Pizza" />
          </div>
          <div className="carousel-item">
            <img src={im} alt="Pizza" />
          </div> */}
          </div>
        ) : (
          <p></p>
        )}
      </div>
      <div className="mx-[5%]">
        {loading ? (
          <span className="block mx-auto mt-20 loading loading-dots loading-lg text-success"></span>
        ) : (
          <div>
            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {products.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
            ) : (
              <h1 className="text-center mx-16 mt-20 text-brandPrimary text-4xl font-bold">
                Currently, we don&apos;t have any products available under this
                brand. Please explore our other brands for a wide selection of
                tech and electronics.
              </h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
