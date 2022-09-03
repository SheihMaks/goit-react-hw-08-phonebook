import { createSlice } from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState={user:{name:null,number:null},
token:null,
isLogged:false}

const sliceAuth=createSlice({
    name:'auth',
    initialState,
extraReducers:{}
})

const persistConfig = {
    key: 'auth',
    storage,
    whitelist:['isLogged']
};

export const persistSliceUser=persistReducer(persistConfig,sliceAuth.reducer)



//Selectors

const getIsLoggedIn=state=>state.auth.isLogged

const getUserName=state=>state.auth.user.name

export const authSelectors={
    getIsLoggedIn,
    getUserName
}
