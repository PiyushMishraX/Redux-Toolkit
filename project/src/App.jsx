import { fetchPhotos, fetchVideos } from "./api/mediaApi"


const App = () => {

  // function getPhotos(){
  //   fetchPhotos()
  // }

  return (
    <div className="h-screen w-ful text-white  bg-gray-950">
      {/* <h1 className='text-6xl bg-red-600'>I am Piyush</h1> */}
      
      {/* <button onClick={getPhotos}>Get photos</button> */}
      {/* <button onClick={fetchPhotos}>Get photos</button>  */}
      {/* to see fo to inspect -> network -> photos */}


      <button onClick={async ()=>{
        // fetchPhotos('cat')
        // fetchPhotos('dog')
        // console.log(fetchPhotos('cat'));
        const data = await fetchPhotos('cat')
        
        // console.log(data);
        console.log(data.results);
        
      }}>Get photos</button> 

      <button onClick={async ()=>{
        const data = await fetchVideos('cat')
        console.log(data.results);
        
      }}>Get Videos</button> 
    </div>
  )
}

export default App
