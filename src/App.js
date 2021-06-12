import React, { createContext } from 'react';
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
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();


function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <h3> Email:{loggedInUser.email}</h3>
       <Router>
     <Switch>
       <Route exact path="/">
          <Home></Home>
       </Route>

       <PrivateRoute path='/sendquestion'>
         <Appoinment></Appoinment>
       </PrivateRoute>

       <Route path='/login'>
          <LogIn></LogIn>
       </Route>

       <PrivateRoute path='/getschedule'>
         <GetSchedule></GetSchedule>
       </PrivateRoute>

       <Route path='/scholar/question'>
         <Scholar></Scholar>
       </Route>
       
       
       

       
     </Switch>
   </Router>
   <MessengerCustomerChat
    pageId="259964438007932"
    appId="587128588925497"
    
  />
    </UserContext.Provider>

  
   
  );
}

export default App;
