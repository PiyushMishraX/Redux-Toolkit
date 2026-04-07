import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi"; 
// one level up from current --> ..
import {setQuery, setLoading, setError , setResults } from '../redux/features/searchSlice'
import { useEffect } from "react";


const ResultGrid = () => {

    const {query, activeTab, results, loading, error} = useSelector((store)=>store.search)

    
    useEffect(function () {
      let data;
      const getData = async ()=>{
          if(activeTab== 'photos'){
              data= await fetchPhotos(query)
              // console.log(data); // select photos then input query search then get data     
          }
          if(activeTab== 'videos'){
              data= await fetchVideos(query)
              // console.log(data);  
          }
          if(activeTab== 'gif'){
              data= await fetchGIF(query)
              // console.log(data); 
            }
            console.log(data); 
          }
      getData()
    },[query ,activeTab])

  return (
    <div>
      {/* <button onClick={}>Get Data</button> */}
    </div>
  )
}

export default ResultGrid
