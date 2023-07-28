import { Link, NavLink, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import logo from "../../public/techhut logo.png";
import usersIcon from "../assets/list-users.svg";
import list from "../assets/list.svg";
import add from "../assets/add-library.svg";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const { user } = useAuth();
  const { logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Navigate("/");
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start lg:items-center justify-center mt-2 ml-2">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn bg-transparent border-none drawer-button lg:hidden"
          >
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
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 h-full text-base-content bg-white border-r">
            {/* Sidebar content here */}

            <Link to="/">
              <div className="flex justify-center items-center gap-2 ml-4">
                <img src={logo} alt="" className="h-16" />
              </div>
            </Link>

            <div className="mt-6 ml-2 space-y-2">
              {/* admin menu */}

              {isAdmin && (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/addproduct"
                      className={({ isActive }) =>
                        isActive ? "bg-base-200 font-semibold" : ""
                      }
                    >
                      <img src={add} alt="" className="w-6 h-6 lg:w-8 lg:h-8" />
                      <span className="text-base text-gray-700">
                        Add Products
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manageproducts"
                      className={({ isActive }) =>
                        isActive ? "bg-base-200 font-semibold" : ""
                      }
                    >
                      <img
                        src={list}
                        alt=""
                        className="w-6 h-6 lg:w-8 lg:h-8"
                      />
                      <span className="text-base text-gray-700">
                        Manage Products
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manageusers"
                      className={({ isActive }) =>
                        isActive ? "bg-base-200 font-semibold" : ""
                      }
                    >
                      <img
                        src={usersIcon}
                        alt=""
                        className="w-6 h-6 lg:w-8 lg:h-8"
                      />
                      <span className="text-base text-gray-700">
                        Manage Users
                      </span>
                    </NavLink>
                  </li>
                </>
              )}

              <div className="divider"></div>

              <li>
                <details>
                  <summary className="flex cursor-pointer items-center justify-between pl-0 pr-4 py-0 text-gray-500 hover:bg-base-100 hover:text-gray-700">
                    <div className="flex items-center gap-2 p-4">
                      <img
                        alt="Man"
                        src={user?.photoURL}
                        className="h-10 w-10 rounded-full object-cover"
                      />

                      <div>
                        <p className="text-xs">
                          <strong className="block font-medium">
                            {user?.displayName}
                          </strong>

                          <span> {user?.email} </span>
                        </p>
                      </div>
                    </div>
                  </summary>

                  <ul className="p-2">
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </details>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
