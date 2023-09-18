import studentAxios from "../../axios/studentAxios";

export const loadTasks = async () =>{
    try {
        const res = await studentAxios.get('/weekly-task')
        console.log("hello",res.data);
        const data  =  res.data
        
        return data
    } catch (error) {
        console.log(error);
    }
}

