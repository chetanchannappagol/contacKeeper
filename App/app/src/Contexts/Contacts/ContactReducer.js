import React from 'react'
import {
    ADD_CONTACTS,
    EDIT_CONTACT,
    CLEAR_EDIT,
    DELETE_CONTACT,
    SELECTED_CONTACT 
} from '../type';

export default function ContactReducer(state,action) {
    console.log(state.contacts,action.payload);
   switch(action.type){
       case ADD_CONTACTS:
           return {
               ...state,
               contacts:[
                   ...state.contacts,
                  action.payload
               ]
           }
       case SELECTED_CONTACT:
           return {
               ...state,
               selected:action.payload
           }
           case CLEAR_EDIT:
           return {
               ...state,
               selected:null
           }
           case EDIT_CONTACT: 
           return {
               ...state,
               contacts: state.contacts.map(contact=> contact.id === action.payload.id ? action.payload : contact),
               selected:null
           }
           case DELETE_CONTACT:
           return {
               ...state,
               contacts: state.contacts.filter(contact=> contact.id !== action.payload.id),
               selected:null
           }
       default:
           return;
   }
}
