import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useAuthCall from "../hooks/useAuthCall";

const Navbar = () => {
  const { logout } = useAuthCall();
  const { currentUser } = useSelector((state) => state.auth);
  // console.log(currentUser);
  return (
    <nav
      className="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-gray-100
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
              className="
    text-gray-500
    hover:text-gray-700
    focus:text-gray-700
    mr-4
    dropdown-toggle
    hidden-arrow
    flex items-center
  "
              href="/#"
              id="dropdownMenuButton1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bell"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                ></path>
              </svg>
              <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">
                1
              </span>
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
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a
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
                  href="/#"
                >
                  Action
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown relative">
            <a
              className="dropdown-toggle flex items-center hidden-arrow"
              href="/#"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                className="rounded-full"
                style={{ height: 25, width: 25 }}
                alt=""
                loading="lazy"
              />
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
                  Logout
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
