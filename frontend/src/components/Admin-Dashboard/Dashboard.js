import React, { useEffect } from "react";
import SideNavBar from "../Navbar/Side-Navbar";

import { useSelector, useDispatch } from "react-redux";
import {
  dashboardSliceActions,
  loadAllData,
} from "../../slices/Admin-Dashboard/Dashboard-Slice";
import ItemDisplay from "./Item-Display";

const Dashboard = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.dashboard);

  useEffect(async () => {
    dispatch(loadAllData());
  }, []);

  const mapOutItemData = () => {
    if (state.loading === true) {
      return (
        <div className="py-40 flex justify-center items-center">
          <div className="w-40 h-40 border-t-4 border-b-4 border-yellow-500 rounded-full animate-spin"></div>
        </div>
      );
    } else {
      return state.itemsDatabase?.map((element, id) => {
        return <ItemDisplay items={element} />;
      });
    }
  };

  return (
    <div>
      <SideNavBar />
      <main className="mx-4 p-9 pl-64">
        <div className="image-container grid grid-rows-2 grid-flow-col">
          {mapOutItemData()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
