import studentAxios from "../../axios/studentAxios";

export const fetchManifestData = async () => {
    const res = await studentAxios.get('/manifest')
    const data = await res.data
    console.log(data, res);
    return data
}