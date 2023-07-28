import { useEffect, useState } from "react";

const useProduct = () => {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://techhut-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setShops(data);
        setLoading(false);
      });
  }, []);

  return [shops, loading];
};

export default useProduct;
