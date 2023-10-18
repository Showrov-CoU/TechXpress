import PropTypes from "prop-types";

const BrandCard = ({ brand }) => {
  return (
    <div>
      <div className="card glass">
        <figure className="h-64">
          <img src={brand.image} alt="car!" className="w-full h-full" />
        </figure>
        <div className="card-body text-neutralDGrey">
          <h2 className="card-title">{brand.brandName}</h2>
          <p>{brand.desc}</p>
          <div className="card-actions justify-end">
            <button className="signbtn text-neutralSilver">See Products</button>
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
