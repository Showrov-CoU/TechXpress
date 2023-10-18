const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const pName = form.pname.value;
    const bName = form.bname.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const desc = form.desc.value;
    console.log(photo, pName, bName, type, price, rating, desc);
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
