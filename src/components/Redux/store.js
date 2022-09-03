import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import {contactsReducer} from './sliceContacts';
import { contactsApi } from "./fetchContacts";
import { userApi } from "./FetchUser";
import { persistSliceUser } from "./sliceAuth";



export const store=configureStore({
    reducer:  {
        auth:persistSliceUser,
        [userApi.reducerPath]: userApi.reducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
        contacts:contactsReducer,
        },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware).concat(userApi.middleware),
    },
)



setupListeners(store.dispatch)
