import adminAxios from '../../axios/adminAxios'

export const fetchDomainAdmin = async () =>{
   const res = await adminAxios.get('/all-domain')
   const data = await res.data
   return data 
}

export const fetchTasksByDomain = async (domain) =>{
   const res = await adminAxios.get(`/all-task?domain=${domain}`)
   const data = await res.data
   console.log(res);
   return data 
}

export const fetchTaskDetails = async (id) =>{
   const res = await adminAxios.get(`/task?id=${id}`)
   const data = await res.data
   console.log(res);
   return data 
}

export const editWeeklyTask = async (id , value)=>{
   const res = await adminAxios.put('edit-task', {id , value})
   const data = res.data
   return data 
}