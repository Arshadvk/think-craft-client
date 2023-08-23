import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from '../pages/student/Home';
import Profile from '../pages/student/Profile';
import SetPassword from '../components/common/setpassword/SetPassword';
import SetProfile from '../components/common/profile/SetProfile';
import Login from '../components/common/login/Login';
import Task from '../pages/student/Task';
import Manifest from '../pages/student/Manifest';


function StudentRoute() {
  const IsAuth = useSelector((state)=>state.Student);
  console.log(IsAuth)
  return (
    <div>
      <Routes>
        <Route exact path ="/" element={!IsAuth.Token ? <Login type={'student'}/> : <Home/> } />
        <Route exact path='/login' element={IsAuth.Token? <Home/> : <Login type={'student'}/>} />
        <Route exact path='/set-password/:id' element={<SetPassword type={"student"}/>} />
        <Route exact path='/profile' element={<Profile/>} />
        <Route exact path='/set-profile/:id' element={<SetProfile type={"student"}/>} />
        <Route exact path='/task-upload'  element={<Task/>}/>
        <Route exact path='/manifest'  element={<Manifest/>}/>
        
        
      </Routes>
    </div>
  )
}

export default StudentRoute
