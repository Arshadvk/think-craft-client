import axios from "axios";
import { advisorAPI } from "../constants/api";

const advisorInstance = axios.create({
    baseURL: advisorAPI,
    timeout: 3000,
});

advisorInstance.interceptors.request.use((req) => {
    if (localStorage.getItem('persist:advisor')) {
        const advisorCredentials = localStorage.getItem('persist:advisor');
        const advisorCredentialObject = JSON.parse(advisorCredentials);
        const advisorToken = advisorCredentialObject?.Token.replace(/^"(.*)"$/, '$1');
        req.headers.authorization = advisorToken;
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
