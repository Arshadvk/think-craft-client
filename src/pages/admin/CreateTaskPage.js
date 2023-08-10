import React from 'react'
import Navbar from '../../components/common/nav/Navbar'
import CreateTask from '../../components/admin/task/CreateTask'

function CreateTaskPage() {
  return (
    <div>
      <Navbar type={"admin"} />
      <CreateTask />
    </div>
  )
}

export default CreateTaskPage
