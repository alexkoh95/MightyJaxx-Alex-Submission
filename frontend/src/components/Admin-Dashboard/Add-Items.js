import React from "react";
import SideNavBar from "../Navbar/Side-Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addItemsActions } from "../../slices/Admin-Dashboard/Add-Items-Slice";

const AddItems = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.addItems);

  const handleTitleChange = (event) => {
    dispatch(addItemsActions.setTitle(event.target.value));
  };

  const handleSKUChange = (event) => {
    dispatch(addItemsActions.setSKU(event.target.value));
  };

  const handleImageChange = (event) => {
    dispatch(addItemsActions.setImage(event.target.value));
  };

  const handleSubmitButton = (event) => {
    event.preventDefault();
    dispatch(addItemsActions.handleSubmitButton());
  };

  return (
    <div>
      <SideNavBar />
      <main className="mx-4 p-9 pl-64">
        <div className="signin-container max-w-sm mx-auto flex flex-1 items-center justify-center min-h-screen px-2">
          <div className="bg-white px-6 py-4 rounded-lg shadow-lg text-black w-full my-10">
            <h1 className="font-bold text-3xl">
              Add An Item To Your Database Here!
            </h1>
            <form className="signin-form pt-4">
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="text"
                placeholder="Title"
                onChange={handleTitleChange}
              ></input>
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="text"
                placeholder="SKU"
                onChange={handleSKUChange}
              ></input>
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="text"
                placeholder="Image"
                onChange={handleImageChange}
              ></input>
              <div className="py-2 text-xs text-gray-600">
                Please use a link from Imgur as your image source!
              </div>
              <button
                className="block bg-yellow-500 text-white hover:bg-yellow-600 w-full p-3 rounded mb-4"
                type="submit"
                onClick={handleSubmitButton}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddItems;
