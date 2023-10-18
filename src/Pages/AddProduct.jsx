const AddProduct = () => {
  return (
    <div>
      <h1 className="text-center text-3xl text-neutral font-bold">
        Add Products
      </h1>
      <p className="text-center">
        Expanding Our Range, One Product at a Time, Your Gateway to Fresh
        Possibilities.
      </p>
      <form className="px-52 space-y-2">
        <input
          type="text"
          placeholder="Image URL"
          className="input input-bordered input-success w-full block"
        />
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered input-success w-full block"
        />
        <input
          type="text"
          placeholder="Brand Name"
          className="input input-bordered input-success w-full block"
        />
        <input
          type="text"
          placeholder="Price"
          className="input input-bordered input-success w-full block"
        />
        <input
          type="text"
          placeholder="Rating"
          className="input input-bordered input-success w-full block"
        />
        <textarea
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
