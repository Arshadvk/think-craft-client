import studentAxios from "../../axios/studentAxios";
import { useErrorHandler } from "../../hooks/ErrorHandler";

export const fetchReviewData = async () => {
   const {studentAuthenticationHandler} = useErrorHandler()
    try {
        
        const res = await studentAxios.get('/weekly-review')
        console.log(res.data);
        const data = await res.data
        return data
    } catch (error) {
        const {response : {status}} = error
        if (status === 401) {
            studentAuthenticationHandler(error)
        }
    }
} 

