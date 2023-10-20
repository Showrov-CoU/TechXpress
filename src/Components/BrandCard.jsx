import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  return (
    <div>
      <div className="overflow-hidden rounded-lg glass border-2 border-solid border-gray-400 dark:border-color-gray">
        <figure className="h-64">
          <img src={brand.image} alt="car!" className="w-full h-full" />
        </figure>
        <div className="card-body text-neutralDGrey dark:text-white">
          <h2 className="card-title">{brand.brandName}</h2>
          <p>{brand.desc}</p>
          <div className="card-actions justify-end">
            <Link to={`/product/${brand.brandName}`}>
              <button className="signbtn text-neutralSilver">
                See Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.object.isRequired,
};
export default BrandCard;
