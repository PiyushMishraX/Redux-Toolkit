import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs1 from "../components/Tabs1";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { query } = useSelector((store) => store.search);

  return (
    <div>
      <div className="px-5 py-8 bg-(--c2) ">
        <h2 className="text-2xl font-medium">MediaSearch</h2>
        
      </div>

      <SearchBar />

      {query != "" ? (
        <div>
          <Tabs1 /> <ResultGrid />{" "}
        </div>
      ) : ("")}
    </div>
  );
};

export default HomePage;
