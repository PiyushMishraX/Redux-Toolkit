import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi"; 
// one level up from current --> ..
import {setQuery, setLoading, setError , setResults } from '..redux/features/searchSlice'


const ResultGrid = () => {


  return (
    <div>
      
    </div>
  )
}

export default ResultGrid
