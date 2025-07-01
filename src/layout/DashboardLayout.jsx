import React, { use } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../contexts/AuthContext";
import { IoIosLogOut, IoMdSettings } from "react-icons/io";

const DashboardLayout = () => {
    const navigate = useNavigate();
  const { userSignOut } = use(AuthContext);
  const handleSignOut = () => {
    userSignOut();
    navigate("/");
  };
  return (
    <div className="max-w-[1600px] mx-auto ">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <div className="navbar lg:hidden bg-base-300 w-full">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-2"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">Navbar Title</div>
          </div>
          <div className="w-11/12 mx-auto">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-primary text-white min-h-full w-80 p-4">
            <div>
              <Link to="/">
                <div className="flex items-center pb-6 pt-2 gap-2">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-10 h-10 object-contain"
                  />
                  <h2 className="text-2xl font-bold text-secondary">
                    FreelanceHub
                  </h2>
                </div>
              </Link>
            </div>
            <div className="">
            <div className="relative">
                <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "underline  text-xl" : "text-xl"
                  }
                  to="/dashboard/myPostedTasks"
                >
                  My Posted Tasks
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "underline text-xl " : "text-xl"
                  }
                  to="/dashboard/addTask"
                >
                  Add Task
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " underline text-xl " : "text-xl"
                  }
                  to="/allItems"
                >
                  All Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " text-xl " : "text-xl"
                  }
                  to="/dashboard"
                >
                  Statistics
                </NavLink>
              </li>
            </div>
            <div className="absolute bottom-25 flex flex-col gap-3">
              <Link className="flex items-center gap-2" to="/profile"><span><IoMdSettings size={24} color="black" /></span><button className="text-xl cursor-pointer">Profile</button></Link>
              <div className="flex items-center gap-2">
                 <span><IoIosLogOut size={24} color="black" /></span>
                <button onClick={handleSignOut} className="text-xl cursor-pointer">Logout</button>
              </div>
            </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
