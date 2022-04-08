import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState({});
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res => res.json())
        .then(blog => setBlog(blog));
    },[])

    const {title, body} = blog;
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default BlogDetails;