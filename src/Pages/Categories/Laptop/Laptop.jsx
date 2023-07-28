import { Helmet } from "react-helmet-async";
import useProduct from "../../../hooks/useProduct";
import CommonBanner from "../../../components/CommonBanner/CommonBanner";
import ShopCard from "../../Home/BestDeal/ShopCard";

const Laptop = () => {
  const [shops] = useProduct();

  const getCategoryShops = () => {
    return shops.filter((shop) => shop.category === "Laptop");
  };

  return (
    <div>
      <Helmet>
        <title>The Language Space | Laptops</title>
      </Helmet>
      <CommonBanner title={"Laptops"}></CommonBanner>
      <div
        className="w-11/12 mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        {getCategoryShops().map((shop) => (
          <ShopCard key={shop._id} shop={shop}></ShopCard>
        ))}
      </div>
    </div>
  );
};

export default Laptop;
