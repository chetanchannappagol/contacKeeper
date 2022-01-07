import React from 'react'
import {SET_ALERT,CLEAR_ALERT} from '../type'

const AlertReducer = (state,action) => {
    switch(action.type){
        case SET_ALERT:
        return{
            ...state,
            alert:action.payload.alert,
            type:action.payload.type
        }
        case CLEAR_ALERT:
        return{
            alert:'',
            type:''
        }
        default:
            return;
    }
}

export default AlertReducer;