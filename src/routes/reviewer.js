import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import ReviewerLoginPage from '../pages/reviewer/ReviewerLoginPage'
import ReviewerHomePage from '../pages/reviewer/ReviewerHomePage'
import { useSelector } from 'react-redux'
import ReviewerSetpasswordPage from '../pages/reviewer/ReviewerSetpasswordPage.'

function ReviewerRoute() {
  const IsReviewer = useSelector((state)=>state.Reviewer)
  return (
    <div>
      <Routes>
        <Route exact path='/' element={!IsReviewer.Token ?<ReviewerLoginPage/> :<ReviewerHomePage/>}/>
        <Route exact path='/login' element={IsReviewer.Token ? <ReviewerHomePage/> : <ReviewerLoginPage/>}/>
        <Route exact path='/setpassword' element={<ReviewerSetpasswordPage/>} />
      </Routes>
    </div>
  )
}

export default ReviewerRoute
