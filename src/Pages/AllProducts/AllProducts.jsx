import { Helmet } from "react-helmet-async";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import useProduct from "../../hooks/useProduct";
import Products from "./Products";

const AllProducts = () => {
    const [shops] = useProduct();

  return (
    <div>
      <Helmet>
        <title>The Language Space | Products</title>
      </Helmet>
      <CommonBanner title={"All Products"}></CommonBanner>
      <div
        className="w-11/12 mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        {shops.map((shop) => (
          <Products key={shop._id} shop={shop}></Products>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
