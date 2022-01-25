import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signinActions } from "../../slices/Signup-Login/Signin-Slice";

const SideNavBar = () => {
  const dispatch = useDispatch();
  const handleLogoutButton = () => {
    console.log("this is logout button");
    dispatch(signinActions.handleSignoutButton());
  };
  return (
    <div className="container fixed h-screen w-60 bg-black bg-opacity-20 shadow-lg text-gray-700">
      <div className="pt-12 px-10">
        <h1 className="font-extrabold text-2xl text-white">
          <Link to="/dashboard">Mighty Jaxx</Link>
        </h1>
      </div>
      <div className="pt-24 relative space-y-2 text-sm grid row-5 ">
        <div className="text-white block flex items-center justify-left pl-12  uppercase font-normal tracking-widest hover:shadow-md py-3 hover:text-black hover:bg-yellow-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 my-auto transform inline-flex"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
            />
          </svg>
          <span className="inline-flex ml-3">
            <Link to="/dashboard">Dashboard </Link>
          </span>
        </div>
        <div className="text-white block flex items-center justify-left pl-12 uppercase font-normal tracking-widest hover:shadow-md py-3 hover:text-black hover:bg-yellow-500 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 my-auto transform inline-flex"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span className="inline-flex ml-3">
            <Link to="/additems"> Add Items </Link>
          </span>
        </div>

        <div className="text-white block flex items-center justify-left pl-12 uppercase font-normal tracking-widest hover:shadow-md py-3 hover:text-black hover:bg-yellow-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 my-auto transform inline-flex"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span className="inline-flex ml-3">
            <Link to="/signout" onClick={handleLogoutButton}>
              Logout
            </Link>
          </span>
        </div>
      </div>
      <div className="text-xs font-light uppercase tracking-wide absolute inset-x-0 bottom-0 pb-8 text-gray-500 px-10">
        © MightyJaxx
      </div>
    </div>
  );
};

export default SideNavBar;
