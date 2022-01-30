import React , {useReducer} from 'react'
import ContactContext from "./ContactContext";
import {
    ADD_CONTACTS,
    EDIT_CONTACT,
    CLEAR_EDIT,
    DELETE_CONTACT,
    SELECTED_CONTACT,
    GET_CONTACTS
} from '../type';
import ContactReducer from "./ContactReducer";
import axios from 'axios';

const ContactState = (props) =>{
    const initialState = {
        contacts:[],
        selected:null,
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState)

    //Get contacts
    const getContacts = async() => {
        const config = {
            headers:{
                'Content-Type':'application/json',
                'x-auth-token':sessionStorage.getItem('token')
            }
        }

        try {
            const  res = await axios.get('http://localhost:5000/api/contacts',config);
            dispatch({type:GET_CONTACTS,payload:res.data});
        } catch (error) {
            console.log(error)
        }
    }

    //ADD contacts
    const Add = async(contact) =>{
        const config = {
            headers:{
                'Content-Type':'application/json',
                'x-auth-token':sessionStorage.getItem('token')
            }
        }

        try {
            const  res = await axios.post('http://localhost:5000/api/contacts',contact,config);
            dispatch({type:ADD_CONTACTS,payload:res.data});
        } catch (error) {
            console.log(error)
        }
    }
    

    //edit conatct
    const EditContact = async(contact) =>{
        const config = {
            headers:{
                'Content-Type':'application/json',
                'x-auth-token':sessionStorage.getItem('token')
            }
        }

        try {
            const  res = await axios.put(`http://localhost:5000/api/contacts/${contact._id}`,contact,config);
            dispatch({type:EDIT_CONTACT,payload:res.data});
        } catch (error) {
            console.log(error)
        }
    }
    

    //Set selcted
    const Edit = (contact => dispatch({type:SELECTED_CONTACT,payload:contact}))

    //clear contact

    const clearContact = () => dispatch({type:CLEAR_EDIT}) 

    //delete contact
    const DeleteContact =async(contact) =>{
        const config = {
            headers:{
                'Content-Type':'application/json',
                'x-auth-token':sessionStorage.getItem('token')
            }
        }

        try {
            const  res = await axios.delete(`http://localhost:5000/api/contacts/${contact._id}`,config);
            getContacts()
            // dispatch({type:DELETE_CONTACT,payload:res.data});
        } catch (error) {
            console.log(error)
        }
    }
    
    // (contact =>dispatch({type:DELETE_CONTACT,payload:contact}) )

    return <ContactContext.Provider
    value={{
        contacts:state.contacts,
        selected:state.selected,
        Add,
        Edit,
        clearContact,
        EditContact,
        DeleteContact,
        getContacts
        }
    }
    >
        {props.children}
    </ContactContext.Provider>
}

export default ContactState