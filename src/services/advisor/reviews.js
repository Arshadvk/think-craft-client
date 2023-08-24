import advisorAxios from '../../axios/advisorAxios'

export const reviewslist  = async () =>{
    try {
      const response = await advisorAxios.get('/review-list')
        return response
    } catch (error) {
        console.log(error);
    }
}

export const reviewerList = async (domain) =>{
    try {
       const response =  await advisorAxios.get(`/reviewer-list`)
        return response
    } catch (error) {
        console.log(error);
    }
}

export const findSlot = async  (id) =>{
    try {
        const response = await advisorAxios.get(`/slots/${id}`)
        return response
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

export const bookSlot = async (id) => {
    try {
        
    } catch (error) {
        
    }
} 