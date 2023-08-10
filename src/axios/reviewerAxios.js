import axios from "axios";
import { reviewerAPI } from "../constants/api";

const reviewerInstance = axios.create({
    baseURL: reviewerAPI,
    timeout : 3000
});

reviewerInstance.interceptors.request.use((req) => {
    if (localStorage.getItem('persist:reviewer')) {
        const reviewerCredentials = localStorage.getItem('persist:reviewer');
        const reviewerCredentialObject = JSON.parse(reviewerCredentials);
        const reviewerToken = reviewerCredentialObject?.Token.replace(/^"(.*)"$/, '$1');
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
