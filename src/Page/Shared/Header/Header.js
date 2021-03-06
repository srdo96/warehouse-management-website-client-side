import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" sticky z-40 top-0">
      <div className="bg-gray-900 top-0 ">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <Link
              to="/"
              aria-label="Pc World"
              title="Pc World"
              className="inline-flex items-center"
            >
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Pc World
              </span>
            </Link>
            <ul className="items-center hidden space-x-8 lg:flex ">
              <li>
                <HashLink
                  to="/#home"
                  smooth
                  aria-label="Home"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:text-teal-400"
                >
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/#items"
                  smooth
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:text-teal-400"
                >
                  Items
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/#dashboard"
                  smooth
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Dashboard
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/#analytics"
                  smooth
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Analytics
                </HashLink>
              </li>
              {user && (
                <ul className="flex space-x-8 ">
                  <li>
                    <HashLink
                      to="/manageInventories"
                      smooth
                      className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                    >
                      Manage Items
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      to="/addNewItem"
                      smooth
                      className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                    >
                      Add Item
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      to="/myitems"
                      smooth
                      className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                    >
                      My Items
                    </HashLink>
                  </li>
                </ul>
              )}
              <li>
                <Link
                  to="/blogs"
                  aria-label="Blogs"
                  title="Blogs"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Blogs
                </Link>
              </li>
            </ul>

            <ul className="  lg:items-center   hidden space-x-8 lg:flex">
              {user ? (
                <li onClick={() => signOut(auth)}>
                  <button className=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Sign out
                  </button>
                </li>
              ) : (
                <ul className="flex ">
                  <li className="mr-4">
                    <Link
                      to="/signup"
                      aria-label="Sign in"
                      title="Sign in"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Sign up
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signin"
                      className="focus:outline-none text-white   focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mb-2   bg-teal-500 focus:ring-indigo-500    focus:ring-offset-indigo-200 hover:bg-teal-600"
                      aria-label="Sign up"
                      title="Sign up"
                    >
                      Sign in
                    </Link>
                  </li>
                </ul>
              )}
            </ul>

            {/* Navbar for sm devices */}
            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="p-5 bg-white border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="Pc World"
                          title="Pc World"
                          className="inline-flex items-center"
                        >
                          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            Pc World
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-gray-600"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4 text-center">
                        <li>
                          <HashLink
                            to="/#home"
                            smooth
                            onClick={() => setIsMenuOpen(false)}
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200  "
                          >
                            Home
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            to="/#items"
                            smooth
                            onClick={() => setIsMenuOpen(false)}
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
                          >
                            Items
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            to="/#dashboard"
                            smooth
                            onClick={() => setIsMenuOpen(false)}
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Dashboard
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            to="/#analytics"
                            smooth
                            onClick={() => setIsMenuOpen(false)}
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Analytics
                          </HashLink>
                        </li>
                        {user && (
                          <ul className="space-y-4">
                            <li>
                              <HashLink
                                to="/manageInventories"
                                smooth
                                onClick={() => setIsMenuOpen(false)}
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                Manage Items
                              </HashLink>
                            </li>
                            <li>
                              <HashLink
                                to="/addNewItem"
                                smooth
                                onClick={() => setIsMenuOpen(false)}
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                Add Item
                              </HashLink>
                            </li>
                            <li>
                              <HashLink
                                to="/myitems"
                                smooth
                                onClick={() => setIsMenuOpen(false)}
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                My Items
                              </HashLink>
                            </li>
                          </ul>
                        )}
                        <li>
                          <Link
                            to="/blogs"
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Blogs"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Blogs
                          </Link>
                        </li>

                        {user ? (
                          <button
                            onClick={() => {
                              signOut(auth);
                              setIsMenuOpen(false);
                            }}
                            className="inline-flex items-center justify-center w-full h-12 px-6 tracking-wide text-white font-semibold transition duration-200 rounded shadow-md  bg-red-500 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 "
                            aria-label="Sign in"
                          >
                            Sign out
                          </button>
                        ) : (
                          <ul>
                            <li>
                              <Link
                                to="/signup"
                                onClick={() => setIsMenuOpen(false)}
                                className="inline-flex items-center justify-center w-full h-12 px-6 tracking-wide text-white font-semibold transition duration-200 rounded shadow-md  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200"
                                aria-label="Sign up"
                              >
                                Sign up
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/signin"
                                onClick={() => setIsMenuOpen(false)}
                                className="inline-flex items-center justify-center w-full h-12 mt-3 px-6 tracking-wide text-white font-semibold transition duration-200 rounded shadow-md   bg-teal-500 focus:ring-indigo-500    focus:ring-offset-indigo-200 hover:bg-teal-700 "
                                aria-label="Sign in"
                              >
                                Sign in
                              </Link>
                            </li>
                          </ul>
                        )}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
