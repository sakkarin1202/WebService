import React from "react";
import { Link } from "react-router-dom";
import UserProfile from "../Component/UserProfile";
import LoginButton from "../Component/LoginButton";
import RegisterButton from "../Component/RegisterButton";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuthContext();
  const menus = {
    ROLES_ADMIN: [
      { name: "Add restaurant", link: "/add" },
      { name: "Search", link: "/" },
    ],
    ROLES_USER: [{ name: "Search", link: "/search" }],
    ROLES_MODERATOR: [
      { name: "Add restaurant", link: "/add" },
      { name: "Home", link: "/" },
    ],
  };

  return (
    <div className="navbar bg-base-100 rounded-lg shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {user &&
              menus[user.roles[0]].map((menuItem) => (
                <li key={menuItem.name}>
                  <Link to={menuItem.link}>{menuItem.name}</Link>
                </li>
              ))}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Grab Restaurant
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {user &&
            menus[user.roles[0]].map((menuItem) => (
              <li key={menuItem.name}>
                <Link to={menuItem.link}>{menuItem.name}</Link>
              </li>
            ))}
        </ul>
      </div>

      <div className="navbar-end space-x-2">
        {user && (
          <div>
            Welcome, <span className="text-red-500">{user.username}</span>{" "}
            {user.roles.map((role, index) => (
              <div key={index} className="badge text-xs badge-accent">
                {role}
              </div>
            ))}
          </div>
        )}

        {user ? (
          <UserProfile />
        ) : (
          <div className="space-x-2">
            <Link to="/login" className="btn btn-accent">
              Login
            </Link>
            <LoginButton />
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
            <RegisterButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
