import studentAxios from "../../src/axios/studentAxios";
import advisorAxios from '../../src/axios/advisorAxios'
import  reviewerAxios  from "../../src/axios/reviewerAxios";
import adminAxios from "../axios/adminAxios";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { IsStudentLogin } from "../redux/student/studentAuth";
import { IsAdvisorLogin } from "../../src/redux/advisor/advisorAuth";
import {IsReviewerLogin} from '../../src/redux/reviewer/reviewerAuth'
import { IsAdminLogin } from "../redux/admin/adminAuth";


export function useLoginHandle(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function loginHandle(props){
      console.log(props);
      const {email , password , user , setErrorMessage2 }  = props

      if(user === "student"){
        studentAxios.post("/login", { email, password }).then((res) => {
            const result = res.data?.studentToken            ;
            console.log(result);
            if (result?.status) {
              const token = result.token;
              dispatch(IsStudentLogin({ token: token }));
              navigate("/");
            } else {
              setErrorMessage2(result.message);
            }
          }).catch((error)=>{
            setErrorMessage2('password is incorrect')
          })
      }
      else if (user === 'advisor'){
        advisorAxios.post("/login", { email, password }).then((res) => {
            const result = res.data.token;
            console.log(result);
            if (result?.status) {
              const token = result?.token;
              dispatch(IsAdvisorLogin({ Token: token }));
              navigate("/advisor");
            } else {
              setErrorMessage2(result?.message);
            }
          }).catch((error)=>{
            console.log(error.message);
            setErrorMessage2('password is incorrect')
          })

      }
      else if( user === 'reviewer'){
        reviewerAxios.post("/login", { email, password }).then((res) => {
            const result = res.data.message;
            if (result?.status) {
              const token = result.token;
              dispatch(IsReviewerLogin({ token: token }));
              navigate("/reviewer");
            } else {
              setErrorMessage2(result?.message);
            }
          }).catch((error)=>{
            setErrorMessage2('password is incorrect')
          })
      }
      else if (user === 'admin' ){
        adminAxios.post("/login", { email, password }).then((res) => {
            const result = res.data.message;
            if (result?.status) {
              const token = result?.token;
              dispatch(IsAdminLogin({ token: token }));
              navigate("/admin");
            } else {
              setErrorMessage2(result?.message);
            }
          }).catch((error)=>{
            setErrorMessage2('password is incorrect')
          })
      }
    }
    return {loginHandle}
}