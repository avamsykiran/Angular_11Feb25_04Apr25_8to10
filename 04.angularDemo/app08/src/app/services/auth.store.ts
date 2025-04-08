import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { computed, inject } from "@angular/core";
import { User } from "../models/user";

interface AuthStoreType {
    currentUser: User | null,
    errMsg:string | null
}

const initialState: AuthStoreType = {
    currentUser: null,
    errMsg:null
};

export const AuthStore = signalStore(
    { providedIn: 'root' },

    withState(initialState),

    //computed signals play the role of selectors 
    withComputed(
        ({ currentUser }) => ({            
            isAuthenticated: computed(() => !(currentUser===null))
        })
    ),

    //methods play the role of reducers
    //async methods play the role of effects
    withMethods(
        (store) => ({

            login(user:User) {
                if(user.username==="admin" && user.password==="admin"){
                    patchState(store, { currentUser:user, errMsg:null });
                }else{
                    patchState(store, { currentUser:null, errMsg:"Invalid Credentials" });
                }                
            },
            logout() {
                patchState(store, { currentUser:null, errMsg:null });                                
            }            
        })
    )
);