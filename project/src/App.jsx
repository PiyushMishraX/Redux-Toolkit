import { fetchPhotos } from "./api/mediaApi"


const App = () => {

  function getPhotos(){
    fetchPhotos()
  }
  return (
    <div className="h-screen w-ful text-white  bg-gray-950">
      {/* <h1 className='text-6xl bg-red-600'>I am Piyush</h1> */}
      
      {/* <button onClick={getPhotos}>Get photos</button> */}
      {/* <button onClick={fetchPhotos}>Get photos</button>  */}
      {/* to see fo to inspect -> network -> photos */}


      <button onClick={()=>{
        fetchPhotos('cat')
      }}>Get photos</button> 
    </div>
  )
}

export default App
