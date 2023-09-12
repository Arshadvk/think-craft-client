import React from "react";
import pendingTopicImg from "../../assets/image/pendingtask.jpg";
function PendingTopicBox({ pendingTask }) {
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="bg-[FFFFFF]-100-100 flex rounded-lg shadow-lg w-9/12 p-2 ">
        <div className=" w-2/2 lg:w-2/12  rounded-2xl overflow-hidden shadow-2xl ">
          <img
            className="rounded-2xl w-full mb-1"
            src={pendingTopicImg}
            alt=""
          />
          <div className="items-end  relative"></div>
        </div>

        <div className="p-2 w-1/4">
          <h1 className="text-base font-semibold bg-black rounded-xl text-white px-2 py-1 text-center w-36">
            Pending Tasks
          </h1>
          {pendingTask.length === 0 ? (
            <h1 className="ml-3 text-sm font-medium">no pendingTask</h1>
          ) : (
            pendingTask?.map(() => {})
          )}
        </div>
      </div>
    </div>
  );
}

export default PendingTopicBox;
