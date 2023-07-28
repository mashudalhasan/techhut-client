import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Cart from "../Pages/Cart/Cart";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ManageProducts from "../Pages/Dashboard/ManageProducts/ManageProducts";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllProducts from "../Pages/AllProducts/AllProducts";
import Smartphone from "../Pages/Categories/Smartphone/Smartphone";
import Laptop from "../Pages/Categories/Laptop/Laptop";
import Smartwatch from "../Pages/Categories/Smartwatch/Smartwatch";
import Tablet from "../Pages/Categories/Tablet/Tablet";
import Drone from "../Pages/Categories/Drone/Drone";
import Headphone from "../Pages/Categories/Headphone/Headphone";
import About from "../Pages/About/About";
import History from "../Pages/History/History";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allproducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "smartphone",
        element: <Smartphone></Smartphone>,
      },
      {
        path: "laptop",
        element: <Laptop></Laptop>,
      },
      {
        path: "smartwatch",
        element: <Smartwatch></Smartwatch>,
      },
      {
        path: "tablet",
        element: <Tablet></Tablet>,
      },
      {
        path: "drone",
        element: <Drone></Drone>,
      },
      {
        path: "headphone",
        element: <Headphone></Headphone>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "history",
        element: <History></History>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manageproducts",
        element: <ManageProducts></ManageProducts>,
      },
      {
        path: "addproduct",
        element: <AddProduct></AddProduct>,
      },
    ],
  },
]);

export default router;
