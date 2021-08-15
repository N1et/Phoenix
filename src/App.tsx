import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import './App.css';

function setToken(userToken:string): void {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken(): string {
  const tokenString: any = sessionStorage.getItem('token') ;
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}


function App() {
  const token: any = getToken();
  console.log(token);

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1> Application </h1>

      <BrowserRouter>
        <switch>
            <Route path='/dashboard'>
                <Dashboard />
            </Route>
            <Route path="/preferences">
                <Preferences />
            </Route>
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
