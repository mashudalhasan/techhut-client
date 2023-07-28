import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const AddProduct = () => {
  const { user } = useAuth();

  const handleAddClass = (event) => {
    event.preventDefault();

    const form = event.target;
    const sellerName = form.instructorName.value;
    const email = form.email.value;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const image = form.image.value;

    const newProduct = {
      seller_name: sellerName,
      email,
      ProductName: name,
      Quantity: parseInt(quantity),
      Price: parseInt(price),
      ProductImage: image,
    };
    console.log(newProduct);

    fetch("http://localhost:5000/products", {
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
            position: "top-end",
            icon: "success",
            title: "Class Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-3/4">
      <Helmet>
        <title>The Language Space | Add Product</title>
      </Helmet>

      {/* content */}

      <div className="bg-base-100 p-8 rounded-md shadow-md">
        <h2 className="text-xl text-center font-semibold tracking-tighter text-gray-900 sm:text-3xl mb-5">
          Add Product
        </h2>
        <form onSubmit={handleAddClass}>
          {/* form seller name and email row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label>
                <input
                  type="text"
                  name="sellerName"
                  readOnly
                  defaultValue={user?.displayName}
                  placeholder="Enter seller name"
                  className="input input-bordered w-full text-gray-500 cursor-not-allowed"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label>
                <input
                  type="email"
                  name="email"
                  readOnly
                  defaultValue={user?.email}
                  placeholder="Enter your email"
                  className="input input-bordered w-full text-gray-500 cursor-not-allowed"
                />
              </label>
            </div>
          </div>
          {/* form name and quantity row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Class name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Enter available seats"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form price and status row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label>
                <input
                  type="number"
                  name="price"
                  placeholder="price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Specs</span>
              </label>
              <label>
                <input
                  type="text"
                  name="specs"
                  className="input input-bordered w-full text-gray-500"
                />
              </label>
            </div>
          </div>
          {/* form product image row */}

          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text">Product Image</span>
            </label>
            <label>
              <input
                type="text"
                name="image"
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-md bg-gray-100 py-3 px-5 text-base text-gray-950 font-semibold transition active:bg-gray-200"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
