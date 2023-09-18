import React from "react";
import task from "../../assets/image/task.jpg";
import { useNavigate } from "react-router-dom";

function TaskBox() {
  const navigate = useNavigate();

  return (
    <>
      <div className=" col-span-1 p-6   rounded-3xl mb-1 items-center">
    <div className="flex flex-col items-center ">
    <img
        className="w-24 h-24 mb-3 rounded-full shadow-lg" src={task} alt="" />
          <div className="items-end  relative"></div>
        <a
          href="#"
          onClick={()=>navigate('/weekly-task')}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-950 rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-900 "
          >
        Weekly Task
        </a>
        </div>

       
      </div>
    </>
  );
}

export default TaskBox;
