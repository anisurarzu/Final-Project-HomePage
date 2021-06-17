import React, { useContext, useState } from 'react'

import './LogIn.css';
import { Button } from '@material-ui/core';
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useLocation } from 'react-router-dom';
import islam from '../../images/islam.png';
import moon from '../../images/moon.png';
import { createUser, handleFblogin, handleGoogleLogin, handleLogout, initializeLoginFrameWork, logInWithEmailAndPassword,  } from './ManageLogIn';


initializeLoginFrameWork();





function LogIn() {
    const [newUser,setNewUser] =useState(false);

    const [user,setUser]=useState({
        isSignIn:false,
        name:"",
        email:'',
        password:'',
        photo:''
    })

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history =useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const googleLogin =()=>{
        handleGoogleLogin()
        .then(res=>{
            setUser(res);
            setLoggedInUser(res);
            history.replace(from);
        })
    }

    const logout=()=>{
        handleLogout()
        .then(res=>{
            setUser(res);
            setLoggedInUser(res);
            history.replace(from);
        })
    }
    const fbLogin=()=>{
        handleFblogin()
        .then(res=>{
            setUser(res);
            setLoggedInUser(res);
        })
    }
    


   
    
    
    const handleBlur =(e)=>{
        
        let isFieldValid = true;
      if(e.target.name ==='email'){
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
          
      }
      if(e.target.name ==='password'){
          const IsPasswordValid = e.target.value.length > 6;
          const passwordHasNumber= /\d{1}/.test(e.target.value);
          isFieldValid =(IsPasswordValid && passwordHasNumber );
      }
      if(isFieldValid){
         const newUserInfo ={...user};
         newUserInfo[e.target.name] = e.target.value;
         setUser(newUserInfo);
      }
    }
    const handleSubmit=(e)=>{
       
        if(newUser && user.email && user.password){
            createUser(user.name,user.email,user.password)
            .then(res=>{
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);
            })
        }

        if(!newUser && user.email && user.password){
            logInWithEmailAndPassword(user.email,user.password)
           .then(res=>{
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);
           })
                    }

        e.preventDefault();
    }
    ///////////////////////////////
    

    return (
        <div className='login d-flex justify-content-center'>

            <div className="col-md-4">
                
            </div>

            <div className="col-md-4">
            {
            user.isSignIn ?<button onClick={logout} className='btn btn-primary'>Logout</button>:
            <button onClick={googleLogin} className='btn btn-primary'>Login</button>
        }
        <br />
        
        <Button variant="contained" color="primary" onClick={fbLogin}>
        log in Using Facebook</Button>
        <br></br>

            {
                user.isSignIn && <div>
                     <p>Welcome,{user.name}</p>
                     <p>Your email:{user.email}</p>
                     <img src={user.photo} />
                </div>
            }

            

            <input type="checkbox" name='newUser' onChange={()=>setNewUser(!newUser)}/>
            <label htmlFor="newUser">New User Registration</label>

            <form className='form-group form-design rounded shadow-lg p-3 mb-5 bg-white rounded' onSubmit={handleSubmit}>
            {newUser && <input class="form-control" type="text" name='name' onBlur={handleBlur} placeholder='Your name' />} <br />
            <input class="form-control" type="text" name='email' onBlur={handleBlur} placeholder='Write Your email Address' required /> 
            <br />
            <input class="form-control" type="password" name='password' onBlur={handleBlur} placeholder='Write Your Password' required />
            <br />
             <input  class="form-control btn" type="submit" value={newUser? 'Registration ':'Log In'} />
            </form>
            <p style={{color:'red'}}>{user.error}</p>
            
            {user.success && <p style={{color:'green'}}>User {newUser ?'created':'Logged In'} Successfully</p>}
            </div>

            <div className="col-md-4">
              

            </div>
      
        </div>
    )
}

export default LogIn
