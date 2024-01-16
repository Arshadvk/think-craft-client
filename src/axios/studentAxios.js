import axios from "axios";
import { studentAPI } from "../constants/api";

const studentInstance = axios.create({
    baseURL:studentAPI,
    timeout : 6000
})
studentInstance.interceptors.request.use((req) => {
    if (localStorage.getItem('student')){
        const studentToken  = localStorage.getItem('student')
        req.headers.authorization =  studentToken
    }
        return req; 
    
})
studentInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (axios.isCancel(error)) {
            throw new axios.Cancel(`Request timed out after 3 seconds`);
        }
        return Promise.reject(error);
    }
);


export default studentInstance