import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().users.token;
        console.log(token)
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
        },
        }),
    
    tagTypes:['contacts'],
    endpoints: builder => ({
        getContacts: builder.query({
        query: () => `/contacts`,
        providesTags:['Contact']
        }),
        addContacts: builder.mutation({
            query:  (data)=>({ 
                url:`/contacts`,
                method:'POST',
                body:data
            }),
            invalidatesTags:['Contact'],
        }),
        deleteContact: builder.mutation({
            query:(contactId)=>({
                url:`/contacts/${contactId}`,
                method:'DELETE',
            }),
            invalidatesTags:['Contact'],
        }),
        editContact:builder.mutation({
            query:({id,name,number})=>({
                url:`/contacts/${id}`,
                method:'PATCH',
                body:{name,number},
            }),
            invalidatesTags:['Contact'],
        }),
    }),
});


export const { useGetContactsQuery, useAddContactsMutation,useDeleteContactMutation, useEditContactMutation } = contactsApi