import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Appoinment from './Components/Appoinment/Appoinment/Appoinmenet';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Home from './Components/Home/Home/Home';
import Scholar from './Components/Scholar/Scholar/Scholar';




function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/">
          <Home></Home>
       </Route>
       <Route path='/appoinment'>
         <Appoinment></Appoinment>
       </Route>
       <Route path='/scholar/question'>
         <Scholar></Scholar>
       </Route>
       
       
       

       
     </Switch>
   </Router>
  );
}

export default App;
