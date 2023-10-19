import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const clickedDetailsProduct = useLoaderData();
  //   const {photo,pname,bname,type,price,rating,description}
  console.log(clickedDetailsProduct);
  return <div>click</div>;
};

export default ProductDetails;
