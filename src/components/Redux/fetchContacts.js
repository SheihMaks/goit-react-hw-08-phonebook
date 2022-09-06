import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }),
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
                method:'DELETE'
            }),
            invalidatesTags:['Contact'],
        }),
    }),
})

export const { useGetContactsQuery, useAddContactsMutation,useDeleteContactMutation } = contactsApi