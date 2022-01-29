import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import axios from 'axios'
import {
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  LOGIN_FAILLOGIN_FAIL,
  LOGIN_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERRORS,
} from "../type";
import { AuthReducer } from "./AuthReducer";

const AuthState = (props) =>{
    const initialState  = {
        token:localStorage.getItem('token'),
        isAuthenticated : null,
        loading:true,
        errors:null,
        user:null
    }

    const [state, dispatch] = useReducer(AuthReducer,initialState);

    //load users
    const loadUser = async ()=>{
        const config =  {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-auth-token' : localStorage.getItem('token')
              }
    }
        try {
            let res = await axios.get('http://localhost:5000/api/auth',config)

            dispatch({
                type:USER_LOADED,
                payload:res.data
            })
        } catch (error) {
            dispatch({
                type:AUTH_ERROR,
                payload:error.response.data.msg
            })
        }
    }

    //register user
    const register = async data =>{

        const config =  {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
    }
        try {
            let res = await axios.post('http://localhost:5000/api/register',data,config)

            dispatch({
                type:REGISTER_SUCCESS,
                payload:res.data
            })

            loadUser()
        } catch (error) {
            dispatch({
                type:REGISTER_FAILED,
                payload:error.response.data.msg
            })
        }
    }

    //login user

    //logout user

    //clear error

    const clearError = ()=> dispatch({type:CLEAR_ERRORS})

    return <AuthContext.Provider
    value={
        {
            user:state.user,
            token:state.token,
            isAuthenticated:state.isAuthenticated,
            loading:state.loading,
            user:state.user,
            errors:state.errors,
            register,
            clearError
        }
    }
    >
        {props.children}
    </AuthContext.Provider>
}

export default AuthState;
