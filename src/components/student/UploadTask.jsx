import React, { useEffect, useState } from "react";
import { loadTasks } from "../../services/student/task";
import * as Yup from "yup";
import { useFormik } from "formik";

function UploadTask() {
  const [task, setTask] = useState([]);
  const [inputValues, setInputValues] = useState({
    personalDevelopmentWorkoutDesc: Array(
      task?.personalDevelopmentWorkout?.length
    ).fill(""),
    technicalWorkoutDesc: Array(task?.technicalWorkouts?.length).fill(""),
    miscellaneousWorkoutDesc: Array(task?.miscellaneousWorkouts?.length).fill(
      ""
    ),
  });

  useEffect(() => {
    async function getTask() {
      try {
        const data = await loadTasks();
        console.log(await data, "hello");
        setTask(data?.tasks);
      } catch (error) {
        console.log(error);
      }
    }
    getTask();
  }, []);

  const formik = useFormik({
    initialValues: {
      personalDevelopmentWorkoutDesc:
        inputValues.personalDevelopmentWorkoutDesc,
      technicalWorkoutDesc: inputValues.technicalWorkoutDesc,
      miscellaneousWorkoutDesc: inputValues.miscellaneousWorkoutDesc,
    },
    validationSchema: Yup.object({
      personalDevelopmentWorkoutDesc: Yup.array().of(Yup.string()),
      technicalWorkoutDesc: Yup.array().of(Yup.string()),
      miscellaneousWorkoutDesc: Yup.array().of(Yup.string()),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Submitted values:", values);
      resetForm();
    },
  });
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <>
      {task?.map((taskObj, taskIndex) => (
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
                  <div key={index}></div>
                </>
              ))}
              <input type="file" className="" name="" id="" />
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
                  <div key={index}>

                  </div>
                </>
              ))}
              <input type="file" className="" name="" id="" />
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
                  <div key={index}>
                   
                  </div>
                </>
              ))}
              <div className="justify-end items-center">
              <input type="file"  className="" name="" id="" />

              </div>

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

export default UploadTask;
