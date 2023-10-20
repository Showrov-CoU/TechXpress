import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/dist/sweetalert2.min.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
// import "sweetalert2/src/sweetalert2.scss";
// import "sweetalert2.min.css";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const clickedDetailsProduct = useLoaderData();
  // const [existingCart, setExistingCart] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:3000/mycart/${user.email}`)
  //     .then((res) => res.json())
  //     .then((result) => setExistingCart(result));
  // }, []);

  console.log(user.email);
  const { image, productName, brandName, type, price, rating, description } =
    clickedDetailsProduct;
  const currentUserAddCartProduct = {
    email: user.email,
    image,
    productName,
    brandName,
    type,
    price,
    rating,
    description,
  };
  // console.log(currentUserAddCartProduct);
  // console.log(existingCart);
  const handleCart = () => {
    //const exist = existingCart.find((cart) => cart._id === id);
    // if (exist) {
    //   Swal.fire({
    //     title: "This item is already in your cart.",
    //     showClass: {
    //       popup: "animate__animated animate__fadeInDown",
    //     },
    //     hideClass: {
    //       popup: "animate__animated animate__fadeOutUp",
    //     },
    //   });
    // } else {
    //console.log("nai");
    fetch("http://localhost:3000/mycart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUserAddCartProduct),
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
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            }
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
    //}
  };
  //   const {photo,pname,bname,type,price,rating,description}
  //   console.log(clickedDetailsProduct);
  return (
    <div className="px-[5%] bg-white dark:bg-color-primary-light py-10 dark:text-white">
      <h1 className="text-center text-4xl font-bold text-brandPrimary">
        Product Details
      </h1>
      <p className="text-center pt-2 pb-5 md:px-[20%]">
        {clickedDetailsProduct.description}
      </p>
      <div className="card lg:card-side shadow-xl border-2 border-solid border-gray-400 dark:border-color-gray rounded-md">
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
