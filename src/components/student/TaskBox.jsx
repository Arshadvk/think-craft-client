import React, {  } from "react";
import task from "../../assets/image/task.jpg";
import { useNavigate } from "react-router-dom";

function TaskBox() {
  const navigate = useNavigate();
  

 

  return (
    <>
      <div className="bg-[FFFFFF]-100-100 bg-opacity-50 flex rounded-lg shadow-lg w-8/12 p-2 ">
        <div className=" w-2/2 lg:w-2/12  rounded-2xl overflow-hidden shadow-2xl ">
          <img className="rounded-full  mb-1" src={task} alt="" />
          <div className="items-end  relative"></div>
        </div>
        <div className="sm:w-3/4 px-3 flex items-center ">
          <h1 className="w-full font-semibold ">
            Complete Your Task Before Review
          </h1>
          <div className="justify-end  mr-16 mt-2">
            <button
              className="bg-black text-white rounded-xl px-5 py-2"
              onClick={() => navigate("/task-upload")}
            >
              Task
            </button>
          </div>
        </div>
      </div>
  </>
  );
}

export default TaskBox;
