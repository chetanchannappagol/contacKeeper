import React,{useState,useContext,useEffect} from "react";
import AlertContext from '../../Contexts/Alert/AlertContext';
import AuthContext from '../../Contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  
    const navigate = useNavigate();

    const Acontext = useContext(AuthContext)
    const context = useContext(AlertContext)
    const [user, setUser] = useState({
        email:'',
        password:'',
    })

    useEffect(() => {
      if(Acontext.isAuthenticated && Acontext.token !== null){
        navigate('/');
      }
      if(Acontext.errors){
        context.setAlert({alert:Acontext.errors,type:'danger'})
        Acontext.clearError()
      }
      // eslint-disable-next-line
    }, [Acontext.errors,Acontext.isAuthenticated]);

    const {email,password} = user;

    const onChange = (e) =>{
        setUser({
            ...user,[e.target.name]:e.target.value
        })
    }

    const onSubmit = (e) =>{
      e.preventDefault()
      if(email === '' || password === '' ){
          context.setAlert({alert:'All fields are mandatory',type:'warning'})
      }
      else{
        Acontext.login({
          email,password
        })
      }
  }
  return (
      <div style={{width:'100%',display:'flex',justifyContent:'center',padding:'20px 0px'}}>
 <form onSubmit={onSubmit}>
      <span>Account Login</span>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={(e) => onChange(e)}
        value={email}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => onChange(e)}
        value={password}
        required
      />
      <input
        className="button"
        type="submit"
        value={"Login"}
      />
    </form>
      </div>
   
  );
}
