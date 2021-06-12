import React, { useContext, useState } from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './LogIn.css';
import { Button } from '@material-ui/core';
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

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


    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleLogin=()=>{
        firebase.auth().signInWithPopup(googleProvider)
        .then(res =>{
            const {displayName,photoURL,email} =res.user;
            const signInUser={
                isSignIn:true,
                name:displayName,
                email:email,
                photo:photoURL
            }
            setUser(signInUser);
            console.log(displayName,photoURL,email);
        })
        .catch(err =>{
            console.log(err.message);
        })
    }
    const handleFblogin =()=>{
        firebase
        .auth()
        .signInWithPopup(fbProvider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;
      
          // The signed-in user info.
          var user = result.user;
      
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var accessToken = credential.accessToken;
      
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
      
          // ...
        });
    }

    const handleLogout=()=>{
        firebase.auth().signOut()
        .then(() => {
            const logOutUser ={
                isSignIn:false,
                
                name:'',
                photo:'',
                email:'',
                error:'',
                success:false
            
            }
            setUser(logOutUser );
          }).catch((error) => {
            
          });
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
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
        })
        .then(res=>{
            const newUserInfo ={...user};
            newUserInfo.error ='';
            newUserInfo.success = true;
            setUser(newUserInfo);
            
        })
        .catch((error) => {
            const newUserInfo = {...user};
            newUserInfo.error=error.message;
            newUserInfo.success=false;
            setUser(newUserInfo);
           
  });
        }

        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
            })
            .then(res =>{
                const newUserInfo ={...user};
                newUserInfo.error ='';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
                
            })
            .catch((error) => {
                const newUserInfo = {...user};
                newUserInfo.error=error.message;
                newUserInfo.success=false;
                setUser(newUserInfo);
            });
                    }

        e.preventDefault();
    }
    ///////////////////////////////
    const updateUserName = name =>{
        const user = firebase.auth().currentUser;

        user.updateProfile({
         displayName: name,
        
         }).then(() => {
            console.log('updatetd');
         }).catch((error) => {
                // An error occurred
                console.log(error);
                });  
    }

    return (
        <div className='login'>
        {
            user.isSignIn ?<button onClick={handleLogout} className='btn btn-primary'>Logout</button>:
            <button onClick={handleLogin} className='btn btn-primary'>Login</button>
        }
        <br />
        
        <Button variant="contained" color="primary" onClick={handleFblogin}>
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
    )
}

export default LogIn
