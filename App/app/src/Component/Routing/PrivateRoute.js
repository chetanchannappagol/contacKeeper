import React from 'react';
import { Route,Navigate,Outlet } from 'react-router-dom'
import { Component, useContext } from 'react/cjs/react.development';
import AuthContext from '../../Contexts/Auth/AuthContext';

const PrivateRoute = ({component:Copmonent,...rest}) => {

  const context = useContext(AuthContext);
  return (
    context.isAuthenticated === null || !context.isAuthenticated ? (<Navigate to={'/login'}/>) : (<Outlet />)
  )
  
};

export default PrivateRoute;
