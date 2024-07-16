import React from 'react';
import { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSigninform, setisSigninform]= useState(true);

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
      <form className='p-12 bg-black  w-3/12 my-36 absolute mx-auto text-white right-0 left-0 bg-opacity-70'>
      
      <h1 className='font-bold text-white text-3xl py-4'>
        {isSigninform ? "Sign IN" : "Sign Up"}
        </h1>
       
        <input
        type="text"
         placeholder='Email Address'
         className='p-4 my-4 w-full bg-gray-800'/>
       
        <input 
        type="password" 
        placeholder='Password' 
        className='p-4 my- 4w-full bg-gray-800 '/>

        {!isSigninform &&(
            <input 
        type="text" 
        placeholder='Full Name' 
        className='p-4 my- 4w-full bg-gray-800 '/>
        )}

        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>
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
