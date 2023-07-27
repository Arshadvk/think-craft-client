import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import StudentLogin from '../pages/student/Login'
import { useSelector } from 'react-redux'
import Home from '../pages/student/Home';
function StudentRoute() {
  const IsAuth = useSelector((state)=>state.Student);
  console.log(IsAuth)
  return (
    <div>
      <Routes>
        <Route exact path ="/" element={!IsAuth.Token ? <Home/> : <StudentLogin/> } />
        <Route exact path='/login' element={IsAuth.Token? <Home/> : <StudentLogin/>} />
      </Routes>
    </div>
  )
}

export default StudentRoute
