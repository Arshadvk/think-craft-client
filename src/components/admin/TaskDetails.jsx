import React, { useEffect, useState } from "react";

function TaskDetails({taskData}) {
  const [task, setTask] = useState([]);
  useEffect(()=>{
    setTask(taskData)
  },[taskData])
  return (
    <>
      {task?.map((taskObj) => (
        <div>
          <form>
            <div className="bg-[FFFFFF]-100-100 rounded-lg shadow-lg w-12/12 px-10 py-5 my-5 mx-2">
              <h1 className="mb-2 font-normal">Week {taskObj.week}</h1>
              <div className="w-full">
                <label htmlFor="" className="font-semibold text-sm pb-2">
                  Personal Development Workout :{" "}
                </label>
              </div>
              {taskObj.personalDevelopmentWorkout.map((pdWorkout, index) => (
                <>
                  <h1 className="text-sm pb-2">
                    {index + 1} ) {pdWorkout}
                  </h1>
                </>
              ))}
            </div>

            <div className="bg-[FFFFFF]-100-100  rounded-lg shadow-lg w-12/12 px-10 py-5 my-5 mx-2 ">
              <label htmlFor="" className="font-semibold text-sm mb-5">
                Technical Workout :
              </label>
              {taskObj.technicalWorkouts?.map((techWorkout, index) => (
                <>
                  <h1 className="text-sm pb-2">
                    {index + 1} ) {techWorkout}
                  </h1>
                </>
              ))}
            </div>

            <div className="bg-[FFFFFF]-100-100 rounded-lg shadow-lg w-12/12 px-10 py-5 my-5 mx-2 ">
              <label htmlFor="" className="font-semibold text-sm pb-2">
                Miscellaneous Workout:{" "}
              </label>
              {taskObj.miscellaneousWorkouts.map((miscWorkout, index) => (
                <>
                  <h1 className="text-sm pb-2">
                    {index + 1} ) {miscWorkout}
                  </h1>
                  
                </>
              ))}
              <div className="flex items-end">
                <button
                  type="submit"
                  className="bg-black text-white p-2 rounded-lg"
                >
                  Upload
                </button>
              </div>
            </div>
          </form>
        </div>
      ))}
    </>
  );
}

export default TaskDetails;
{
}
