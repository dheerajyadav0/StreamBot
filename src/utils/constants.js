export  const LOGO = 
'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
export const USER_AVATAR="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgWmxAh2YQyMmIHRVZRBIQutyjm8bvpaeQyw&s"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

  export const BG_URL='https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg'

  export const SUPPORTED_LANGUAGES =[{identifier:"en" ,name :"English"},{identifier:"Hindi" ,name :"Hindi"},{identifier:"Spanish" ,name :"spanish"},{identifier:"Telgu" ,name :"Telgu"},{identifier:"Punjabi" ,name :"Punjabi"},{identifier:"Gujarati" ,name :"Gujarati"}]

  export const OPENAI_KEY =process.env.REACT_APP_OPENAI_KEY
  // 