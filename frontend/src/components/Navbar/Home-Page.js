import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SideNavBar from "./Side-Navbar";
import Dashboard from "../Admin-Dashboard/Dashboard";

const HomePage = () => {
  return (
    <div>
      <div className="">
        <SideNavBar />
      </div>
      <main className="mx-4 p-9 pl-64">
        <Routes>
          <Route path="/Dashboard" exact element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
};
export default HomePage;
