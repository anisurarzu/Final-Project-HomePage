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
import MessengerCustomerChat from 'react-messenger-customer-chat';
import LogIn from './Components/LogIn/LogIn';
import GetSchedule from './Components/GetSchedule/GetSchedule';





function App() {
  return (
    <div>
       <Router>
     <Switch>
       <Route exact path="/">
          <Home></Home>
       </Route>
       <Route path='/sendquestion'>
         <Appoinment></Appoinment>
       </Route>
        <Route path='/login'>
        <LogIn></LogIn>
       </Route>
       <Route path='/getschedule'>
        <GetSchedule></GetSchedule>
       </Route>
       <Route path='/scholar/question'>
         <Scholar></Scholar>
       </Route>
       
       
       

       
     </Switch>
   </Router>
   <MessengerCustomerChat
    pageId="259964438007932"
    appId="587128588925497"
    
  />
    </div>

  
   
  );
}

export default App;
