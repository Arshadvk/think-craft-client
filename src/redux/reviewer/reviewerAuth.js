import { createSlice } from "@reduxjs/toolkit";

export const ReviewerAuth = createSlice({
    name:"reviewer",
    initialState:{
        Token:null,
    },reducers:{
        IsReviewerLogin(state,action){
            state.Token = action.payload.token;
        },ReviewerLogout(state , action){
            state.Token = "" ;
        },
    },
})

export const {IsReviewerLogin , ReviewerLogout} = ReviewerAuth.actions
export default ReviewerAuth.reducer;