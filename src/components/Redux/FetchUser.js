import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi=createApi({
    reducerPath:'userApi',
    baseQuery:fetchBaseQuery({baseURL:'https://connections-api.herokuapp.com/'}),
    tagTypes:['User'],
    endpoints:builder=>({
        logIn:builder.mutation({
            query:(user)=>({
                url:'users/login',
                method:'POST',
                body:user,
        })
        })
    })



})
export const{useLogInMutation}=userApi;