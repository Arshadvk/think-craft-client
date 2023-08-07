import React from 'react'
import {  Routes ,Route } from 'react-router-dom'
import AdvisorLoginPage from '../pages/advisor/AdvisorLoginPage'
import AdvisorHomePage from '../pages/advisor/AdvisorHomePage'
import AdvisorSetpasswordPage from '../pages/advisor/AdvisorSetpasswordPage'
import { useSelector } from 'react-redux'
import AdvisorProfilePage from '../pages/advisor/AdvisorProfilePage'

function  AdvisorRoute() {
  const IsAdvisor = useSelector ((state)=>state.Advisor)
  return (
    <div>
       <Routes>
        <Route exact path='/' element={<AdvisorHomePage/>}/>
        <Route exact path='/login' element={!IsAdvisor.Token ? <AdvisorLoginPage/>:<AdvisorHomePage/>}/>
        <Route exact path='/setpassword' element={<AdvisorSetpasswordPage/>}/>
        <Route exact path='/profile' element={<AdvisorProfilePage/>} />
      </Routes>
    </div>
  )
}

export default AdvisorRoute