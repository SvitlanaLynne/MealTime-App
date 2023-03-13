// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './components/Home';
import InputPage from './components/InputPage';
import History from './components/History';

import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Logout from './components/Auth/Logout';
import AuthNav from './components/Auth/AuthNav';
import Avatar from './components/Avatar';


import { AuthProvider } from './components/Auth/AuthProvider';


function App() {
  return (
    <div className="App">
      
  <BrowserRouter>
    <AuthProvider>
        < AuthNav />
        < Avatar />
        < Navigation />
      
        <Routes>
          <Route path= "/" element= {<Home/>}/>
          <Route path= "/input" element= {<InputPage/>}/>
          <Route path= "/history" element= {<History/>}/>

          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/logout" element={<Logout/>}/>

        </Routes>

    </AuthProvider>  
  </BrowserRouter>
    </div>
  );
}

export default App;
