import React,{useState,useContext} from "react";
import AlertContext from '../../Contexts/Alert/AlertContext';

export default function Login() {
    const context = useContext(AlertContext)
    const [login, setLogin] = useState({
        email:'',
        password:'',
    })

    const {email,password} = login;

    const onChange = (e) =>{
        setLogin({
            ...login,[e.target.name]:e.target.value
        })
    }

    const onSubmit = () =>{
      if(email === '' || password === '' ){
          context.setAlert({alert:'All fields are mandatory',type:'warning'})
      }
  }
  return (
      <div style={{width:'100%',display:'flex',justifyContent:'center',padding:'20px 0px'}}>
 <form>
      <span>Account Login</span>
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
        className="button"
        onClick={() => onSubmit()}
        type="button"
        value={"Login"}
      />
    </form>
      </div>
   
  );
}
