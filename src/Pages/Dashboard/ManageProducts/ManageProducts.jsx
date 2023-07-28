import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageProducts = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: products = [] } = useQuery(["products"], async () => {
    const res = await axiosSecure.get("/products");
    console.log("res from manage products", res);
    return res.data;
  });

  return (
    <div>
      <Helmet>
        <title>The Language Space | Manage Classes</title>
      </Helmet>
      <h2 className="text-xl text-center font-semibold tracking-tighter text-gray-900 sm:text-3xl">
        Manage Classes
      </h2>

      <div className="overflow-x-auto mt-14 rounded-md shadow-md">
        <table className="table">
          {/* head */}
          <thead className="bg-base-200">
            <tr className="text-center">
              <th>Product Info</th>
              <th>Specifications</th>
              <th>Available Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((product) => (
              <tr key={product._id} className="text-center">
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={product.productImage} alt="Class Image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.productName}</div>
                    </div>
                  </div>
                </td>
                <td>{product.specs}</td>
                <td>{product.quantity}</td>
                <td>${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
