import studentAxios from "../../axios/studentAxios";

export const fetchReviewData = async () => {
    try {
        const res = await studentAxios.get('/weekly-review')
        console.log(res.data);
        const data = await res.data
        return data
    } catch (error) {
        
    }
} 