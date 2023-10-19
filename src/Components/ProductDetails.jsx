import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/dist/sweetalert2.min.css";
// import "sweetalert2/src/sweetalert2.scss";
// import "sweetalert2.min.css";

const ProductDetails = () => {
  const clickedDetailsProduct = useLoaderData();
  const handleCart = () => {
    fetch("http://localhost:3000/mycart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(clickedDetailsProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title:
              "Congratulations! You've successfully added the item to your cart.",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        } else {
          Swal.fire({
            title: "Item not added. Please try again.",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };
  //   const {photo,pname,bname,type,price,rating,description}
  //   console.log(clickedDetailsProduct);
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-2/3">
          <img src={clickedDetailsProduct.image} alt="Album" />
        </figure>
        <div className="card-body w-1/3">
          <h2 className="card-title">{clickedDetailsProduct.productName}</h2>
          <h2 className="text-sm font-bold">
            <span>
              Brand:<span> {clickedDetailsProduct.brandName}</span>
            </span>
          </h2>
          <h2 className="text-sm font-bold">
            <span>
              Type:<span> {clickedDetailsProduct.type}</span>
            </span>
          </h2>
          <h2 className="text-sm font-bold">
            <span>
              Price:<span> {clickedDetailsProduct.price}</span>
            </span>
          </h2>
          <p className="text-sm font-bold">
            <span>
              Rating:<span> {clickedDetailsProduct.rating}</span>
            </span>
          </p>
          <p className="text-justify">{clickedDetailsProduct.description}</p>
          <div className="card-actions justify-end">
            <button
              onClick={handleCart}
              className="signbtn text-neutralSilver w-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;