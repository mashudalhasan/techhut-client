import { useEffect } from "react";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const BestDeal = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setShops(data));
  }, []);

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
          
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {getCategoryShops("Smartphone").map((shop) => (
              <div key={shop._id}>
                <img src={shop.productImage} alt="" />
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BestDeal;
