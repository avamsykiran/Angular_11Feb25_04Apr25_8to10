import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Contact } from "../models/contact";

export const selectContactsFeature = createFeatureSelector<{contacts:Contact[],errMsg:string|null}>('contactsFeature');

export const selectContacts = createSelector(selectContactsFeature, (state) => state.contacts);
export const selectErrMsg = createSelector(selectContactsFeature, (state) => state.errMsg);