import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi=createApi({
    reducerPath:'userApi',
    baseQuery:fetchBaseQuery({baseURL:'https://connections-api.herokuapp.com/users',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().users.token;
        if (token) {
        headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
        },
}),
    tagTypes:['User'],
    endpoints:builder=>({
        logIn:builder.mutation({
            query:(payload)=>({
                url:'/login',
                method:'POST',
                body:payload,
            }),
            providesTags:['User']
        }),
        registrationNewUser:builder.mutation({
            query:(payload)=>({
                url:'/signup',
                method:'POST',
                body:payload,
            }),
            invalidatesTags:['User']
        }),
        getCurrentUser:builder.query({
            query:()=>'/current',
        }),
    })
})

export const{useGetCurrentUserQuery,useLogInMutation,useRegistrationNewUserMutation}=userApi;