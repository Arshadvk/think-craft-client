import axios from "axios";
import { reviewerAPI } from "../constants/api";

const reviewerInstance = axios.create({
    baseURL: reviewerAPI,
    timeout : 6000
});

reviewerInstance.interceptors.request.use((req) => {
    if (localStorage.getItem('reviewer')) {
        const reviewerToken = localStorage.getItem('reviewer');
        req.headers.authorization = reviewerToken;
  
    }
    return req;
});

reviewerInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (axios.isCancel(error)) {
            throw new axios.Cancel(`Request timed out after 3 seconds`);
        }
        return Promise.reject(error);
    }
);

export default reviewerInstance;
