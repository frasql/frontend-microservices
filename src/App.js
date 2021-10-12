import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

const App = () => {
    return (
        <>
        <h1 className='has-text-centered'>Crea un post</h1>
        <PostCreate></PostCreate>
        <hr />
        <PostList></PostList>
        </>
    )
}

export default App;