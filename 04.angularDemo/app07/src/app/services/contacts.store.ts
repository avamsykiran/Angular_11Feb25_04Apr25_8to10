import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Contact } from "../models/contact";
import { computed, inject } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { ContactsService } from "./contacts.service";
import { MsgService } from "./msg.service";

interface ContactsStoreType {
    contacts: Contact[],
    selectedId: number | null
}

const initialState: ContactsStoreType = {
    contacts: [],
    selectedId: null
};

export const ContactsStore = signalStore(
    { providedIn: 'root' },

    withState(initialState),

    //computed signals play the role of selectors 
    withComputed(
        ({ selectedId, contacts }) => ({

            isContactsEmpty: computed(() => contacts().length === 0),

            selectedContact: computed(() => {
                let contact: Contact | undefined = undefined;
                if (contacts().length > 0 && selectedId()) {
                    contact = contacts().find(c => c.id === selectedId());
                }
                return contact;
            })

        })
    ),

    //methods play the role of reducers
    //async methods play the role of effects
    withMethods(
        (store, contactService = inject(ContactsService), msgService = inject(MsgService)) => ({

            selectContactId(id: number) {
                patchState(store, { selectedId: id });
            },
            async loadAll() {
                try {
                    msgService.setMsg("Please wait while loading data!");
                    const contacts = await lastValueFrom(contactService.getAllContacts());
                    patchState(store, { contacts });
                    msgService.setMsg("Data Loaded Successfully!");
                } catch (err) {
                    console.error(err);
                    msgService.setMsg("Unable to fetech data! Please retry!");
                }
            },
            async add(contact: Contact) {
                try {
                    msgService.setMsg("Please wait while saving data!");
                    contact = await lastValueFrom(contactService.addContact(contact));
                    msgService.setMsg("Data Saved Successfully!");
                    patchState(store, { contacts: [...store.contacts(), contact] });
                } catch (err) {
                    console.error(err);
                    msgService.setMsg("Unable to save record! Pleae retry!");
                }
            },
            async update(contact: Contact) {
                try {
                    msgService.setMsg("Please wait while saving data!");
                    contact = await lastValueFrom(contactService.replaceContact(contact));
                    msgService.setMsg("Data Saved Successfully!");
                    patchState(store, { contacts: store.contacts().map(c => c.id !== contact.id ? c : contact) });
                } catch (err) {
                    console.error(err);
                    msgService.setMsg("Unable to save record! Pleae retry!");
                }
            },
            async del(id: number) {
                try {
                    msgService.setMsg("Please wait while saving data!");
                    await lastValueFrom(contactService.removeContactById(id));
                    msgService.setMsg("Data Deleted Successfully!");
                    patchState(store, { contacts: store.contacts().filter(c => c.id !== id) });
                } catch (err) {
                    console.error(err);
                    msgService.setMsg("Unable to delete record! Pleae retry!");
                }
            }
        })
    )
);