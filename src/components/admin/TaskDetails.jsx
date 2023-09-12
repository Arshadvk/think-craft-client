import React, { useEffect, useState } from "react";
import { editWeeklyTask } from "../../services/admin/task";
import { toast } from "react-toastify";

function TaskDetails({ taskData }) {
  const [task, setTask] = useState([]);
  const [showInput, setShowInput] = useState(false);
  useEffect(() => {
    setTask(taskData);
  }, [taskData]);
  const handleShowInput = () => {
    setShowInput(true);
  };
  const handleSave = async () => {
    try {
      const data = await editWeeklyTask(task?._id, task);
      toast.success("edit task successfully.");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
    setShowInput(false);
  };

  return (
    <>
      {task?.map((taskObj) => (
        <div key={taskObj._id}>
          <form>
            <div className="bg-[FFFFFF]-100-100 rounded-lg shadow-lg w-12/12 px-10 py-5 my-5 mx-2">
              <div className="flex w-full justify-between">
                <h1 className="mb-2 font-normal">Week {taskObj.week}</h1>
                <div className="flex items-end ">
                  <button
                    type="button"
                    onClick={() =>
                      showInput ? handleSave() : handleShowInput()
                    }
                    className="bg-black text-white p-2 rounded-lg"
                  >
                    <div className="flex">
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
                          fill="currentColor"
                          class="bi bi-file-earmark-check"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                        </svg>
                      )}
                    </div>
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
                  <h1 className={showInput ? "hidden" : "text-sm pb-2"}>
                    {index + 1}) {pdWorkout}
                  </h1>
                  {showInput && index + 1 + ")"}
                  <input
                    type="text"
                    value={pdWorkout}
                    className={showInput ? "" : "hidden"}
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
              <div className="w-full">
                <label htmlFor="" className="font-semibold text-sm pb-2">
                  Technical Workout :{" "}
                </label>
              </div>
              {taskObj.technicalWorkouts.map((techWorkout, index) => (
                <div key={index}>
                  <h1 className={showInput ? "hidden" : "text-sm pb-2"}>
                    {index + 1}) {techWorkout}
                  </h1>
                  {showInput && index + 1 + ")"}
                  <input
                    type="text"
                    value={techWorkout}
                    className={showInput ? "" : "hidden"}
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
              <div className="w-full">
                <label htmlFor="" className="font-semibold text-sm pb-2">
                  Technical Workout :{" "}
                </label>
              </div>
              {taskObj.miscellaneousWorkouts.map((miscWorkout, index) => (
                <div key={index}>
                  <h1 className={showInput ? "hidden" : "text-sm pb-2"}>
                    {index + 1}) {miscWorkout}
                  </h1>
                  {showInput && index + 1 + ")"}
                  <input
                    type="text"
                    value={miscWorkout}
                    className={showInput ? "" : "hidden"}
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
