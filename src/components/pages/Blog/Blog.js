import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [searchText, setSearchText] = useState('');

    const navigate = useNavigate(); 
    const readMore = (id) =>{
        const path = `/blog/${id}`;
        navigate(path);
        console.log(id)
    }
    const onSearch = e =>{
        setSearchText(e.target.value)
    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => setPosts(posts))
    },[searchText])

    // console.log(searchText);
    
    return (
        <div className='row'>
            <div className="col-md-3"></div>
            <div className="col-md-6 mb-4">
                <input type="text" onChange={onSearch} placeholder='Search blog' className="form-control" />
            </div>
            <div className="col-md-3"></div>
            {posts.map(post =>
                <div className="col-md-3" key={post.id}>
                    <div className="card my-2">
                        {/* <img src="..." className="card-img-top" alt="..."/> */}
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body.substring(0, 50)}...</p>
                            <button onClick={()=> readMore(post.id)} className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
                )}
        </div>
    );
};

export default Blog;