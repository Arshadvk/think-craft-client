import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ReviewerHomePage from '../pages/reviewer/ReviewerHomePage'
import { useSelector } from 'react-redux'
import ReviewerProfilePage from '../pages/reviewer/ReviewerProfilePage'

import SetPassword from '../components/common/setpassword/SetPassword'
import SetProfile from '../components/common/profile/SetProfile'
import Login from '../components/common/login/Login'
import ReviewerSlotListing from '../pages/reviewer/ReviewerSlotListing'
import MessagePage from '../components/common/message/MessagePage'
import ReviewerReviewListingPage from '../pages/reviewer/ReviewerReviewListingPage'
import ReviewerReviewDetail from '../pages/reviewer/ReviewerReviewDetail'
import ReviewerAddSlot from '../pages/reviewer/ReviewerAddSlot'
import ReviewerVideoCall from '../pages/reviewer/ReviewerVideoCall'

function ReviewerRoute() {
  const IsReviewer = useSelector((state) => state.Reviewer)
  return (
    <div>
      <Routes>
        <Route exact path='/set-profile/:id' element={<SetProfile type={'reviewer'} />} />
        <Route exact path='/set-password/:id' element={<SetPassword type={"reviewer"} />} />


        <Route exact path='/' element={!IsReviewer.Token ? <Login type={'reviewer'} /> : <ReviewerHomePage />} />
        <Route exact path='/login' element={IsReviewer.Token ? <ReviewerHomePage /> : <Login type={'reviewer'} />} />
        <Route exact path='/add-slot' element={IsReviewer.Token ? <ReviewerAddSlot /> : <Login type={'reviewer'} />} />
        <Route exact path='/profile' element={IsReviewer.Token ? <ReviewerProfilePage /> : <Login type={'reviewer'} />} />
        <Route exact path='/slots-list' element={IsReviewer.Token ? <ReviewerSlotListing /> : <Login type={'reviewer'} />} />
        <Route exact path='/message' element={IsReviewer.Token ? <MessagePage type={'reviewer'} /> : <Login type={'reviewer'} />} />
        <Route exact path='/reviews-list' element={IsReviewer.Token ? <ReviewerReviewListingPage /> : <Login type={'reviewer'} />} />
        <Route exact path='/review-details/:id' element={IsReviewer.Token ? <ReviewerReviewDetail /> : <Login type={'reviewer'} />} />
        <Route exact path='/call/:room' element={IsReviewer.Token ? <ReviewerVideoCall /> : <Login type={'reviewer'} />} />
      </Routes>
    </div>
  )
}

export default ReviewerRoute
