import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdvisorHomePage from '../pages/advisor/AdvisorHomePage'
import { useSelector } from 'react-redux'
import AdvisorProfilePage from '../pages/advisor/AdvisorProfilePage'
import SetPassword from '../components/common/setpassword/SetPassword'
import SetProfile from '../components/common/profile/SetProfile'
import Login from '../components/common/login/Login'
import ReviewerListPage from '../pages/advisor/ReviewerListPage'
import SlotBookingPage from '../pages/advisor/SlotBookingPage'
import MessagePage from '../components/common/message/MessagePage'
import AdvisorReviewListingPage from '../pages/advisor/AdvisorReviewListingPage'

function AdvisorRoute() {
  const IsAdvisor = useSelector((state) => state.Advisor)
  return (
    <div>
      <Routes>
        <Route exact path='/set-password/:id' element={<SetPassword type={'advisor'} />} />
        <Route exact path='/set-profile/:id' element={<SetProfile type={'advisor'} />} />


        <Route exact path='/' element={!IsAdvisor.Token ? <Login type={'advisor'} /> : <AdvisorHomePage />} />
        <Route exact path='/login' element={IsAdvisor.Token ? <AdvisorHomePage /> : <Login type={'advisor'} />} />
        <Route exact path='/profile' element={IsAdvisor.Token ? <AdvisorProfilePage /> : <Login type={'advisor'} />} />
        <Route exact path='/reviewer-list/:domain' element={IsAdvisor.Token ? <ReviewerListPage /> : <Login type={'advisor'} />} />
        <Route exact path='/book-slot/:id' element={IsAdvisor.Token ? <SlotBookingPage /> : <Login type={'advisor'} />} />
        <Route exact path='/message' element={IsAdvisor.Token ? <MessagePage type={'advisor'} /> : <Login type={'advisor'} />} />
        <Route exact path='/reviews-list' element={IsAdvisor.Token ? <AdvisorReviewListingPage /> : <Login type={'advisor'} />} />


      </Routes>
    </div>
  )
}

export default AdvisorRoute