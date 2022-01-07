import React ,{useContext} from 'react'
import ContactContext from '../../Contexts/Contacts/ContactContext'
import ContaactItem from './ContaactItem'

export default function Contacts() {
    const context = useContext(ContactContext)
    return (
        <div>
            {
                context.contacts.map(ele=> <ContaactItem key={ele.id} contact={ele}/> )
            }
        </div>
    )
}
