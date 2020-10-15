import React from "react";
import "./add-item.css";

const AddItem = ({ onAddItem }) => {
  return (
    <div className="add-item">
      <button
        className="btn btn-outline-secondary"
        onClick={() => onAddItem('Hello')}
        type="button"
      >
        Add
      </button>
    </div>
  );
};

export default AddItem;
