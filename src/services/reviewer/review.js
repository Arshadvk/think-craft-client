import reviewerAxios from '../../axios/reviewerAxios'
export const fetchReviewList = async ()=>{
    const res = reviewerAxios.get('/review-list')
    const data = (await res).data
    return data 
}

export const fetchOneReviewDetails = async (id)=>{
    const res = reviewerAxios.get(`/review-list?id=${id}`)
    const data = (await res).data
    return data 
}

export const updateReviewMark = async (mark , id) =>{
    const res = reviewerAxios.put(`/update-review-details/${id}`,{mark})
    const data = (await res).data
    return data 
}