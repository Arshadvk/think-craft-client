import React from 'react'
import VideoCallContainer from '../../components/video-call/VideoCallContainer'

function ReviewerVideoCall() {
  return (
    <div className='container mx-auto bg-slate-900 py-5 flex flex-col relative' >

    <VideoCallContainer role={"reviewer"} />
  </div>
  )
}

export default ReviewerVideoCall
