import axios from "axios";
import { advisorAPI } from "../constants/api";

const advisorInstance = axios.create({
    baseURL:advisorAPI,
})
export default advisorInstance