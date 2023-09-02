import React, { useEffect, useState } from 'react'
import Navbar from '../../components/common/nav/Navbar'
import TaskDetails from '../../components/admin/TaskDetails'
import { useParams } from 'react-router-dom'
import { useErrorHandler } from '../../hooks/ErrorHandler'
import { fetchTaskDetails } from '../../services/admin/task'

function AdminTaskDetails() {
    const { id } = useParams()
    const [task , setTask] = useState([])
    const { adminAutheticationHandler } = useErrorHandler()

    useEffect(()=>{
        const fetchTaskDetailsHelper = async () =>{
            try {
              const data = await fetchTaskDetails(id)
              console.log(data);
              setTask(data[0].tasks)
            } catch (error) {
                const {
                    response: { status },
                  } = error;
                  if (status === 401) {
                    adminAutheticationHandler(error);
                  }
            }
        }
        fetchTaskDetailsHelper()
    },[id])
  return (
    <div>
      <Navbar type={'admin'} />
      <div className="lg:ml-64">
      <section className="bg-gray-50 min-h-screen items-center justify-center p-5 lg:px-16 pt-5  mt-14">
      <TaskDetails taskData={task ? task : []}/>
      </section>
    </div>
    </div>
  )
}

export default AdminTaskDetails
