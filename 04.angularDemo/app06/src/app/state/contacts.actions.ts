import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Contact } from "../models/contact";

export const ContactActions = createActionGroup({
    source:'Contacts',
    events:{
        'load': emptyProps,                      //load action must be dispatch by a component to initiate loading data from rest-api
        'add': props<{contact:Contact}>(),       //add action must be dispatch by a component to add a contact via rest-api
        'update':props<{contact:Contact}>(),     //update action must be dispatch by a component to modify a contact via rest-api
        'delete':props<{id:number}>(),           //delete action must be dispatch by a component to remove a contact via rest-api
        'refresh':props<{contacts:Contact[]}>(), //refresh action must be dispatch by an effect after loading / adding / updating / deelting
        'error':props<{errMsg:string}>()         //error action must be dispatch by an effect in case of an error in a rest-api call
    }
});
