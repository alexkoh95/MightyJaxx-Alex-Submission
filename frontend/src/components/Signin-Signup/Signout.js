import React from "react";
import { Link } from "react-router-dom";

const Signout = () => {
  setTimeout(() => {
    window.location.replace("http://localhost:3000/signin");
  }, 3000);

  return (
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center min-h-screen px-2">
      <div className="bg-white px-6 py-4 rounded-lg shadow-lg text-black w-full my-10">
        <h1 className="font-bold text-3xl">Thank you for using Mighty Jaxx!</h1>
      </div>
      <span className="px-12 text-white text-xs absolute inset-x-0 bottom-0 pb-8 text-xs font-light uppercase tracking-wide">
        © 2021 MightyJaxx
      </span>
    </div>
  );
};

export default Signout;
