import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs1 from "../components/Tabs1";
import ResultGrid from "../components/ResultGrid";

const HomePage = () => {
  return (
    <div>

      <div className="text-center p-5 bg-blue-900 text-2xl font-semibold">Media Search</div>

      <SearchBar />

      <Tabs1 />

      <ResultGrid />
      
    </div>
  )
}

export default HomePage

