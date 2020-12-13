import React from "react";

import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import LatestCard from "./components/LatestCard";


function App() {
  return (
    <div >
      <Navbar/>
      
        <div className={"content_container"}>
            <BlogList/>
           <div >
                <LatestCard/>
           </div>
        </div>
    </div>
  );
}

export default App;
