import React, { useState } from "react";
import pendingTask from '../../../assets/image/pendingtask.jpg'
function PendingTaskBox({ user }) {
  const [showInput, setShowInput] = useState(false);
  const handleClick = () => {
    setShowInput(showInput ? false : true);
  };
  return (
    <div className="shadow p-3 rounded">
      <div className="flex">
        <div className="w-11/12">
          <h1 className="text-sm font-bold bg-black p-1 rounded w-4/12 text-white text-center">
            Pending Task
          </h1>
        </div>
        <div className={user === "reviewer" ? " " : "hidden"}>
          <button onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/3 p-3">
          <img src={pendingTask} alt="" className="rounded-md shadow-xl" srcset="" />
        </div>
        <div className="ml-3 mt-3">

        <textarea type="text" className="w-full" name="" id="" />
        </div>
      </div>
    </div>
  );
}

export default PendingTaskBox;
