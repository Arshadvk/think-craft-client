import { createSlice } from "@reduxjs/toolkit";

export const AdminAuth = createSlice({
    name:"Admin",
    initialState:{
        Token:null,
    },reducers:{
        IsAdminLogin(state,action){
            state.Token = action.payload.token
        },AdminLogout(state , action){
            state.Token ="" ;
        }

    }
})

export const {IsAdminLogin ,AdminLogout } =AdminAuth.actions
export default AdminAuth.reducer;