import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import logo from "../assets/logo.png";

const DashboardLayout = () => {
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
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <div>
              <Link to="/">
                <div className="flex items-center gap-2">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-10 h-10 object-contain"
                  />
                  <h2 className="text-2xl font-bold text-primary">
                    FreelanceHub
                  </h2>
                </div>
              </Link>
            </div>

            <li>
              <NavLink
                className={({ isActive }) => (isActive ? " underline" : "")}
                to="/dashboard/myPostedTasks"
              >
                My Posted Tasks
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "underline" : "")}
                to="/dashboard/addTask"
              >
                Add Task
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
