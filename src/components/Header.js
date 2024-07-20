import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

const user = useSelector(store=>store.user);

  const handleSignOut=()=>{
  signOut(auth)
  .then(() => {
    
  

  }).catch((error) => {
    navigate("/error");
  });
}

useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
    
      const {uid,
        email,
        displayName,
        photoURL} = user;
      // ...
      dispatch(addUser({uid:uid, 
        email:email, 
        displayName:displayName,
        photoURL:photoURL
      })
    );
  
    navigate("/browse");
     
    } else {
      // User is signed out
      // ...
      dispatch(removeUser());
     navigate("/");
  
    }
  });

  //unsubscribed when component unmount
  return ()=> unsubscribe();
      },[])
  

  return (
    <div  className='  absolute px-8 py-2 bg-gradient-to-b from-black shadow-lg z-10 w-screen flex justify-between'>
     <img
    className='w-44'
    alt='logo'
    src={LOGO}
     />
    {user &&( <div className='flex p-2'>
      <img
      className='w-12 h-12 '
      alt ="usericon"
      // src={user?.photoURL}
      src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'
      />
      <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
     </div>
     )}
    </div>
  )
}


export default Header

