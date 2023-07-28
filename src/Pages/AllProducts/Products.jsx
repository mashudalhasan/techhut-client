import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import { useLocation, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Products = ({ shop }) => {
  const { productName, productImage, price, rating, specs, _id } = shop;
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (shop) => {
    console.log(shop);
    if (user) {
      const cartItem = {
        itemId: _id,
        productName,
        productImage,
        price,
        rating,
        specs,
        email: user.email,
      };
      fetch("https://techhut-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Product Added",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login for Purchase",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#22C55E",
        cancelButtonColor: "#EF4444",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="h-64 bg-gray-50 rounded-md flex justify-center items-center">
        <img
          alt="product"
          src={productImage}
          className="h-4/5 w-4/5 object-contain rounded-md"
        />
      </div>

      <div className="mt-4 flex justify-between items-center">
        <h3 className="text-base lg:text-lg font-bold text-gray-900">
          {productName}
        </h3>
        <p className="font-bold text-base lg:text-lg">
          <span className="text-xs">$</span>
          {price}
        </p>
      </div>

      <p className="mt-2 max-w-xs text-gray-500 text-xs">{specs}</p>
      <p className="mt-1 text-sm flex items-center">
        <FaStar className="text-green-500" />
        <FaStar className="text-green-500" />
        <FaStar className="text-green-500" />
        <FaStar className="text-green-500" />
        <FaStar className="text-green-500" />
        <span className="ml-1 text-gray-500">({rating})</span>
      </p>

      <button
        onClick={() => handleAddToCart(shop)}
        className="mt-2 font-semibold px-3 py-1 border border-black rounded-full hover:bg-black hover:text-white transition duration-500"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Products;
