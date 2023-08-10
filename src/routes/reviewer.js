import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import ReviewerHomePage from '../pages/reviewer/ReviewerHomePage'
import { useSelector } from 'react-redux'
import ReviewerProfilePage from '../pages/reviewer/ReviewerProfilePage'

import SetPassword from '../components/common/setpassword/SetPassword'
import SetProfile from '../components/common/profile/SetProfile'
import Login from '../components/common/login/Login'

function ReviewerRoute() {
  const IsReviewer = useSelector((state)=>state.Reviewer)
  return (
    <div>
      <Routes>
        <Route exact path='/' element={!IsReviewer.Token ?<Login type={'reviewer'}/> :<ReviewerHomePage/>}/>
        <Route exact path='/login' element={IsReviewer.Token ? <ReviewerHomePage/> : <Login type={'reviewer'}/>}/>
        <Route exact path='/setpassword/:id' element={<SetPassword type={"reviewer"}/>} />
        <Route exact path='/profile' element={<ReviewerProfilePage/>} />
        <Route exact path='/set-profile/:id' element={<SetProfile type={'reviewer'}/>}/>
      </Routes>
    </div>
  )
}

export default ReviewerRoute
