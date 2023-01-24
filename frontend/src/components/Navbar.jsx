import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useAuthCall from "../hooks/useAuthCall";
import avatar1 from "../assets/avatar1.png";

const Navbar = () => {
  const { logout } = useAuthCall();
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <nav
      className="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-[#ffd10646]
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  "
    >
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div
          className="collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent"
        >
          <Link
            className="
  flex
  items-center
  text-gray-900
  hover:text-gray-900
  focus:text-gray-900
  mt-2
  lg:mt-0
  mr-1
"
            to="/"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Sport_records_icon_AG.svg/1280px-Sport_records_icon_AG.svg.png"
              style={{ height: 55 }}
              alt=""
              loading="lazy"
            />
          </Link>
        </div>
        {/* Collapsible wrapper */}
        {/* Right elements */}
        <div className="flex items-center relative">
          {/* Icon */}
          <a
            className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4"
            href="/#"
          >
            <h1 className="text-center font-sekune text-lg font-bold text-[24px]">
              <span className="text-red-700 capitalize">{currentUser}</span>
            </h1>
          </a>
          <div className="dropdown relative">
            <a
              className="dropdown-toggle flex items-center hidden-arrow"
              href="/#"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="w-12 h-12 rounded-full bg-[#ffb600] flex justify-center items-center text-white text-[30px] font-medium border-4 border-[#ff8806]">
                {currentUser && currentUser.slice(0, 1).toUpperCase()}
                {!currentUser && (
                  <img
                    src={currentUser || avatar1}
                    className="rounded-full"
                    style={{ height: 35, width: 35 }}
                    alt="user"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
            </a>
            <ul
              className="
    dropdown-menu
    min-w-max
    absolute
    bg-white
    text-base
    z-50
    float-left
    py-2
    list-none
    text-left
    rounded-lg
    shadow-lg
    mt-1
    hidden
    m-0
    bg-clip-padding
    border-none
    left-auto
    right-0
  "
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <button
                  onClick={logout}
                  className="
  dropdown-item
  text-sm
  py-2
  px-4
  font-normal
  block
  w-full
  whitespace-nowrap
  bg-transparent
  text-gray-700
  hover:bg-gray-100
"
                >
                  {currentUser && "Logout"}
                  {!currentUser && "Sing in"}
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Right elements */}
      </div>
    </nav>
  );
};

export default Navbar;
