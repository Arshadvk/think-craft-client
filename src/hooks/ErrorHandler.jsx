import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StudentLogut } from "../redux/student/studentAuth";
import { AdminLogout } from "../redux/admin/adminAuth";
import { IsAdvisorLogin } from "../redux/advisor/advisorAuth";
import { IsReviewerLogin } from "../redux/reviewer/reviewerAuth";

export function useErrorHandler(){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function studentAuthenticationHandler(props) {
        const { response: { status, data } } = props
        if (status === 401 && data.Auth === false ){
            dispatch(StudentLogut())
            navigate('/')
        }
    }
    function adminAutheticationHandler(props){
        const { response : {status ,data }} = props
        if (status === 401 && data.Auth === false ) {
            dispatch(AdminLogout())
            navigate('/admin/login')
        }
    }
    function advisorAutheticationHandler(props){
        const {response : {status , data }} = props
        if (status === 401  && data.Auth === false ){
            dispatch(IsAdvisorLogin())
            navigate('/advisor/login')
        }
    }
    function reviewerAutheticationHandler(props){
        const {response : {status, data}} = props
        if (status === 401 && data.Auth === false){
            dispatch(IsReviewerLogin())
            navigate('/reviewer/login')
        }
    }
    return{studentAuthenticationHandler , adminAutheticationHandler , advisorAutheticationHandler , reviewerAutheticationHandler}
}