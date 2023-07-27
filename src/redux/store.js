import { configureStore,  } from "@reduxjs/toolkit";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer,persistStore} from "redux-persist"
import { StudentAuth } from "./student/studentAuth";
import storage from "redux-persist/lib/storage"


const studentPersistConfig = {key:"Student" , storage , version:1}


const studentPersistReducer = persistReducer(studentPersistConfig , StudentAuth.reducer);

export const Store = configureStore({
    reducer:{
        Student:studentPersistReducer
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