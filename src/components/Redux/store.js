import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import {contactsReducer} from './sliceContacts';
import { contactsApi } from "./fetchContacts";
import { userApi } from "./FetchUser";
import { persistSliceUser } from "./sliceAuth";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    } from 'redux-persist';

export const store=configureStore({
    reducer:  {
        users:persistSliceUser,
        [userApi.reducerPath]: userApi.reducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
        contacts:contactsReducer,
        },
        middleware: getDefaultMiddleware=>
        getDefaultMiddleware({
            serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
            
        }).concat(userApi.middleware,contactsApi.middleware),
    },
)

export const persistor = persistStore(store)

setupListeners(store.dispatch)
