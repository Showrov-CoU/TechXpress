import "sweetalert2/dist/sweetalert2.min.css";
import Swal from "sweetalert2/dist/sweetalert2.js";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.photo.value;
    const productName = form.pname.value;
    const brandName = form.bname.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.desc.value;
    console.log(
      image,
      productName,
      brandName,
      type,
      price,
      rating,
      description
    );

    const newProduct = {
      image,
      productName,
      brandName,
      type,
      price,
      rating,
      description,
    };
    // console.log(newProduct);
    fetch("http://localhost:3000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Product added successfully...!",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          }).then((result) => {
            if (result.isConfirmed) {
              form.reset();
            }
          });
        } else {
          Swal.fire({
            title: "Something is wrong! Please try again",
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
  return (
    <div className="space-y-2">
      {/* <h1 className="text-center text-3xl text-neutral font-bold">
        Add Products
      </h1> */}
      <p className="text-center">
        &quot;Enhance Your Catalog with New Offerings&quot;
      </p>
      <form onSubmit={handleAddProduct} className="px-52 space-y-2">
        <input
          required
          type="text"
          name="photo"
          placeholder="Image URL"
          className="input input-bordered input-success w-full block"
        />
        <input
          required
          type="text"
          placeholder="Product Name"
          name="pname"
          className="input input-bordered input-success w-full block"
        />
        <input
          required
          type="text"
          placeholder="Brand Name"
          name="bname"
          className="input input-bordered input-success w-full block"
        />
        <select
          required
          name="type"
          className="select select-success w-full block"
        >
          <option value="0">Select Type</option>
          <option value="Laptop">Laptop</option>
          <option value="Tablet">Tablet PC</option>
          <option value="Mobile">Mobile</option>
          <option value="Mobile">Earbud</option>
          <option value="holographic device">Holographic Device</option>
          <option value="Headphone">Headphone</option>
          <option value="Watch">Watch</option>
          <option value="Camera">Camera</option>
          <option value="HomePod Mini">HomePod Mini</option>
          <option value="Software">Software</option>
          <option value="Hardware">Hardware</option>
          <option value="SSD">SSD</option>
          <option value="HD">HD</option>
          <option value="Processor">Processor</option>
          <option value="TV">TV</option>
          <option value="Controller">Controller</option>
          <option value="Joypad">Joypad</option>
          <option value="Joystick">Joystick</option>
        </select>
        <input
          required
          type="text"
          name="price"
          placeholder="Price"
          className="input input-bordered input-success w-full block"
        />
        <input
          required
          type="text"
          name="rating"
          placeholder="Rating"
          className="input input-bordered input-success w-full block"
        />
        <textarea
          required
          name="desc"
          className="textarea textarea-success block w-full"
          placeholder="Short Description"
        ></textarea>
        <button className="signbtn text-neutralSilver w-full">Add</button>
      </form>
    </div>
  );
};

AddProduct.propTypes = {};

export default AddProduct;
