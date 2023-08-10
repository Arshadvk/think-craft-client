import axios from "axios";
import { adminAPI } from "../constants/api";

const adminInstance = axios.create({
    baseURL: adminAPI,
    timeout: 3000, 
});

adminInstance.interceptors.request.use((req) => {
    if (localStorage.getItem('persist:admin')) {
        const adminCredentials  = localStorage.getItem('persist:admin')
        const adminCredentialObject = JSON.parse(adminCredentials)
        const adminToken = adminCredentialObject?.Token.replace(/^"(.*)"$/, '$1');
        req.headers.authorization =  adminToken
    
    }
    return req; 
});

adminInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (axios.isCancel(error)) {
            
            throw new axios.Cancel(`Request timed out after 3 seconds`);
        }
        return Promise.reject(error);
    }
);

export default adminInstance;
