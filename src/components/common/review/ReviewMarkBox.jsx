import React, { useState } from "react";
import { updateReviewMark } from "../../../services/reviewer/review";
import mark from '../../../assets/image/mark.jpg'
function ReviewMarkBox({ user, id }) {
  const [showInput, setShowInput] = useState(false);
  const [code, setCode] = useState(0);
  const [theory, setTheory] = useState(0);
  const handleClick = () => {
    setShowInput(showInput ? false : true);
  };
  const handleSave = () => {
    const updateReviewMarkHelper = async () => {
      const data = await updateReviewMark({ code, theory }, id);
    };
    updateReviewMarkHelper();
    setShowInput(showInput ? false : true);
  };
  return (
    <div className="shadow p-3 rounded gap-3">
      <form action="">
        <div className="flex">
          <div className="w-11/12">
            <h1 className="text-sm font-bold bg-black p-1 rounded w-4/12 text-white text-center">
              Review Details
            </h1>
          </div>
          <div className={user === "reviewer" ? "" : "hidden"}>
            <button
              onClick={showInput ? handleSave : handleClick}
              type={showInput ? "submit" : "button"}
            >
              {!showInput ? (
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
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  class="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/4 mt-1">
          <img src={mark} alt="" className="rounded-md shadow-xl" srcset="" />
          </div>
          <div className="p-4">
            <h1 className="font-semibold"> mark</h1>
            <div className="flex m-1">
              <h1>code : {!showInput && code}</h1>
              {showInput && (
                <input
                  className="rounded ml-3 w-10"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              )}
            </div>

            <div className="flex m-1">
              <h1>theory : {!showInput && theory}</h1>
              {showInput && (
                <input
                  className="rounded ml-3 w-10"
                  type="text"
                  value={theory}
                  onChange={(e) => setTheory(e.target.value)}
                />
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewMarkBox;
