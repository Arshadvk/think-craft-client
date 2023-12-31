import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from '../pages/student/Home';
import Profile from '../pages/student/Profile';
import SetPassword from '../components/common/setpassword/SetPassword';
import SetProfile from '../components/common/profile/SetProfile';
import Login from '../components/common/login/Login';
import Task from '../pages/student/Task';
import Manifest from '../pages/student/Manifest';
import ReviewDetailPage from '../pages/student/ReviewDetailPage';
import VideoCall from '../pages/student/VideoCall';



function StudentRoute() {
  const IsAuth = useSelector((state) => state.Student);
  console.log(IsAuth)
  return (
    <div>
      <Routes>
        <Route exact path='/set-password/:id' element={<SetPassword type={"student"} />} />
        <Route exact path='/set-profile/:id' element={<SetProfile type={"student"} />} />

        <Route exact path="/" element={!IsAuth.Token ? <Login type={'student'} /> : <Home />} />
        <Route exact path='/login' element={IsAuth.Token ? <Home /> : <Login type={'student'} />} />
        <Route exact path='/profile' element={IsAuth.Token ? <Profile /> : <Login type={'student'} />} />
        <Route exact path='/weekly-task' element={IsAuth.Token ? <Task /> : <Login type={'student'} />} />
        <Route exact path='/manifest' element={IsAuth.Token ?  <Manifest /> : <Login type={'student'}/>} />
        <Route exact path='/review-details/:id' element={IsAuth.Token ?  <ReviewDetailPage /> : <Login type={'student'}/>} />
        <Route exact path='/call/:room' element={IsAuth.Token ?  <VideoCall /> : <Login type={'student'}/>} />
        
        <Route exact path='/review-details/:id' element={IsAuth.Token ? <ReviewDetailPage type={''} /> : <Login type={'student'} />} />
      </Routes>
    </div>
  )
}

export default StudentRoute
