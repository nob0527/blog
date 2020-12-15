import React, {useState, useEffect} from 'react';
import BlogList from "./BlogList";
import LatestCard from "./LatestCard";
import axios from "axios";

function Home(props) {
        /* itt kötjük ösze a két szervert hogy meg kapjuk az adatot  a Djangotól*/
    const [posts, set_posts] = useState([])

    const fetch_post = () => {
        axios({
            method: "get",
            url: "http://127.0.0.1:8000/api/"
        })
            .then(res => set_posts(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch_post()
    }, [])

    return (
        <div>
            <div className={"content_container"}>
                <BlogList posts={posts}/>
               <div >
                    <LatestCard posts={posts}/>
               </div>
            </div>
        </div>
    );
}


export default Home;