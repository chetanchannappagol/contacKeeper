import React from 'react';
import {
    REGISTER_FAILED,
    REGISTER_SUCCESS,
    LOGIN_FAILLOGIN_FAIL,
    LOGIN_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    CLEAR_ERRORS,
  } from "../type";

export const AuthReducer = (state,action) => {
    switch(action.type){
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated:true,
                loading:false,
                user:action.payload,
                errors:null
            }
        case REGISTER_SUCCESS:
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
                loading:false
            }
            case REGISTER_FAILED:
            case AUTH_ERROR:
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false,
                errors:action.payload
            }
            case CLEAR_ERRORS:
                return{
                    ...state,
                errors:null
                }
        default:
            return state;
    }
};
