import { Navigate } from "react-router-dom";

export default function AdminPublicRoute (props){
    if(localStorage.getItem('Admin')){
        return <Navigate to={'/admin/home'}/>
    }else{
        return props.children
    }
}