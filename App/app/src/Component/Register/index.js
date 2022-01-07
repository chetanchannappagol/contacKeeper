import React,{useState,useContext} from 'react'
import AlertContext from '../../Contexts/Alert/AlertContext';

export default function Register() {

    const context = useContext(AlertContext)
    const [login, setLogin] = useState({
        email:'',
        password:'',
        confirmpassword:'',
        name:''
    })

    const {email,password,confirmpassword,name} = login;

    const onChange = (e) =>{
        setLogin({
            ...login,[e.target.name]:e.target.value
        })
    }

    const onSubmit = () =>{
        if(email === '' || password === '' || confirmpassword === '' || name === ''){
            context.setAlert({alert:'All fields are mandatory',type:'warning'})
        }
    }

  return (
      <div style={{width:'100%',display:'flex',justifyContent:'center',padding:'20px 0px'}}>
 <form>
      <span>Account Registration</span>
      <input
        type="name"
        name="name"
        placeholder="Name"
        onChange={(e) => onChange(e)}
        value={name}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={(e) => onChange(e)}
        value={email}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => onChange(e)}
        value={password}
      />
      <input
        type="password"
        name="confirmpassword"
        placeholder="Confirm Password"
        onChange={(e) => onChange(e)}
        value={confirmpassword}
      />
      <input
        className="button"
        onClick={() => onSubmit()}
        type="button"
        value={"Register"}
      />
    </form>
      </div>
   
  );
}
