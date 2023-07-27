import axios from "axios";
import { studentAPI } from "../constants/api";

const studentInstance = axios.create({
    baseURL:studentAPI,
})
export default studentInstance