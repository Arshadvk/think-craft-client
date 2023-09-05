import { createSlice } from "@reduxjs/toolkit";

export const AdvisorReviewDetails = createSlice({
    name : 'review-advisor' ,
    initialState : [] ,
    reducers : {
        setAdvisorReviewData (state , action){
            state = action.payload
        },
        unsetAdvisorReviewData (state){
            state = []
        }
    }
})
export const {setAdvisorReviewData ,unsetAdvisorReviewData } = AdvisorReviewDetails.actions
export default Ad