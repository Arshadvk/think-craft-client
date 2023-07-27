import axios from "axios";
import { adminAPI } from "../constants/api";

const adminInstance = axios.create({
    baseURL:adminAPI
})
export default adminInstance