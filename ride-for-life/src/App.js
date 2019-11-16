import React from 'react';
import './App.css';
import { axiosWithAuth as axios } from './utils/api'
import DriverSignup from './components/Login - Logout - Signup - PrivateRoute/DriverSignup';

function App() {


  return (
    <div className="App">
     <h1>Hello. Welcome to Ride for Life.</h1>
     <DriverSignup />
    </div>
    
  );
}

export default App;
