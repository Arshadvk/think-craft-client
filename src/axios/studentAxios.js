import axios from "axios";
import { studentAPI } from "../constants/api";

const studentInstance = axios.create({
    baseURL:studentAPI,
    timeout : 3000
})
studentInstance.interceptors.request.use((req) => {
    if (localStorage.getItem('persist:student')){
        const studentCredentials  = localStorage.getItem('persist:student')
        const studentCredentialObject = JSON.parse(studentCredentials)
        const studentToken = studentCredentialObject?.Token.replace(/^"(.*)"$/, '$1');
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