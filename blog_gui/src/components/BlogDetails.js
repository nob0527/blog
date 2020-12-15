import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "../styles/blog_details.css"
import {useParams} from "react-router-dom"
import axios from "axios";

function BlogDetails(props) {

    const {slug} = useParams()

    const [post, set_post] = useState([])

    const fetch_post = () => {
        axios({
            method: "get",
            url: `http://127.0.0.1:8000/api/posts/${slug}/`
        })
            .then(res => set_post(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch_post()
    }, [])


    return (
        <div className={"details_container"}>
            <h1>{post.title}</h1>
            <hr/>
            <h4>{post.card_body}</h4>
            <br/>
            <p>{post.body}</p>
            <hr/>

            <div>
                {
                    post.author?
                        <small>{post.author.first_name} {post.author.last_name}</small>
                        :
                        <div></div>
                }

                <small>{post.created}</small>
            </div>

            <div>
                <Link to={"/"}>Back</Link>
            </div>
        </div>
    );
}

export default BlogDetails;