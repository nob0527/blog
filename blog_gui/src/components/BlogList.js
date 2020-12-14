import React, {useState, useEffect} from 'react';
import BlogCard from "./BlogCard";


function BlogList(props) {
    const [posts, set_post] = useState([])

    const fetch_post = () => {

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