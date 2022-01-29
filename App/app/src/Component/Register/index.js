import React,{useState,useContext, useEffect} from 'react'
import AlertContext from '../../Contexts/Alert/AlertContext';
import AuthContext from '../../Contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Register(props) {
const navigate = useNavigate();

  
    const context = useContext(AlertContext);
    const Acontext = useContext(AuthContext)
    const [user, setUser] = useState({
        email:'',
        password:'',
        confirmpassword:'',
        name:''
    })
    useEffect(() => {
      if(Acontext.isAuthenticated){
        navigate('/')
      }
      if(Acontext.errors){
        context.setAlert({alert:Acontext.errors,type:'danger'})
        Acontext.clearError()
      }
      // eslint-disable-next-line
    }, [Acontext.errors,Acontext.isAuthenticated]);
    

    const {email,password,confirmpassword,name} = user;

    const onChange = (e) =>{
        setUser({
            ...user,[e.target.name]:e.target.value
        })
    }

    const onSubmit = (e) =>{
       e.preventDefault()
        if(email === '' || password === '' || confirmpassword === '' || name === ''){
            context.setAlert({alert:'All fields are mandatory',type:'warning'})
        }
        else if(password !== confirmpassword){
          context.setAlert({alert:'Confirm password is wrong',type:'warning'})
        }
        else{
          Acontext.register({
            email,
            password,
            name
          })
        }
    }

  return (
      <div style={{width:'100%',display:'flex',justifyContent:'center',padding:'20px 0px'}}>
 <form onSubmit={onSubmit}>
      <span>Account Registration</span>
      <input
        type="name"
        name="name"
        placeholder="Name"
        onChange={(e) => onChange(e)}
        value={name}
        required
      />
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
        minLength={6}
      />
      <input
        type="password"
        name="confirmpassword"
        placeholder="Confirm Password"
        onChange={(e) => onChange(e)}
        value={confirmpassword}
        required
      />
      <input
        className="button"
        type="submit"
        value={"Register"}
      />
    </form>
      </div>
   
  );
}
