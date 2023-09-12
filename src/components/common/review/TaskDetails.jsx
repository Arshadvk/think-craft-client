import React, { useEffect, useState } from "react";
import taskDetails from "../../../assets/image/taskCo.jpg";
import { updateReviewDetails } from "../../../services/advisor/reviews";
import { toast } from "react-toastify";
function TaskDetails({ user , week , student , id  ,taskStatus}) {
  const [showInput, setShowInput] = useState(false);
  const [seminar, setSeminar] = useState("Not added");
  const [progress, setProgress] = useState("Not added");
  const [status , setStatus] = useState(true)
  const [typing, setTyping] = useState("Not added");

  useEffect(()=>{
    setSeminar(taskStatus?.seminar)
    setProgress(taskStatus?.progress)
    setTyping(taskStatus?.typing)
  },[taskStatus])
  const handleClick = () => {
    setShowInput(showInput ? false : true);
  };
  const handleSave = () =>{
    
    console.log(seminar , progress , typing , "studenfdd" , student);
    const value = {
      seminar : seminar , 
      progress : progress ,
      typing : typing , 
      weekStatus : status ,
      week : week ,
      student : student
    }
    updateReviewDetailsHelper(value)
    setShowInput(showInput ? false : true);

  }
  const updateReviewDetailsHelper = async (value) =>{
    try {
      const data = await updateReviewDetails(id ,value )
      toast.success('task status updated successfully.');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
  return (
    <div className="shadow p-3 rounded ">
      <div className="flex">
        <div className="w-11/12">
          <h1 className="text-sm font-bold bg-black p-1 rounded w-4/12 text-white text-center">
            Task Details
          </h1>
        </div>
        <div className={ user === "advisor" ? "" : "hidden"}>
          <button onClick={ showInput ? handleSave : handleClick}>
            {!showInput   ? (
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
                fill="green"
                class="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/3 p-3">
          <img
            src={taskDetails}
            alt=""
            className="rounded-md shadow-xl"
            srcset=""
          />
        </div>
        <div className="m-3">
          <h1>
            Seminar Video :{" "}
            {showInput && (
              <select
              className="rounded w-24"
              value={seminar}
              onChange={(e) => setSeminar(e.target.value)}
            >
              <option value="Not added">Not added</option>
              <option value="completed">Completed</option>
            </select>
            
            )}{" "}
            <span
              className={
                seminar === "Not added"
                  ? "text-red-600 text-sm font-semibold"
                  : "text-green-600 text-sm font-semibold"
              }
            >
              {" "}
              {!showInput && seminar}
            </span>
          </h1>

          <h1>
            Progress Video :{" "}
            {showInput && (
               <select
               className="rounded w-24"
               value={progress}
               onChange={(e) => setProgress(e.target.value)}
             >
               <option value="Not added">Not added</option>
               <option value="completed">Completed</option>
             </select>
            )}{" "}
            <span
              className={
                progress === "Not added"
                  ? "text-red-600 text-sm font-semibold"
                  : "text-green-600 text-sm font-semibold"
              }
            >
              {" "}
              {!showInput && progress}
            </span>
          </h1>
          <h1>
            Typing :{" "}
            {showInput && (
              <select
              className="rounded w-24"
              value={typing}
              onChange={(e) => setTyping(e.target.value)}
            >
              <option value="Not added">Not added</option>
              <option value="completed">Completed</option>
            </select>
            )}{" "}
            <span
              className={
                typing === "Not added"
                  ? "text-red-600 text-sm font-semibold"
                  : "text-green-600 text-sm font-semibold"
              }
            >
              {" "}
              {!showInput && typing}
            </span>
          </h1>
          <h1 className={user === 'advisor'  ?'' : 'hidden' }>
             next  week {" "}
            {showInput && (
              <select
              className="rounded w-24"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value='failed'>failed</option>
              <option value='pass'>pass</option>
            </select>
            )}{" "}
            <span
              className={
                status === false
                  ? "text-red-600 text-sm font-semibold"
                  : "text-green-600 text-sm font-semibold"
              }
            >
              {" "}
              {!showInput && status}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
