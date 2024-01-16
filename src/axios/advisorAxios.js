import axios from "axios";
import { advisorAPI } from "../constants/api";

const advisorInstance = axios.create({
    baseURL: advisorAPI,
    timeout: 6000,
});

advisorInstance.interceptors.request.use((req) => {
    if (localStorage.getItem('advisor')) {
        const advisorToken = localStorage.getItem('advisor');
 
        req.headers.authorization = advisorToken;
        console.log(advisorToken);
    }
    return req;
});

advisorInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (axios.isCancel(error)) {
            throw new axios.Cancel(`Request timed out after 3 seconds`);
        }
        return Promise.reject(error);
    }
);

export default advisorInstance;
