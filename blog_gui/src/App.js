import React from "react";

import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import LatestCard from "./components/LatestCard";


function App() {
  return (
    <div >
      <Navbar/>
      
      <BlogList/>
      <LatestCard/>
    </div>
  );
}

export default App;
