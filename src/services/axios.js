import axios from "axios";

export const fetchCountryCode = async () =>{
    try {
        const res = await axios.get('https://restcountries.com/v3.1/all')
        console.log(res.data);
        return res.data
    } catch (error) {
        console.log(error);
    }
}