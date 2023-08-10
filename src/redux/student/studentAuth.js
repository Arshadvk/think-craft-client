import { createSlice } from "@reduxjs/toolkit";

export const StudentAuth = createSlice({
    name:"student",
    initialState:{
        Token:null,
    },
    reducers:{
        IsStudentLogin(state , action){
            state.Token = action.payload.token;
        },
        StudentLogut(state , action){
            state.Token = "" ;
        },
    },
})
export const {IsStudentLogin,StudentLogut } = StudentAuth.actions
export default StudentAuth.reducer;