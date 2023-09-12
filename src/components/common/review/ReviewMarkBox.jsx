import React, { useEffect, useState } from "react";
import { updateReviewMark } from "../../../services/reviewer/review";
import markpic from '../../../assets/image/mark.jpg'
import { toast } from "react-toastify";
function ReviewMarkBox({ user, student , week , review ,id , mark }) {
  
  
  const [showInput, setShowInput] = useState(false);
  const [code, setCode] = useState("");
  const [theory, setTheory] = useState("");
  const [weekStatus , setWeekStatus] = useState('')
  useEffect(()=>{
    setCode(mark?.code)
    setTheory(mark?.theory)
    setWeekStatus(mark?.weekStatus)
  },[mark])

  
  const handleClick = () => {
    setShowInput(showInput ? false : true);
  };

  const handleSave = () => {
    const value ={
      mark : {code , theory , weekStatus} 
    }

    const updateReviewMarkHelper = async () => {
      try {
        const data = await updateReviewMark(id , value);
        if (data ){
          toast.success('mark updated successfully.');
        }
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    };
    updateReviewMarkHelper();
    setShowInput(showInput ? false : true);
  };
  return (
    <div className="shadow p-3 rounded gap-3">
    
        <div className="flex">
          <div className="w-11/12">
            <h1 className="text-sm font-bold bg-black p-1 rounded w-4/12 text-white text-center">
              Review Details
            </h1>
          </div>
          <div className={user !== "reviewer" ? "hidden" : review === 'conducted' ? "hidden" : ""}>
            <button
              onClick={showInput ? handleSave : handleClick}
             
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
          <img src={markpic} alt="" className="rounded-md shadow-xl" srcset="" />
          </div>
          <div className="p-4">
            <h1 className="font-semibold"> mark</h1>
            <div className="flex m-1">
              <h1>code : {!showInput && code}</h1>
              {showInput && (
                <input
                  className="rounded ml-3 w-10"
                  type="number"
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
                  type="number"
                  value={theory}
                  onChange={(e) => setTheory(e.target.value)}
                />
              )}
            </div>
            <div className="flex m-1">
              <h1>week status : {!showInput && weekStatus} </h1>
              {showInput && (
    <select
      className="rounded ml-1"
      value={weekStatus}
      onChange={(e) => setWeekStatus(e.target.value)}
    >
      <option value="Task Completed" className="text-green-600 font-semibold text-sm ">Task Completed</option>
      <option value="Task Needs Improvement" className="text-yellow-600 font-semibold text-sm ">Task Needs Improvement</option>
      <option value="Task Critical" className="text-orange-600 font-semibold text-sm ">Task Critical</option>
      <option value="Week Repeat" className="text-blue-600 font-semibold text-sm ">Week Repeat</option>
      
    </select>
  )}
            </div>
          </div>
        </div>
    </div>
  );
}

export default ReviewMarkBox;
