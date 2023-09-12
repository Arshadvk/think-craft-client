import studentAxios from "../../axios/studentAxios";


export const fetchChat = async ()=>{
    const res =  await studentAxios.get('/chat')
    const data = res.data 
    return data
}

export const fetchMessage = async(chatId)=>{
    const res = await studentAxios.get(`/message/${chatId}`)
    const data = res.data
    return data 
}