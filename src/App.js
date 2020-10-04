import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';



function App() {
  return (
    <Router>
         <Navbar />
         <Switch>
           <Route path='/' />
         </Switch>
    </Router>
   
    
    
   
    
  );
}

export default App;
