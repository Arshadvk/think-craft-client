import React, { useEffect, useState } from "react";
import { addTask, loadTasks } from "../../services/student/task";


function UploadTask() {
  const [task, setTask] = useState([]);
  const [psdWorkout , setPsdWorkout] = useState('')
  const [techWorkout , setTechWorkout] = useState('')
  const [miscWorkout , setMiscWorkout] = useState('')

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
  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    // console.log("hello" , psdWorkout);
    // console.log("hello" , techWorkout);
    // console.log("hello" , miscWorkout);
    const formData = new FormData()
    formData.append("psdWorkout", psdWorkout)
    // formData.append("techWorkout",techWorkout)
    // formData.append("miscWorkout",miscWorkout)
    try {
     

      const data = await addTask(formData)
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {task?.map((taskObj, taskIndex) => (
        <div key={taskObj._id}>
          <form onSubmit={(e)=>handleSubmit(e)}>
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
              <input type="file" onChange={(e)=>{setPsdWorkout(e.target.files[0]) }} accept=".pdf" className="" name="" id="" />
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
              <input type="file" onChange={(e)=>{setTechWorkout(e.target.files[0]) }} className="" accept=".pdf" name="" id="" />
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
              <input type="file" onChange={(e)=>{setMiscWorkout(e.target.files[0]) }} accept=".pdf" className="" name="" id="" />

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
