// // import { fetchGIF, fetchGifs, fetchPhotos, fetchVideos } from "./api/mediaApi";
// import { fetchGIF, fetchPhotos, fetchVideos } from "./api/mediaApi";

// const App = () => {
//   // function getPhotos(){
//   //   fetchPhotos()
//   // }

//   return (
//     <div className="h-screen w-ful text-white  bg-gray-950">
//       {/* <h1 className='text-6xl bg-red-600'>I am Piyush</h1> */}

//       {/* <button onClick={getPhotos}>Get photos</button> */}
//       {/* <button onClick={fetchPhotos}>Get photos</button>  */}
//       {/* to see fo to inspect -> network -> photos */}

//       <button
//         className=" bg-green-400 px-4 py-2 m-5"
//         onClick={async () => {
//           // fetchPhotos('cat')
//           // fetchPhotos('dog')
//           // console.log(fetchPhotos('cat'));
//           const data = await fetchPhotos("cat");

//           // console.log(data);
//           console.log(data.results);
//         }}
//       >
//         Get photos
//       </button>

//       <button
//         className=" bg-green-400 px-4 py-2 m-5"
//         onClick={async () => {
//           const data = await fetchVideos("cat");
//           // console.log(data);
//           // console.log(data.results);
//           console.log(data.videos);
//         }}
//       >
//         Get Videos
//       </button>
//       {/* <button
//         className="bg-green-400 px-4 py-2 m-5"
//         onClick={async () => {
//           const data = await fetchGifs("Dog");
//           if (data) {
//             console.log("Success! Here is your data:", data);
//           } else {
//             console.log("Fetch failed. Check the console for errors.");
//           }
//         }}
//       >
//         Get Gifs
//       </button> */}
//       <button
//         className=" bg-green-400 px-4 py-2 m-5"
//         onClick={async () => {
//           const data = await fetchGIF("cat");
//           // console.log(data);
//           console.log(data.data.data);
//         }}
//       >
//         Get Gifs
//       </button>
//     </div>
//   );
// };

// export default App;

import React from "react";
import SearchBar from "./components/SearchBar";
import Tabs1 from "./components/Tabs1";
import ResultGrid from "./components/ResultGrid";

const App = () => {
  return (
    // <div className="h-screen w-ful text-white  bg-gray-950">
    <div className="w-full min-h-screen text-white  bg-gray-950">
      <SearchBar />
      <Tabs1 />
      <ResultGrid />
      {/* <img src="https://media4.giphy.com/media/v1.Y2lkPTU5MDE0MWYxYXEyZGwxdzF2cW1nZmpxa2hkN3RmanowaDAxZmhsbmdjYTlxNGJtMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/901mxGLGQN2PyCQpoc/giphy-downsized.gif" alt="" /> */}
    </div>
  );
};

export default App;
