import React, { useEffect, useState } from "react";
import task from "../../assets/image/task.jpg";
import studentAxios from "../../axios/studentAxios";
import { useErrorHandler } from "../../hooks/ErrorHandler";
import { useNavigate } from "react-router-dom";

function TaskBox() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const { studentAuthenticationHandler } = useErrorHandler();
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await studentAxios.get("/profile");
        setUserData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);

  return (
    <div className="flex items-center justify-center mt-4">
      <div className="bg-[FFFFFF]-100-100 flex rounded-lg shadow-lg w-8/12 p-2 ">
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
      <div className="bg-white rounded-lg shadow-lg sm:w-2/12 lg:w-1/12 text-center items-center mx-2 p-2 justify-center">
        <h1 className="font-bold text-base  lg:text-4xl ">
          {userData?.week < 10 ? `0${userData?.week}` : userData?.week}
        </h1>
        <h2 className="font-bold text-xs  lg:text-base  py-2">week</h2>
        <h2 className="text-red-600 font-medium text-xs ">Next Review</h2>
        <h2 className="font-semibold text-xs">16/08/2023</h2>
      </div>
    </div>
  );
}

export default TaskBox;
