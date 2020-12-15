import React from 'react'
import BlogCard from "./BlogCard";


function BlogList({posts}) {


    return (
        <div>
            {
                posts.map(data => <BlogCard key={data.id} blog_data={data}/>)
            }
        </div>
    );
}

export default BlogList;