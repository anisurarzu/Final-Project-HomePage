import React, { useState } from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './LogIn.css'

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
        <button onClick={handleFblogin}>
            log in Using Facebook
        </button>

            {
                user.isSignIn && <div>
                     <p>Welcome,{user.name}</p>
                     <p>Your email:{user.email}</p>
                     <img src={user.photo} />
                </div>
            }

            <h1>Our Own Authenticaion Sytstem</h1>

            <input type="checkbox" name='newUser' onChange={()=>setNewUser(!newUser)}/>
            <label htmlFor="newUser">New User Registration</label>

            <form onSubmit={handleSubmit}>
            {newUser && <input type="text" name='name' onBlur={handleBlur} placeholder='Your name' />} <br />
            <input type="text" name='email' onBlur={handleBlur} placeholder='Write Your email Address' required /> 
            <br />
            <input type="password" name='password' onBlur={handleBlur} placeholder='Write Your Password' required />
            <br />
             <input type="submit" value={newUser? 'Sign Up':'Sign In'} />
            </form>
            <p style={{color:'red'}}>{user.error}</p>
            
            {user.success && <p style={{color:'green'}}>User {newUser ?'created':'Logged In'} Successfully</p>}
        </div>
    )
}

export default LogIn
