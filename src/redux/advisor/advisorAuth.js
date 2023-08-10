import { createSlice } from "@reduxjs/toolkit";

export const AdvisorAuth = createSlice({
    name:"advisor",
    initialState:{
        Token:null,
    },reducers:{
        IsAdvisorLogin(state,action){
            state.Token = action.payload.Token
        },
        AdvisorLogout(state,action){
            state.Token = ""
        },
    },
})
export const {IsAdvisorLogin , AdvisorLogout} = AdvisorAuth.actions
export default AdvisorAuth.reducer;