import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ShopCard from "./ShopCard";
import "./BestDeal.css";
import useProduct from "../../../hooks/useProduct";

const BestDeal = () => {
  const [shops] = useProduct();

  const getCategoryShops = (category) => {
    return shops.filter((shop) => shop.category === category);
  };

  return (
    <div className="w-11/12 mx-auto mb-10">
      <h3 className="text-lg sm:text-2xl font-bold">
        Todays Best Deals For You!
      </h3>
      <Tabs>
        <TabList>
          <Tab>Smartphone</Tab>
          <Tab>Laptop</Tab>
          <Tab>Smartwatch</Tab>
          <Tab>Tablet</Tab>
          <Tab>Headphone</Tab>
          <Tab>Drone</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-5">
            {getCategoryShops("Smartphone").map((shop) => (
              <ShopCard key={shop._id} shop={shop}></ShopCard>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-5">
            {getCategoryShops("Laptop").map((shop) => (
              <ShopCard key={shop._id} shop={shop}></ShopCard>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-5">
            {getCategoryShops("Smartwatch").map((shop) => (
              <ShopCard key={shop._id} shop={shop}></ShopCard>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-5">
            {getCategoryShops("Tablet").map((shop) => (
              <ShopCard key={shop._id} shop={shop}></ShopCard>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-5">
            {getCategoryShops("Headphone").map((shop) => (
              <ShopCard key={shop._id} shop={shop}></ShopCard>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-5">
            {getCategoryShops("Drone").map((shop) => (
              <ShopCard key={shop._id} shop={shop}></ShopCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BestDeal;
