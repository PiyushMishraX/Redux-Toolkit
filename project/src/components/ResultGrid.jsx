import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi";
// one level up from current --> ..
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useEffect } from "react";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      let data;
      const getData = async () => {
        if (activeTab == "photos") {
          let response = await fetchPhotos(query); // using let bcz is is {} block scoped
          // console.log(data); // select photos then input query search then get data

          data = response.results; // store results array in data
        }
        if (activeTab == "videos") {
          let response = await fetchVideos(query);
          // console.log(data);

          data = response.videos;
        }
        if (activeTab == "gif") {
          let response = await fetchGIF(query);
          // console.log(data);
          data = response.data.data;
        }
        console.log(data);
        
      };
      getData();
    },
    [query, activeTab],
  );

  return <div>{/* <button onClick={}>Get Data</button> */}</div>;
};

export default ResultGrid;
