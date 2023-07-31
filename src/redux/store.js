import { configureStore,  } from "@reduxjs/toolkit";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer,persistStore} from "redux-persist"
import { StudentAuth } from "./student/studentAuth";
import storage from "redux-persist/lib/storage"
import { ReviewerAuth } from "./reviewer/reviewerAuth";
import { AdminAuth } from "./admin/adminAuth";
import { AdvisorAuth } from "./advisor/advisorAuth";


const studentPersistConfig = {key:"Student" , storage , version:1}
const reviewerPersistConfig = {key: "Reviewer" , storage , version:1}
const adminPersistConfig = {key:"Admin" , storage , version:1}
const advisorPersistConfig = {key:"Advisor" , storage , version:1}

const studentPersistReducer = persistReducer(studentPersistConfig , StudentAuth.reducer);
const reviewerPersistReducer = persistReducer(reviewerPersistConfig,ReviewerAuth.reducer)
const adminPersistReducer = persistReducer(adminPersistConfig, AdminAuth.reducer)
const advisorPersistReducer = persistReducer(advisorPersistConfig , AdvisorAuth.reducer)
export const Store = configureStore({
    reducer:{
        Student:studentPersistReducer,
        Reviewer:reviewerPersistReducer,
        Admin:adminPersistReducer,
        Advisor:advisorPersistReducer,

    },
    middleware:(getDefaultMiddleware)=>{
      return  getDefaultMiddleware({
            serializableCheck:{
                ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
            }
        })
    }
})

export const persistor = persistStore(Store)