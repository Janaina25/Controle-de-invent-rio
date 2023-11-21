
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import './navbar.css'
import './style.css';
import './controle/inventary.css';
import Navbar from './navbar';
import Control from './controle/control';





function App() {
  return (
            
        <div>
          <Navbar/>
          <Control />                           
                                         
        </div>
    

  );
}

export default App;
