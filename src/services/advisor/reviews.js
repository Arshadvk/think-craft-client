import advisorAxios from '../../axios/advisorAxios'

export const reviewslist = async (type) => {

    const response = await advisorAxios.get(`/review-list`)
    console.log(response.data);
    return response.data
}
export const reviewslistForbooking = async (type,) => {
    try {
        const response = await advisorAxios.get(`/review-list?type=${type}`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}
export const reviewerList = async (domain) => {
    try {
        const response = await advisorAxios.get(`/reviewer-list`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}



export const findSlot = async (id) => {
        const response = await advisorAxios.get(`/slots/${id}`)
        return response.data
}

export const findReviewer = async (id) => {
        const response = await advisorAxios.get(`/reviewer-details/${id}`)
        return response.data?.data
   
}

export const bookSlot = async (value) => {
    const res = await advisorAxios.put('/book-slot', { value })
    const data = res.data
    return data
}

export const fetchOneReviewDetails = async (id) => {
    const res = await advisorAxios.get(`/review-list?id=${id}`)
    console.log('res pon', res);
    const data = res.data
    return data
}

export const updateReviewDetails = async (id, value) => {
    const res = await advisorAxios.put('/update-review-details', { id, value })
    console.log('res pon', res);
    const data = res.data
    return data
}

export const createNewReview = async (id, value) => {
    const res = await advisorAxios.put('/create-review', { id, value })
    const data = res.data
    return data
}