import { useLoaderData } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const MyCart = () => {
  const carts = useLoaderData();

  const handleDelete = () => {
    console.log("ok");
  };
  return (
    <div>
      <h1 className="text-center text-3xl text-neutral font-bold">
        Total: {carts.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="bg-brandPrimary text-neutralSilver text-base">
              <th>No.</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Product Type</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {carts.map((cart, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{cart.productName}</td>
                <td>{cart.brandName}</td>
                <td>{cart.type}</td>
                <td>{cart.price}</td>
                <td>{cart.rating}</td>
                <td>
                  <button className="mr-5">
                    <AiFillEdit fill="#717171" size="28px"></AiFillEdit>
                  </button>
                  <button onClick={handleDelete}>
                    <AiFillDelete fill="red" size="28px"></AiFillDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

MyCart.propTypes = {};

export default MyCart;
