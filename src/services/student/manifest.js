import studentAxios from "../../axios/studentAxios";

export const fetchManifestData = async () => {
    const res = await studentAxios.get('/manifest')
    const data = await res.data
    console.log(data, res);
    return data
}

export const fetchManifestPerReview = async (week)=>{
    const res = await studentAxios.get(`/weekly-review?week=${week}`)
    const data = await res.data
    return data
}