import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center">
      <button className="bg-red-500 px-3 py-2 rounded-lg font-bold">
        Previous
      </button>
      <button className="bg-red-500 px-3 py-2 rounded-lg font-bold">
        Next
      </button>
    </div>
  );
};

export default Pagination;
