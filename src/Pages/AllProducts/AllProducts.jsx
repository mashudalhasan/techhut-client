import { Helmet } from "react-helmet-async";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import useProduct from "../../hooks/useProduct";
import Products from "./Products";
import { motion } from "framer-motion";
import { useState } from "react";

const AllProducts = () => {
  const [shops] = useProduct();
  const [searchInput, setSearchInput] = useState("");
  const [filteredShops, setFilteredShops] = useState(shops);

  const handleSearch = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);

    // Filter the products based on the search input
    const filteredProducts = shops.filter((shop) =>
      shop.productName.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredShops(filteredProducts);
  };

  return (
    <div className="pt-16">
      <Helmet>
        <title>The Language Space | Products</title>
      </Helmet>
      <CommonBanner title={"All Products"}></CommonBanner>

      <div className="relative w-3/4 lg:w-1/2 mx-auto mt-5">
        <label htmlFor="Search" className="sr-only">
          {" "}
          Search{" "}
        </label>

        <input
          type="text"
          id="Search"
          placeholder="Search for..."
          className="w-full rounded-md border-gray-200 ps-2 py-2.5 pe-10 shadow-sm sm:text-sm"
          value={searchInput}
          onChange={handleSearch}
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>

      <motion.div
        className="w-11/12 mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        initial={{ opacity: 0, translateY: "10%" }}
        animate={{ opacity: 1, translateY: "0%" }}
        transition={{ duration: 1.5 }}
      >
        {searchInput
          ? filteredShops.map((shop) => <Products key={shop._id} shop={shop} />)
          : shops.map((shop) => <Products key={shop._id} shop={shop} />)}
      </motion.div>
    </div>
  );
};

export default AllProducts;
