import { useEffect, useState } from "react";

const useProduct = () => {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setShops(data);
        setLoading(false);
      });
  }, []);

  return [shops, loading];
};

export default useProduct;
