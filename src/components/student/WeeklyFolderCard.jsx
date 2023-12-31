import React from "react";
import file from "../../assets/image/file.jpg";
import { useNavigate } from "react-router-dom";

function WeeklyFolderCard({ reviewsData }) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/review-details/${id}`);
  };
  return (
    <>
      <div className="grid py-10 px-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {reviewsData?.map((obj) => {
          return (
            <div
              className=" col-span-1 pt-4 m-1 bg-white border mx-2 border-gray-200 rounded-lg  dark:bg-slate-100 dark:border-slate-200 shadow-2xl"
              onClick={() => handleClick(obj?._id)}
            >
              <div className="flex flex-col items-center px-6 py-3">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={file}
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"></h5>
                <span className="text-sm text-gray-500 dark:text-gray-400"></span>
                <div className="flex space-x-1 ">
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    week {obj?.week < 10 ? "0" + obj?.week : obj?.week}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WeeklyFolderCard;
