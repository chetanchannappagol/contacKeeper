import React from 'react'
import Contacts from '../Contacts'
import Form from '../Form'
import './style.css'
export default function Home() {
    return (
        <div className='home'>
            <Form/>
            <Contacts/>
        </div>
    )
}
