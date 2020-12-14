import React from 'react';
import BlogCard from "./BlogCard";
import {Mock_BlogList} from "../Mock_BlogList";

function BlogList(props) {

    return (
        <div>
            {
                Mock_BlogList.map(data => <BlogCard key={data.id} blog_data={data}/>)
            }
        </div>
    );
}

export default BlogList;