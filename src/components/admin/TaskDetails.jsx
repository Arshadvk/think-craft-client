import React, { useEffect, useState } from "react";

function TaskDetails({ taskData }) {
  const [task, setTask] = useState([]);
  const [showInput , setShowInput ] = useState(false)
  useEffect(() => {
    setTask(taskData);
  }, [taskData]);

  return (
    <>
      {task?.map((taskObj) => (
        <div key={taskObj._id}>
          <form>
            <div className="bg-[FFFFFF]-100-100 rounded-lg shadow-lg w-12/12 px-10 py-5 my-5 mx-2">
              <div className="flex w-full justify-between">
                <h1 className="mb-2 font-normal">Week {taskObj.week}</h1>
                <div className="flex items-end">
                  <button
                    type="button"
                    onClick={()=>setShowInput(showInput ? false : true)}
                    className="bg-black text-white p-2 rounded-lg"
                  >
                    Upload
                  </button>
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="" className="font-semibold text-sm pb-2">
                  Personal Development Workout :{" "}
                </label>
              </div>
              {taskObj.personalDevelopmentWorkout.map((pdWorkout, index) => (
                <div key={index}>
                  <h1 className="text-sm pb-2">
                    {index + 1}) {pdWorkout}
                  </h1>
                  <input
                    type="text"
                    value={pdWorkout}
                    className={showInput ? "" : 'hidden'}
                    onChange={(e) => {
                      // Update the pdWorkout value in state when edited
                      const updatedPDWorkout = [
                        ...taskObj.personalDevelopmentWorkout,
                      ];
                      updatedPDWorkout[index] = e.target.value;
                      setTask((prevTask) => {
                        return prevTask.map((prevTaskObj) => {
                          if (prevTaskObj._id === taskObj._id) {
                            return {
                              ...prevTaskObj,
                              personalDevelopmentWorkout: updatedPDWorkout,
                            };
                          }
                          return prevTaskObj;
                        });
                      });
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="bg-[FFFFFF]-100-100 rounded-lg shadow-lg w-12/12 px-10 py-5 my-5 mx-2">
              <h1 className="mb-2 font-normal">Week {taskObj.week}</h1>
              <div className="w-full">
                <label htmlFor="" className="font-semibold text-sm pb-2">
                  Technical Workout :{" "}
                </label>
              </div>
              {taskObj.technicalWorkouts.map((techWorkout, index) => (
                <div key={index}>
                  <h1 className="text-sm pb-2">
                    {index + 1}) {techWorkout}
                  </h1>
                  <input
                    type="text"
                    value={techWorkout}
                    className={showInput ? "" : 'hidden'}
                    onChange={(e) => {
                      // Update the pdWorkout value in state when edited
                      const updatedtechWorkout = [...taskObj.technicalWorkouts];
                      updatedtechWorkout[index] = e.target.value;
                      setTask((prevTask) => {
                        return prevTask.map((prevTaskObj) => {
                          if (prevTaskObj._id === taskObj._id) {
                            return {
                              ...prevTaskObj,
                              technicalWorkouts: updatedtechWorkout,
                            };
                          }
                          return prevTaskObj;
                        });
                      });
                    }}
                  />
                </div>
              ))}
            </div>
            {/* ... Similar code for Miscellaneous Workout ... */}
            <div className="bg-[FFFFFF]-100-100 rounded-lg shadow-lg w-12/12 px-10 py-5 my-5 mx-2">
              <h1 className="mb-2 font-normal">Week {taskObj.week}</h1>
              <div className="w-full">
                <label htmlFor="" className="font-semibold text-sm pb-2">
                  Technical Workout :{" "}
                </label>
              </div>
              {taskObj.miscellaneousWorkouts.map((miscWorkout, index) => (
                <div key={index}>
                  <h1 className="text-sm pb-2">
                    {index + 1}) {miscWorkout}
                  </h1>
                  <input
                    type="text"
                    value={miscWorkout}
                    className={showInput ? "" : 'hidden'}
                    onChange={(e) => {
                      // Update the pdWorkout value in state when edited
                      const updatedmiscWorkout = [
                        ...taskObj.miscellaneousWorkouts,
                      ];
                      updatedmiscWorkout[index] = e.target.value;
                      setTask((prevTask) => {
                        return prevTask.map((prevTaskObj) => {
                          if (prevTaskObj._id === taskObj._id) {
                            return {
                              ...prevTaskObj,
                              miscellaneousWorkouts: updatedmiscWorkout,
                            };
                          }
                          return prevTaskObj;
                        });
                      });
                    }}
                  />
                </div>
              ))}
            </div>
          </form>
        </div>
      ))}
    </>
  );
}

export default TaskDetails;
