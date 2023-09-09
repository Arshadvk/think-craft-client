import reviewerAxios from '../../axios/reviewerAxios'
export const fetchReviewList = async ()=>{
    const res = reviewerAxios.get('/review-list')
    const data = (await res).data
    return data 
}

export const fetchOneReviewDetails = async (id)=>{
    const res = reviewerAxios.get(`/review-list?id=${id}` ,)
    const data = (await res).data
    return data 
}

export const updateReviewMark = async (mark , student , week  , weekStatus  ) =>{
    const res = await reviewerAxios.put(`/update-review-details`, {mark , student , week , weekStatus })
    const data =  res.data
    return data 
}

export const updatePendingTopic = async (pendingTopic , student , week ) =>{
    const res = await reviewerAxios.put('/update-review-details' , {pendingTopic , student , week})
    const data = res.data
    return data
}

export const fetchSlotDetails = async () =>{
    const res = await reviewerAxios.get('/slot-list' )
    const data = res.data 
    return data 
}