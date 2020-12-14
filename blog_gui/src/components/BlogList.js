import React, {useState, useEffect} from 'react';
import axios from 'axios'
import BlogCard from "./BlogCard";


function BlogList(props) {
    /* itt kötjük ösze a két szervert hogy meg kapjuk az adatot  a Djangotól*/
    const [posts, set_post] = useState([])

    const fetch_post = () => {
        axios({
            method: "get",
            url: "http://127.0.0.1:8000/api/"
        })
            .then(res => set_post(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch_post()
    }, [])

    return (
        <div>
            {
                posts.map(data => <BlogCard key={data.id} blog_data={data}/>)
            }
        </div>
    );
}

export default BlogList;