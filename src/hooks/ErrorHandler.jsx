import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StudentLogut } from "../redux/student/studentAuth";
import { AdminLogout } from "../redux/admin/adminAuth";
import { AdvisorLogout} from "../redux/advisor/advisorAuth";
import { ReviewerLogout } from "../redux/reviewer/reviewerAuth";

export function useErrorHandler(){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function studentAuthenticationHandler(props) {
        const { response: { status, data } } = props
        if (status === 401 && data.Auth === false ){
            dispatch(StudentLogut())
            localStorage.removeItem('student')
            navigate('/')
        }
    }
    function adminAutheticationHandler(props){
        const { response : {status ,data }} = props
        if (status === 401 && data.Auth === false ) {
            dispatch(AdminLogout())
            localStorage.removeItem('admin')
            navigate('/admin/login')
        }
    }
    function advisorAutheticationHandler(props){
        const {response : {status , data }} = props
        if (status === 401  && data.Auth === false ){
            dispatch(AdvisorLogout())
            localStorage.removeItem('advisor')
            navigate('/advisor/login')
        }
    }
    function reviewerAutheticationHandler(props){
        const {response : {status, data}} = props
        if (status === 401 && data.Auth === false){
            dispatch(ReviewerLogout())
            localStorage.removeItem('reviewer')
            navigate('/reviewer/login')
        }
    }
    return{studentAuthenticationHandler , adminAutheticationHandler , advisorAutheticationHandler , reviewerAutheticationHandler}
}