import React from 'react';
import BlogCard from "./BlogCard";
import {MockData} from "../MockData";

function BlogList(props) {

    return (
        <div>
            {
                MockData.map(data => <BlogCard key={data.id} blog_data={data}/>)
            }
        </div>
    );
}

export default BlogList;