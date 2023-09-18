import reviewerAxios from '../../axios/reviewerAxios'
export const fetchReviewList = async () => {
    const res = reviewerAxios.get('/review-list')
    const data = (await res).data
    return data
}
export const fetchHomePageReviewList = async () => {

        const res = await reviewerAxios.get('/review-list?home=true')
        const data = res.data
        return data
}

export const fetchOneReviewDetails = async (id) => {
    const res = reviewerAxios.get(`/review-list?id=${id}`,)
    const data = (await res).data
    return data
}

export const updateReviewMark = async (id, value) => {
    const res = await reviewerAxios.put(`/update-review-details`, { id, value })
    const data = res.data
    return data
}

export const updatePendingTopic = async (id, pendingTopic) => {
    const res = await reviewerAxios.put('/update-review-details', { id, pendingTopic })
    const data = res.data
    return data
}

export const fetchSlotDetails = async () => {
    const res = await reviewerAxios.get('/slot-list')
    const data = res.data
    return data
}