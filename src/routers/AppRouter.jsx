import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom'
import App from "../App";
import TodoContext from "../context/TodoContext";
import { Login } from '../components/Login'

export const AppRouter = () => {
  const { auth } = useContext(TodoContext);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth))
  }, [auth])
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          auth.auth ? <App /> : <Navigate to='/login'/> 
        } />
        <Route path="/login" element={ 
          auth.auth ? <Navigate to='/' /> : <Login />
        } />
      </Routes>
    </BrowserRouter>
  );
};
