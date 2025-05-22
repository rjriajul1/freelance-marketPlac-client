import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";



const Navbar = () => {
  const {user} = use(AuthContext)
  
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }
          to="/addTask"
        >
          Add Task
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }
          to="/browseTasks"
        >
          Browse Tasks
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }
          to="/myPostedTasks"
        >
          My Posted Tasks
        </NavLink>
      </li>
      {user ? '' : 
      <> 
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }
          to="/login"
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }
          to="/signUp"
        >
          SignUp
        </NavLink>
      </li>
      </>
      }
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start p-3">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" mr-3 lg:hidden hover:bg-amber-200 p-2 rounded-md cursor-pointer">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
          {links}
          </ul>
        </div>
        <p className="text-2xl font-bold text-green-500">Freelance <span className="text-red-500">MarketPlace</span></p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {links}
        </ul>
      </div>
      
     
      <div className="navbar-end">
        
    
         {user ? <Link to='/profile'><img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" /></Link> : '' } 
      </div>
    </div>
  );
};

export default Navbar;
