import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { AuthContext } from "../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link to="/" className="inline-flex items-center">
            <span className="ml-2 text-xl font-bold tracking-wide text-white">
              Chef's Corner
            </span>
          </Link>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              {user && (
                <NavLink className="text-4xl" to="#">
                  <img className="h-12 rounded-full" src={user.photoURL} alt="" />
                  {/* <FaUserCircle></FaUserCircle> */}
                </NavLink>
              )}
            </li>
            <div className="flex flex-col items-center md:flex-row">
              {user ? (
                <Link
                  onClick={handleLogOut}
                  to=""
                  className="btn md:w-auto md:mr-4 border-none"
                >
                  <div className="inline-flex items-center justify-center w-full h-full">
                    <p className="mr-3">Logout</p>
                  </div>
                </Link>
              ) : (
                <Link to="/login" className="btn md:w-auto md:mr-4 border-none">
                  <div className="inline-flex items-center justify-center w-full h-full">
                    <p className="mr-3">Login</p>
                  </div>
                </Link>
              )}
            </div>
          </ul>
          {/* Mobile Navbar Section */}
          <div className="lg:hidden">
            {/* Dropdown Open Button */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Bars3Icon className="w-5 text-gray-600" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-gray-600 border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                          Chef's Corner
                        </span>
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XMarkIcon className="w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link to="/" className="default">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-blue-400"
                        >
                          Blog
                        </Link>
                      </li>
                      <div className="flex flex-col items-center md:flex-row">
                        {user ? (
                          <Link
                            onClick={handleLogOut}
                            to=""
                            className="btn md:w-auto md:mr-4 border-none"
                          >
                            <div className="inline-flex items-center justify-center w-full h-full">
                              <p className="mr-3">Logout</p>
                            </div>
                          </Link>
                        ) : (
                          <Link
                            to="/login"
                            className="btn md:w-auto md:mr-4 border-none"
                          >
                            <div className="inline-flex items-center justify-center w-full h-full">
                              <p className="mr-3">Login</p>
                            </div>
                          </Link>
                        )}
                      </div>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
