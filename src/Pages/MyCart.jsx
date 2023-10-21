import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
// import { Swal } from "sweetalert2/dist/sweetalert2";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/dist/sweetalert2.min.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyCart = () => {
  const { user, loading } = useContext(AuthContext);
  console.log(user.email, "jdskjkds");
  //console.log(loadCarts, "hello");
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch(
      `https://tech-xpress-server-h0fi5pzmo-ashikur-rahman-showrovs-projects.vercel.app/mycart/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, [user.email]);
  console.log(carts);

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4CAF4F",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://tech-xpress-server-h0fi5pzmo-ashikur-rahman-showrovs-projects.vercel.app/mycart/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const reamining = carts.filter((cart) => cart._id !== id);
              setCarts(reamining);
            }
          });

        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="pt-5 pb-10 px-[5%] min-h-[60vh] dark:bg-color-primary-light dark:text-neutralGrey">
      {loading ? (
        ""
      ) : (
        <h1 className=" pb-2 text-center text-3xl font-bold">
          Total: {carts.length}
        </h1>
      )}
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
            {carts?.map((cart, idx) => (
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
                  <button onClick={() => handleDelete(cart._id)}>
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

export default MyCart;
