import React from 'react';
import BlogPost from './BlogPost';

const BlogPosts = ( { posts } ) => {
    console.log(posts);

    return (
        <>
            {posts ? posts.map((post) => 
            <BlogPost key={post.sys.id} post={post}/>
            ) : <h2>Loading ...</h2>}
        </>
    )
}

export default BlogPosts;
