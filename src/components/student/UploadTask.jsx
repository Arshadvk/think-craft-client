import React, { useEffect, useState } from "react";
import { loadTasks } from "../../services/student/task";

function UploadTask() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    async function getTask() {
      try {
        const data = await loadTasks();
        setTask(data?.tasks);
      } catch (error) {
        console.log(error);
      }
    }
    getTask();
  }, []);

  return (
    <>
      {task?.map((taskObj, taskIndex) => (
        <div key={taskObj._id}>
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
                <div key={index}></div>
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
                <div key={index}></div>
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
                <div key={index}></div>
              </>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default UploadTask;
