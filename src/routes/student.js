import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import StudentLogin from '../pages/student/Login'
import { useSelector } from 'react-redux'
import Home from '../pages/student/Home';
import SetPasswordStudent from '../pages/student/SetPassword';
function StudentRoute() {
  const IsAuth = useSelector((state)=>state.Student);
  console.log(IsAuth)
  return (
    <div>
      <Routes>
        <Route exact path ="/" element={!IsAuth.Token ? <StudentLogin/> : <Home/> } />
        <Route exact path='/login' element={IsAuth.Token? <Home/> : <StudentLogin/>} />
        <Route exact path='/setpassword' element={<SetPasswordStudent/>} />
      </Routes>
    </div>
  )
}

export default StudentRoute
