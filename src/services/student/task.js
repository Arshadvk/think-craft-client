import studentAxios from "../../axios/studentAxios";

export const loadTasks = async () =>{
    try {
        const res = await studentAxios.get('/weekly-task')
        console.log(res.data);
        const data  = await res.data
        
        return data
    } catch (error) {
        
    }
}