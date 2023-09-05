import React, { useEffect, useState } from "react";
import { loadTasks } from "../../services/student/task";
import * as Yup from 'yup'
import { useFormik } from "formik";

function UploadTask() {
  const [task, setTask] = useState([]);
  const [updWorkout , setPdWork] = useState([])

  useEffect(() => {
    async function getTask() {
      try {
        const data = await loadTasks();
        console.log(await data , "hello")
        setTask(data?.tasks);
      } catch (error) {
        console.log(error);
      }
    }
    getTask();
  }, []);
  console.log(task);
  const formik = useFormik({
    initialValues: {
      personalDevelopmentWorkoutDesc: Array(task?.personalDevelopmentWorkout?.length),
      technicalWorkoutDesc: Array(task?.technicalWorkouts),
      miscellaneousWorkoutDesc: Array(task?.miscellaneousWorkouts)
    },
    validationSchema: Yup.object({
      personalDevelopmentWorkoutDesc: Yup.string(),
      technicalWorkoutDesc: Yup.string(),
      miscellaneousWorkoutDesc: Yup.string()
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Submitted values:", values);
      resetForm();
    }
  });
  console.log("tasks" , task);
  console.log(task?.personalDevelopmentWorkout);
  console.log(task?.technicalWorkouts)
  console.log(task?.miscellaneousWorkouts);
  console.log(updWorkout);

  return (
<>
        {task?.map((taskObj) => (
          <div key={taskObj._id}>
             <form onSubmit={formik.handleSubmit}>
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

            <button type="submit"  className="bg-black text-white p-2 rounded-lg">Upload</button>
              </div>
            </div>
            </form>
          </div>
        ))}
   
            </>
  );
}

export default UploadTask;
