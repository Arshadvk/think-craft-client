import advisorAxios from '../../axios/advisorAxios'

export const reviewslist  = async (type) =>{
    try {
      const response = await advisorAxios.get(`/review-list`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}
export const reviewslistForbooking  = async (type) =>{
    try {
      const response = await advisorAxios.get(`/review-list?type=${type}`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}
export const reviewerList = async (domain) =>{
    try {
       const response =  await advisorAxios.get(`/reviewer-list`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}



export const findSlot = async  (id) =>{
    try {
        const response = await advisorAxios.get(`/slots/${id}`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const findReviewer = async (id) => {
    try {
        console.log(id);
        const response = await advisorAxios.get(`/reviewer-details/${id}` )
        return response.data?.data
    } catch (error) {
        console.log(error);
    }
}

export const bookSlot = async (value) => {
   const res = await advisorAxios.put('/book-slot', {value})
   const data = res.data
   return data 
} 

export const fetchOneReviewDetails = async (id)=>{
    const res = await advisorAxios.get(`/review-list?id=${id}`)
    const data = res.data 
    return data 
} 