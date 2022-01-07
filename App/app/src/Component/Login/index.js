import React,{useState} from "react";

export default function Login() {

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
        // onClick={() => onSubmit()}
        type="button"
        value={"Login"}
      />
    </form>
      </div>
   
  );
}
