import React , {useReducer} from 'react'
import ContactContext from "./ContactContext";
import {
    ADD_CONTACTS,
    EDIT_CONTACT,
    CLEAR_EDIT,
    DELETE_CONTACT,
    SELECTED_CONTACT
} from '../type';
import ContactReducer from "./ContactReducer";

const ContactState = (props) =>{
    const initialState = {
        contacts:[
            {
                id:'1',
                name:'chetan',
                email:'chetan@email.com',
                phone:'1234567892',
                type:'personal'
            },
            {
                id:'2',
                name:'chetan1',
                email:'chetan@email1.com',
                phone:'1234565555',
                type:'professional'
            }
        ],
        selected:null,
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState)

    //ADD contacts
    const Add = (contact => dispatch({type:ADD_CONTACTS,payload:contact}))

    //edit conatct
    const EditContact = (contact =>dispatch({type:EDIT_CONTACT,payload:contact}) )

    //Set selcted
    const Edit = (contact => dispatch({type:SELECTED_CONTACT,payload:contact}))

    //clear contact

    const clearContact = () => dispatch({type:CLEAR_EDIT}) 

    //delete contact
    const DeleteContact = (contact =>dispatch({type:DELETE_CONTACT,payload:contact}) )

    return <ContactContext.Provider
    value={{
        contacts:state.contacts,
        selected:state.selected,
        Add,
        Edit,
        clearContact,
        EditContact,
        DeleteContact
        }
    }
    >
        {props.children}
    </ContactContext.Provider>
}

export default ContactState