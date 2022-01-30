import React,{useState,useEffect,useContext} from 'react'
import Contacts from '../Contacts'
import Form from '../Form'
import './style.css';
import AuthContext from '../../Contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import ContactContext from '../../Contexts/Contacts/ContactContext';

export default function Home() {
    const navigate = useNavigate();
    const Acontext = useContext(AuthContext)
    const context = useContext(ContactContext)
    useEffect(() => {
        // if(!Acontext.isAuthenticated){
        //     navigate('login')
        // }
        // else{
            context.getContacts()
        // }
        // eslint-disable-next-line
      }, []);
    return (
        <div className='home'>
            <Form/>
            <Contacts/>
        </div>
    )
}
