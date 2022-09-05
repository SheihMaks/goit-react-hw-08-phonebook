import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi=createApi({
    reducerPath:'userApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://connections-api.herokuapp.com/users',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().users.token;
        if (token) {
        headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
        },
}),
    // tagTypes:['User'],
    endpoints:builder=>({
        logIn:builder.mutation({
            query:(payload)=>({
                url:'/login',
                method:'POST',
                body:payload,
            }),
            // providesTags:['User']
        }),
        registrationNewUser:builder.mutation({
            query:(payload)=>({
                url:'/signup',
                method:'POST',
                body:payload,
            }),
            // invalidatesTags:['User']
        }),
        getCurrentUser:builder.query({
            query:()=>'/current',
        }),
        logOut:builder.mutation({
            query:payload=>({
                url:'/logOut',
                method:'POST',
                body:payload

            })
            
        })
    })
})

export const{useGetCurrentUserQuery,useLogInMutation,useRegistrationNewUserMutation, useLogoutMutation}=userApi;