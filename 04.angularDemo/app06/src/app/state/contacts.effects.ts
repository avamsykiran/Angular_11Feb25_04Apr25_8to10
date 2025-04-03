import { Injectable } from "@angular/core";
import { ContactActions } from "./contacts.actions";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, mergeMap, map } from "rxjs/operators";
import { ContactsService } from "../services/contacts.service";

@Injectable()
export class ContactsEffects {

    constructor(private actions: Actions, private contactsService: ContactsService) {

    }

    loadContacts = createEffect(() =>
        this.actions.pipe(
            ofType(ContactActions.load),
            mergeMap(() =>
                this.contactsService.getAllContacts().pipe(
                    map(contacts => ContactActions.refresh({ contacts })),
                    catchError(err => of(ContactActions.error({ errMsg: "Unable to load contacts! Please retry!" })))
                ))
        )
    );

    addContact = createEffect(() =>
        this.actions.pipe(
            ofType(ContactActions.add),
            mergeMap(({ contact }) =>
                this.contactsService.addContact(contact).pipe(
                    map(contact => ContactActions.load()),
                    catchError(err => of(ContactActions.error({ errMsg: "Unable to add contact! Please retry!" })))
                ))
        )
    );

    updateContact = createEffect(() =>
        this.actions.pipe(
            ofType(ContactActions.update),
            mergeMap(({ contact }) =>
                this.contactsService.replaceContact(contact).pipe(
                    map(contact => ContactActions.load()),
                    catchError(err => of(ContactActions.error({ errMsg: "Unable to update contact! Please retry!" })))
                ))
        )
    );

    deleteContact = createEffect(() =>
        this.actions.pipe(
            ofType(ContactActions.delete),
            mergeMap(({ id }) =>
                this.contactsService.removeContactById(id).pipe(
                    map(() => ContactActions.load()),
                    catchError(err => of(ContactActions.error({ errMsg: "Unable to delete contact! Please retry!" })))
                ))
        )
    );
}