import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { user } = use(AuthContext);

  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

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
          className={({ isActive }) => (isActive ? "underline" : "")}
          to="/addTask"
        >
          Add Task
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? " underline" : "")}
          to="/browseTasks"
        >
          Browse Tasks
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? " underline" : "")}
          to="/myPostedTasks"
        >
          My Posted Tasks
        </NavLink>
      </li>
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
    <div className="navbar nav bg-base-100 shadow-sm">
      <div className="navbar-start p-3">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className=" mr-3 lg:hidden p-2 rounded-md cursor-pointer"
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
            className="menu nav menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <p className="text-2xl font-bold text-green-500">
          Freelance <span className="text-red-500">MarketPlace</span>
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <p className="mr-8 btn" onClick={() => toggleTheme()}>
          <input
            type="checkbox"
            className="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
          />
        </p>
        {user ? (
          <Link to="/profile">
            <img
              className="w-12 h-12 rounded-full"
              src={user?.photoURL}
              alt=""
            />
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
