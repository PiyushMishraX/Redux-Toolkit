import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs1 from "../components/Tabs1";
import ResultGrid from "../components/ResultGrid";

const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <Tabs1 />
      <ResultGrid />
    </div>
  )
}

export default HomePage

