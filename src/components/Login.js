import React from 'react';
import { useState , useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";


import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';


const Login = () => {
    const [isSigninform, setisSigninform]= useState(true);

    //creating a useState variable to store error message
    const [errorMessage, seterrorMessage]= useState(null);
  
    const dispatch = useDispatch();
    


    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
   


    const handleButtonClick = ()=>{
        //validates
        const message = isSigninform?checkValidData(email.current.value,password.current.value):checkValidData(email.current.value,password.current.value,name.current.value,setisSigninform);
        seterrorMessage(message);
        
       

      if(message) return;
        

      //Signup/signin
      if(!isSigninform){
        //Sign up logic
        createUserWithEmailAndPassword(
          auth, 
          email.current.value,
          password.current.value
        )
       .then((userCredential) => {
    
       const user = userCredential.user;

       updateProfile(user, {
        displayName: name.current.value,
         photoURL: USER_AVATAR
      
      }).then(() => {
        const {uid,email,displayName,photoURL} = auth.currentUser;
    // ...
    dispatch(
      addUser
      ({
      uid:uid, 
      email:email, 
      displayName:displayName,
      photoURL:photoURL}));
   
      }).catch((error) => {
       
        seterrorMessage(error.message);
      });
    
    
      
       
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+"-"+errorMessage);
  });

      }else{
        // sign up logix

        signInWithEmailAndPassword(
          auth, 
          email.current.value,
          password.current.value
        )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
 
    // ...
   
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+"-"+errorMessage);
  });
      }
    };


    
    const togglesigninform=()=>{
      setisSigninform(!isSigninform);
  }


  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img
      src='https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg'
      alt ="logo"
      />
      </div>
      <form
       onSubmit={(e)=>e.preventDefault()} 
      className='p-12 bg-black  w-3/12 my-36 absolute mx-auto text-white right-0 left-0 bg-opacity-70'>
      
      <h1 className='font-bold text-white text-3xl py-4'>
        {isSigninform ? "Sign IN" : "Sign Up"}
        </h1>

        {!isSigninform &&(
       <input
        ref={name} 
        type="text" 
        placeholder='Full Name' 
        className='p-4 my-4 w-full bg-gray-800 '/>
        )}

       
        <input
        ref={email}
        type="text"
         placeholder='Email Address'
         className='p-4 my-4 w-full bg-gray-800'/>
       
        <input 
        ref={password}
        type="password" 
        placeholder='Password' 
        className='p-4 my-4 w-full bg-gray-800 '/>

        
        <p className='text-red-500 font-bond text-lg py-2'>{errorMessage}</p>

        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'
        onClick={handleButtonClick}>
        {isSigninform ? "Sign IN" : "Sign Up"}
        </button>

        <p className='py-4 cursor-pointer'onClick={togglesigninform}>
            {isSigninform? "New to Netflix? SignUp Now" :"Alreadyresgistered? Sign Up Now."}
            </p>
      </form>
    </div>
  )
}

export default Login
