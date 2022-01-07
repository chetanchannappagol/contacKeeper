import React,{useContext} from 'react'
import ContactContext from '../../Contexts/Contacts/ContactContext'
import './style.css'

export default function ContaactItem(props) {
    const context = useContext(ContactContext);

    const {name,email,phone,type,id} = props.contact;

    const onEdit = () =>{
        context.Edit(props.contact)
    }
    const onDelete = () =>{
        context.DeleteContact(props.contact)
    }
    return (
        <div className='contactItem' key={props.contact.email}>
           <div className='nameType'>
               <span>{name}</span>
               <span className={type === 'personal' ? 'type1' :'type2'}>{type}</span>
           </div>
           <div>
           <span>{email}</span>
              
           </div>
           <div>
           <span>{phone}</span>
           </div>
           <div>
            <button className='edit' onClick={()=>onEdit()}>
                Edit
            </button>
            <button  className='delete' onClick={()=>onDelete()}>
                Delete
            </button>
           </div>
        </div>
    )
}
