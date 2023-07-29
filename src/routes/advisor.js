import React from 'react'
import {  Routes ,Route } from 'react-router-dom'
import AdvisorLoginPage from '../pages/advisor/AdvisorLoginPage'

function  AdvisorRoute() {
  return (
    <div>
       <Routes>
        <Route exact path='/login' element={<AdvisorLoginPage/>}/>
      </Routes>
    </div>
  )
}

export default AdvisorRoute