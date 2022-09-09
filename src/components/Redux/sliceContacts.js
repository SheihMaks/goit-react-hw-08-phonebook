import {createSlice} from "@reduxjs/toolkit";
import { contactsApi } from "./fetchContacts";

const initialState={filter:'',
                    load:(false)};

export const sliceContacts=createSlice({
    name:"contacts",
    initialState,
    reducers:{
        setFilter(state,action){
            return {...state,filter:action.payload}
        },
    },
    extraReducers:builder=>{
        builder.addMatcher(
            contactsApi.endpoints.deleteContact.matchPending,
            (state)=>{state.load=(true)}
        );
        builder.addMatcher(
            contactsApi.endpoints.deleteContact.matchFulfilled,
            (state)=>{state.load=(false)}
            )
        }
       
        });

export const{setFilter}=sliceContacts.actions

export const contactsReducer= sliceContacts.reducer

//Selectors
export const getFilter=state=>state.contacts.filter;

export const getLoadState=state=>state.contacts.load;