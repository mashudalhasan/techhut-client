import { FaStar } from "react-icons/fa";

const ShopCard = ({ shop }) => {
  const { productName, productImage, price, rating, specs } = shop;

  return (
    <div className="">
      <div className="h-64 bg-gray-50 rounded-md flex justify-center items-center">
        <img
          alt="product"
          src={productImage}
          className="h-4/5 w-4/5 object-contain rounded-md"
        />
      </div>

      <div className="mt-4 flex justify-between items-center">
        <h3 className="text-base lg:text-lg font-bold text-gray-900">{productName}</h3>
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

      <button className="mt-2 font-semibold px-3 py-1 border border-black rounded-full hover:bg-black hover:text-white transition duration-500">
        Add to Cart
      </button>
    </div>
  );
};

export default ShopCard;
