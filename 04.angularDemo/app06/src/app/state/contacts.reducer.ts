import { createReducer, on } from "@ngrx/store";
import { Contact } from "../models/contact";
import { ContactActions } from "./contacts.actions";

interface ContactStateType {
    contacts:Contact[],
    errMsg:string|null
}

export const initialContactsState: ContactStateType  = {
    contacts:[],
    errMsg:null
};

export const contactsReducer = createReducer(
    initialContactsState,
    on(ContactActions.refresh, (state, { contacts }) => ({contacts,errMsg:null})),
    on(ContactActions.error,  (state, { errMsg }) => ({...state,errMsg}))
);