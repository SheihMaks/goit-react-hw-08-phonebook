import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import { userApi } from "./FetchUser";

const initialState={
    user:{
        name:null,
        email:null,
    },
token:null,
isLogged:false,
load:false,
errorServer:false,
errorRegistration:false,
}

const sliceAuth=createSlice({
    name:'users',
    initialState,
    // reducers:{
    //     getLogin(state,{payload}){
    //         const {user,token}=payload;
    //         state.user.name=user.name;
    //         state.user.email=user.email
    //         state.token=token;
    //         state.isLogged=true;
    //     },
    //     getCurrentLogin(state, { payload }) {
    //         state.user.email = payload.user.email;
    //         state.user.name = payload.user.name;
    //         state.isLoggedIn = true;
    //     },
    // },
extraReducers:builder=>{
    builder.addMatcher(
    userApi.endpoints.logIn.matchFulfilled,
    (state,{payload})=>{
        const {user,token}=payload;
        state.user.name=user.name;
        state.user.email=user.email;
        state.token=token;
        state.isLogged=true;
        state.errorServer=false;
    });
    builder.addMatcher(
        userApi.endpoints.logIn.matchRejected,
        (state,{payload})=>{
            if(payload?.status===400){
                state.errorServer=true;
            }
    });
    builder.addMatcher(
        userApi.endpoints.registrationNewUser.matchFulfilled,
        (state,{payload})=>{
            const{user,token}=payload;
            state.user.email=user.email;
            state.user.name=user.name;
            state.token=token;
            state.isLogged=true;
            state.errorServer=false;
        });
    builder.addMatcher(
        userApi.endpoints.registrationNewUser.matchRejected,
        (state,{payload})=>{
            if(payload.status===400){
                state.errorRegistration=true
            }
        }
    );
    builder.addMatcher(
        userApi.endpoints.getCurrentUser.matchFulfilled,
        (state, {payload})=>{
            state.user.email = payload.email;
            state.user.name = payload.name;
            state.isLogged = true;
        });
    builder.addMatcher(
        userApi.endpoints.getCurrentUser.matchRejected,
            (state,{payload})=>{
                if(payload?.status===401){
                    state.token=``
                }
        });
    builder.addMatcher(
        userApi.endpoints.logOut.matchPending,
        (state)=>{
            state.load=true
        });
    builder.addMatcher(
        userApi.endpoints.logOut.matchFulfilled,
            ()=>{
                return {...initialState}
        });
    }
})

const persistConfig = {
    key: 'users',
    storage,
    whitelist:['token']
};

export const persistSliceUser=persistReducer(persistConfig,sliceAuth.reducer)

// export const {getLogin,getCurrentLogin}=sliceAuth.actions;

//Selectors



const getUserName=state=>state.users.user.name;

const getToken=state=>state.users.token;

const getIsLoggedIn=state=>state.users.isLogged;

const getLoadStatus=state=>state.users.load;

const getErrorServer=state=>state.users.errorServer;

const getErrorRegistration=state=>state.users.errorRegistration;

export const authSelectors={
    getIsLoggedIn,
    getUserName,
    getToken,
    getLoadStatus,
    getErrorServer,
    getErrorRegistration,
}
