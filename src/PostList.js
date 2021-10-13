import React, { useState, useEffect } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
    const [posts, setPosts] = useState({});


    const GetPosts = async () => {
        let options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
        }

        const req = new Request("http://posts.com/posts/", options);

        const resp = await fetch(req);

        if (resp.ok) {
            let result = await resp.json();
            setPosts(result)
            return result
        } else {
            console.log("POST Erorr")
        }
    }
    
    useEffect(() => {
        GetPosts();
    }, []);

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div 
                className='card'
                style={{ width: '30%', marginBottom: '20px', marginTop: '20px'}}
                key={post.id}>
                    <div className='card-body'>
                        <h3 className='has-text-centered title'>{post.title}</h3>
                        <CommentList comments={post.comments} />

                        <CommentCreate postId={post.id} />

                    </div>
            </div>
        )
    })

    return (
    <div className='section' >
        <h1 className='title'>Posts</h1>
        <div className='container' style={{ display: "flex", justifyContent: "space-between" , border: "1px solid lightgray"}}>
            {renderedPosts}
        </div>
    </div>
    )
}

export default PostList;