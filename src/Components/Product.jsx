import PropTypes from "prop-types";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div>
      <div className="card-compact border-2 border-solid border-gray-400 dark:border-color-gray rounded-md overflow-hidden">
        <figure className="h-64">
          <img
            src={product.image}
            alt="Tech product"
            className="w-full h-full  rounded-none"
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between">
            <h2 className="card-title">{product.productName}</h2>
            <h2 className="card-title text-brandPrimary">
              {product.brandName}
            </h2>
          </div>
          <div className="flex items-center justify-between text-sm font-bold">
            <span>
              Type:<span> {product.type}</span>
            </span>
            <span>
              Price:<span> {product.price}</span>
            </span>
          </div>
          <p className="text-justify">{product.description}</p>
          {/* <div className="rating">
            <input
              type="radio"
              name={product.rating}
              className="mask mask-star-2 bg-brandPrimary rating-sm"
            />
            <input
              type="radio"
              name={product.rating}
              className="mask mask-star-2 bg-brandPrimary rating-sm"
              checked
            />
            <input
              type="radio"
              name={product.rating}
              className="mask mask-star-2 bg-brandPrimary rating-sm"
            />
            <input
              type="radio"
              name={product.rating}
              className="mask mask-star-2 bg-brandPrimary rating-sm"
            />
            <input
              type="radio"
              name={product.rating}
              className="mask mask-star-2 bg-brandPrimary rating-sm"
            />
          </div> */}
          <div className="flex justify-center">
            <Rating
              emptySymbol={
                <AiOutlineStar fill="#4CAF4F" size="20px"></AiOutlineStar>
              }
              fullSymbol={<AiFillStar fill="#4CAF4F" size="20px"></AiFillStar>}
              initialRating={product.rating}
              readonly
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="card-actions justify-end">
              <Link to={`/productdetails/${product._id}`}>
                <button className="signbtn  text-neutralSilver">Details</button>
              </Link>
            </div>
            <div className="card-actions justify-start">
              <Link to={`/update/${product._id}`}>
                <button className="signbtn text-neutralSilver">
                  Update Product
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};
export default Product;
