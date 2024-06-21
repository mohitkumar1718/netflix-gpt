export const LOGO="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png";
export const USER_AVATAR="https://avatars.githubusercontent.com/u/115692399?v=4";

export const API_OPTIONS= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_API_KEY,
    }
  };
  export const BG_IMG="https://image.tmdb.org/t/p/w1920_and_h800_multi_faces"
  export const IMG_URL_CDN="https://media.themoviedb.org/t/p/w220_and_h330_face"
  export const BG_URL='https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg'
  export const languageOptions=[
    {identifier:"en",name:"English"},
    {identifier:"hindi",name:"Hindi"},
    {identifier:"spanish",name:"Spanish"},
]

export const OPEN_AI_KEY=process.env.REACT_APP_OPEN_AI_KEY;
export const url = 'https://openai-api-gpt-3-5-turbo.p.rapidapi.com/api/v1/chat/completions';