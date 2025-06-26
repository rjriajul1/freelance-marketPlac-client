import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import logo from "../../assets/logo.png";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  const { user } = use(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? " underline" : "")}
          to="/allItems"
        >
          All Items
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? " underline" : "")}
          to="/aboutUs"
        >
          About Us
        </NavLink>
      </li>
     {user &&  <li>
        <NavLink
          className={({ isActive }) => (isActive ? " underline" : "")}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li>}
      {user ? (
        ""
      ) : (
        <>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? " underline" : "")}
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to="/signUp"
            >
              SignUp
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className=" bg-primary text-white">
      <div className="navbar nav max-w-[1600px] mx-auto ">
        <div className="navbar-start p-3">
          <div className="dropdown">
            <div
              
              tabIndex={0}
              role="button"
              className=" mr-3 lg:hidden  rounded-md cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu nav menu-sm dropdown-content bg-primary rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <img
                className="w-20 h-20 object-cover rounded-full"
                src={logo}
                alt=""
              />
            </div>
            <div>
              <p className="text-2xl font-bold  text-green-500">MarketPlace</p>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <Link to="/profile">
              <img
                className="w-12 h-12 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </Link>
          ) : (
            <CgProfile size={45} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
