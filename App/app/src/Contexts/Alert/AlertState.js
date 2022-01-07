import React,{useReducer} from 'react'
import AlertContext from "./AlertContext";
import {SET_ALERT,CLEAR_ALERT} from '../type'
import AlertReducer from './AlertReducer';

const AlertState = (props) =>{
    const initialState = {
        alert:'',
        type:''
    };

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    //set Alert
    const setAlert = (alert => dispatch({type:SET_ALERT,payload:alert}))
//dispatch({type:SET_ALERT,payload:alert}
    //clear Alert
    const clearAlert = () => dispatch({type:CLEAR_ALERT})
    
    return <AlertContext.Provider
    value={
        {
            alert:state.alert,
            type:state.type,
            setAlert,
            clearAlert
        }
    }
    >
        {props.children}
    </AlertContext.Provider>
    
}

export default AlertState;