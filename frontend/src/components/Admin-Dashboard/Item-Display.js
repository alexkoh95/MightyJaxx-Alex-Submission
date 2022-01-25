import React from "react";
import { NavLink } from "react-router-dom";

const ItemDisplay = (props) => {
  const imageToDisplay = props.items.image + ".png";
  return (
    <div className="border-slate-50 max-width-md">
      <NavLink
        to={{
          pathname: `/modifyitems/${props.items.sku}`,
          state: { data: props.items },
        }}
      >
        <img src={imageToDisplay}></img>
        <div className="text-white">
          <div className="text-yellow-400">Title: </div>
          {props.items.title}
        </div>
        <div className="text-white">
          <div className="text-yellow-400">SKU: </div>
          {props.items.sku}
        </div>
      </NavLink>
    </div>
  );
};

export default ItemDisplay;
