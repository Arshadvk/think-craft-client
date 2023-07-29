import axios from "axios";
import { reviewerAPI } from "../constants/api";

const reviewerInstance = axios.create({
    baseURL:reviewerAPI,
})
export default reviewerInstance