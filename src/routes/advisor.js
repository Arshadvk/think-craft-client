import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdvisorHomePage from '../pages/advisor/AdvisorHomePage'
import { useSelector } from 'react-redux'
import AdvisorProfilePage from '../pages/advisor/AdvisorProfilePage'
import SetPassword from '../components/common/setpassword/SetPassword'
import SetProfile from '../components/common/profile/SetProfile'
import Login from '../components/common/login/Login'
import MessagePage from '../components/common/message/MessagePage'
import AdvisorReviewsListingPage from '../pages/advisor/AdvisorReviewsListingPage'
import AdvisorReviewDetails from '../pages/advisor/AdvisorReviewDetails'
import AdvisorScheduleReviews from '../pages/advisor/AdvisorScheduleReviews'

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
        <Route exact path='/message' element={IsAdvisor.Token ? <MessagePage type={'advisor'} /> : <Login type={'advisor'} />} />
        <Route exact path='/reviews-list' element={IsAdvisor.Token ? <AdvisorReviewsListingPage /> : <Login type={'advisor'} />} />
        <Route exact path='/review-details/:id' element={IsAdvisor.Token ? <AdvisorReviewDetails /> : <Login type={'advisor'} />} />
        <Route exact path='/review-schedule' element={IsAdvisor.Token ? <AdvisorScheduleReviews /> : <Login type={'advisor'} />} />


      </Routes>
    </div>
  )
}

export default AdvisorRoute