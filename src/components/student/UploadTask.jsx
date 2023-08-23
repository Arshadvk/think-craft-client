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
        setTask(data.tasks);
      } catch (error) {
        console.log(error);
      }
    }
    getTask();
  }, []);
  
  const formik = useFormik({
    initialValues: {
      personalDevelopmentWorkoutDesc: Array(task[0]?.personalDevelopmentWorkout.length),
      technicalWorkoutDesc: Array(task[0]?.technicalWorkouts.length),
      miscellaneousWorkoutDesc: Array(task[0]?.miscellaneousWorkouts.length)
    },
    validationSchema: Yup.object({
      personalDevelopmentWorkoutDesc: Yup.string(),
      technicalWorkoutDesc: Yup.string(),
      miscellaneousWorkoutDesc: Yup.string()
    }),
    onSubmit: (values  ,{resetForm}) => {
    
      console.log("Submitted values:", values);
      resetForm()
    }
  });
  console.log("tasks" , task);
  console.log(task[0]?.personalDevelopmentWorkout.length);
  console.log(task[0]?.technicalWorkouts.length)
  console.log(task[0]?.miscellaneousWorkouts.length);
  console.log(updWorkout);
  const handleSubmit = () =>{
    console.log('hello');
  }
  return (
    <div className="lg:ml-64">
      <section className="bg-gray-50 min-h-screen items-center justify-center p-5 lg:px-16 pt-5 pt-0 mt-14">
        {task.map((taskObj) => (
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
                  <textarea
                    type="text"
                    name="personalDevelopmentWorkoutDesc"
                    value={updWorkout[index]}
                    onChange={(e)=>{setPdWork(e.target.value)}}
                    onBlur={formik.handleBlur}
                    className="w-full text-sm"
                    placeholder="Write a short description about this task"
                  />
                </>
              ))}
            </div>

            <div className="bg-[FFFFFF]-100-100  rounded-lg shadow-lg w-12/12 px-10 py-5 my-5 mx-2 ">
              <label htmlFor="" className="font-semibold text-sm mb-5">
                Technical Workout :
              </label>
              {taskObj.technicalWorkouts.map((techWorkout, index) => (
                <>
                  <h1 className="text-sm pb-2">
                    {index + 1} ) {techWorkout}
                  </h1>
                  <textarea
                    type="text"
                    name="technicalWorkoutDesc"
                    value={formik.values.technicalWorkoutDesc[index]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full text-sm"
                    placeholder="Write a short description about this task"
                  />
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
                  <textarea
                    type="text"
                    value={formik.values.miscellaneousWorkoutDesc[index]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full text-sm"
                    placeholder="Write a short description about this task"
                  />
                </>
              ))}
              <div className="flex items-end">

            <button type="submit" onClick={handleSubmit} className="bg-black text-white p-2 rounded-lg">Upload</button>
              </div>
            </div>
            </form>
          </div>
        ))}
      </section>
    </div>
  );
}

export default UploadTask;
