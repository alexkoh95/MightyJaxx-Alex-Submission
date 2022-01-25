import React, { useEffect } from "react";
import { useParams } from "react-router";
import SideNavBar from "../Navbar/Side-Navbar";
import { useSelector, useDispatch } from "react-redux";
import { modifyItemsSliceActions } from "../../slices/Admin-Dashboard/Modify-Items-Slice";

const ModifyItems = () => {
  const params = useParams();
  const getsku = params.sku;

  const state = useSelector((state) => state.dashboard);
  const result = state.itemsDatabase.filter((element) => element.sku == getsku);
  const image = result[0].image + ".png";
  const sku = result[0].sku;
  const title = result[0].title;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(modifyItemsSliceActions.setModifiedTitle(title));
    dispatch(modifyItemsSliceActions.setModifiedSku(sku));
    dispatch(modifyItemsSliceActions.setModifiedImage(image));
    dispatch(modifyItemsSliceActions.setOriginalSku(sku));
  }, [result]);

  const modifyItemTitle = (event) => {
    dispatch(modifyItemsSliceActions.setModifiedTitle(event.target.value));
  };

  const modifyItemSku = (event) => {
    dispatch(modifyItemsSliceActions.setModifiedSku(event.target.value));
  };

  const modifyItemImage = (event) => {
    dispatch(modifyItemsSliceActions.setModifiedImage(event.target.value));
  };

  const handleSubmitEditButton = (event) => {
    event.preventDefault();
    dispatch(modifyItemsSliceActions.handleSubmitEditButton());
  };

  const handleDeleteButton = (event) => {
    event.preventDefault();
    dispatch(modifyItemsSliceActions.handleDeleteButton());
  };

  const displaySKU = () => {
    return (
      <div className="grid">
        <div>
          <img className="justify-center" src={image}></img>
          <div className="text-white">
            <div className="text-yellow-400">Title: </div>
            {result[0].title}
          </div>
          <div className="text-white">
            <div className="text-yellow-400">SKU: </div>
            {result[0].sku}
          </div>
        </div>
        <div className="bg-white px-6 py-4 rounded-lg shadow-lg text-black w-full my-10">
          <form className="edit-form pt-4 ">
            <input
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="text"
              placeholder={title}
              onChange={modifyItemTitle}
            ></input>
            <input
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="text"
              placeholder={sku}
              onChange={modifyItemSku}
            ></input>
            <input
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="text"
              placeholder={image}
              onChange={modifyItemImage}
            ></input>
            <div className="py-2 text-xs text-gray-600"></div>
            <button
              className="block bg-yellow-500 text-white hover:bg-yellow-600 w-full p-3 rounded mb-4"
              type="submit"
              onClick={handleSubmitEditButton}
            >
              Submit Change
            </button>
            <button
              className="block bg-red-500 text-white hover:bg-red-600 w-full p-3 rounded mb-4"
              onClick={handleDeleteButton}
            >
              Delete
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div>
      <SideNavBar />
      <main className="mx-4 p-9 pl-64">{displaySKU()}</main>
    </div>
  );
};

export default ModifyItems;
