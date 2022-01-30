import React ,{useContext} from 'react'
import ContactContext from '../../Contexts/Contacts/ContactContext'
import ContaactItem from './ContaactItem'

export default function Contacts() {
    const context = useContext(ContactContext)
    return (
        <div>
            {
              context.contacts.length > 0 &&  context.contacts.map((ele,i)=> <ContaactItem  key={i} contact={ele}/> )
            }
        </div>
    )
}
