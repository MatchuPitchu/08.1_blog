import React from 'react'
import BlogPost from './BlogPost'

const BlogPosts = ({ posts }) => {


    return (
        <div>
            {posts ? posts.map((post) => 
            <BlogPost key={post.sys.id} post={post}/>
            ) : <h2>Loading</h2>}
        </div>
    )
}

export default BlogPosts
