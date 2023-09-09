import adminAxios from '../../axios/adminAxios'

export const fetchUserDetails = async (user) =>{
    const res = await adminAxios.get(`/all-${user}`)
    const data = res.data
    return data
}
export const searchUserDetails = async (user, query) =>{
    const res = await adminAxios.get(`/all-${user}${query}`)
    const data = res.data
    return data
}

export const fetchDomains = async () =>{
    const res = await adminAxios.get(`/all-domain`)
    const data = res.data 
    return data
}