import React, { useEffect, useState } from "react";
import studentAxios from "../../axios/studentAxios";
function UploadTask() {
    const [task , setTask] = useState([])
    useEffect(()=>{
        async function getTask (){
            try {
            const  response = await studentAxios.get('/weekly-task')
            setTask(response?.data)
            console.log(response?.data);
            console.log(task);
                console.log('sad');
            } catch (error) {
                console.log(error);
            }
        }
        getTask()
    },[])
  return (
    <div className="lg:ml-64 mt-20">
      <section className="bg-gray-50 min-h-screen  items-center justify-center p-4 pt-0 mt-14">
        {task?.tasks?.map((obj)=>{
            return (<>
      <div className="bg-[FFFFFF]-100-100  rounded-lg shadow-lg w-8/12 p-10" >  
            <h1>Personal Development Workouts : </h1>
        <label htmlFor="">1 . Watch the movie “The Imitation Game”.</label>
        <br />
        <textarea type="text" className="w-full" placeholder="Write a short description about this task" />
        </div>
        <br />
        <div className="bg-[FFFFFF]-100-100  rounded-lg shadow-lg w-8/12 p-2 " >
        <h1>Technical Workouts : </h1>
        </div>
        <div className="bg-[FFFFFF]-100-100  rounded-lg shadow-lg w-8/12 p-2 " >
        <h1>hello</h1>
        </div>
      </>
     )
    })}
      </section>
    </div>
  );
}

export default UploadTask;
