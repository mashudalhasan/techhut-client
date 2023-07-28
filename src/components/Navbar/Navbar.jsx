import userIcon from "../../assets/user.svg";
import cartIcon from "../../assets/cart (1).svg";
import placeholder from "../../assets/Portrait_Placeholder_Square.png";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tippy";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error.message));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/allproducts">All Products</Link>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Category</summary>
          <ul className="p-2">
            <li>
              <Link to="/smartphone">Smartphone</Link>
            </li>
            <li>
              <Link to="/laptop">Laptop</Link>
            </li>
            <li>
              <Link to="/smartwatch">Smartwatch</Link>
            </li>
            <li>
              <Link to="/tablet">Tablet</Link>
            </li>
            <li>
              <Link to="/drone">Drone</Link>
            </li>
            <li>
              <Link to="/headphone">Headphone</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        {isAdmin && <Link to="/dashboard/manageproducts">Dashboard</Link>}
      </li>
      {user && (
        <li>
          <button
            onClick={handleLogOut}
            className="bg-black w-full rounded-md py-2 px-3 text-white font-semibold tracking-wide bg-btn"
          >
            Logout
          </button>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 lg:w-11/12 mx-auto p-0 pr-6">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden border-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="normal-case text-xl hover:bg-transparent">
          <img className="h-1/3 w-1/3" src="/public/techhut logo.png" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3 font-semibold">{navOptions}</ul>
      </div>
      <div className="navbar-end gap-1 lg:gap-4 mr-8 lg:mr-0">
        {user ? (
          <>
            <span className="border-4 rounded-full border-slate-100 transition hover:scale-110 hover:shadow-md">
              <Tooltip
                title={user?.displayName}
                position="bottom"
                trigger="mouseenter"
                theme="light"
                animation="perspective"
              >
                {user.photoURL ? (
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  <img
                    src={placeholder}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                )}
              </Tooltip>
            </span>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="flex justify-center items-center gap-1 normal-case hover:bg-transparent"
            >
              <img className="h-5 w-5" src={userIcon} alt="" />
              Account
            </Link>
          </>
        )}

        <Link to="/cart">
          <div className="relative font-semibold">
            <div className="flex justify-center items-center gap-1 normal-case hover:bg-transparent">
              <img className="h-5 w-5" src={cartIcon} alt="" />
              Cart
            </div>
            <div className="badge bg-rose-100 absolute top-0 left-11 transform translate-x-1/3 -translate-y-1/3 overflow-hidden">
              {cart?.length || 0}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
