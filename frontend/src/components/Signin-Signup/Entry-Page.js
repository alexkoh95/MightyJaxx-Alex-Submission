import React from "react";
import { Link } from "react-router-dom";

const EntryPage = () => {
  const nameOfWebsite = "Mighty Jaxx";
  return (
    <div className="overall-container flex items-center justify-center space-x-2 h-screen">
      <div className="grid-rows-2 mb-12">
        <div className="text-8xl font-bold leading-18 text-yellow-500">
          {nameOfWebsite}
        </div>
        <div className="subtitle-container items-center justify-center">
          <div className="subtitles font-bold text-slate-100 text-2xl pl-24">
            Welcome to the Mighty Jaxx
          </div>
        </div>
        <div className="grid grid-cols-2 inline-flex">
          <Link
            to="/signin"
            className="m-4 px-5 py-2 text-white border-2 border-white uppercase font-semibold hover:bg-yellow-500 hover:text-black"
          >
            <div className="px-12"> Sign In</div>
          </Link>
          <Link
            to="/signup"
            className="m-4 px-5 py-2 border-2 text-white border-white uppercase font-semibold hover:bg-yellow-500 hover:text-black"
          >
            <div className="px-12"> Sign Up</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
