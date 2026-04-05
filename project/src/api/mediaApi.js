// code from where we will call api and fetch api

import axios from 'axios'

// api key import method
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY

export async function fetchPhotos(query,page =1 , per_page=20) {
    // const res = axios.get('https://api.unsplash.com/search/photos') // to get photos
    // <https://api.unsplash.com/search/photos?page=1&query=office>; rel="first", <https://api.unsplash.com/search/photos?page=1&query=office>; rel="prev", <https://api.unsplash.com/search/photos?page=3&query=office>; rel="last", <https://api.unsplash.com/search/photos?page=3&query=office>; rel="next" // we use shorter method intead of hard code writing with {} // shorter and structured method


    // const res = axios.get('https://api.unsplash.com/search/photos',{
    const res = await axios.get('https://api.unsplash.com/search/photos',{
        // pass query in params 
        params:{query,page,per_page}, // passing query in params
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`} //make sure to write everything same 
    }) 
    // console.log(res);
    return res.data;
    
}