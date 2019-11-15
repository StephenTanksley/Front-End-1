import React from 'react';
import './App.css';
import { axiosWithAuth as axios } from './utils/api'
import Signup from './components/Login - Logout - Signup - PrivateRoute/Signup';

function App() {


  return (
    <div className="App">
     <h1>Hello. Welcome to Ride for Life.</h1>
     <Signup />
    </div>
    
  );
}

export default App;
