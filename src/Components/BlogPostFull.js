import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogPostFull = ({ posts }) => {
    let { blogID } = useParams();
    const [ allPosts, setAllPosts ] = useState([posts]);
    const [ indexBlog, setIndexBlog ] = useState(null);
    const [ postData, setPostData ] = useState(null);

    useEffect(() => {
        setAllPosts(posts);
        let index = posts.findIndex(item => item.sys.id === blogID);
        console.log(index);
        setIndexBlog(index);
    }, [allPosts])

    useEffect(() => {
        setPostData(allPosts[indexBlog])
    }, [indexBlog])

    if(postData) {
        console.log(postData.fields.postContent.content.map(item => item.content.map(item => item.value)));
    }
    // const { authorReference, datePublished, postContent, postImage, postTitle } = postData.fields;
    
    if(!postData) {
        return <h2>Loading ... </h2>    
    }
        
    return (
            <>
            <h1>Test</h1>

            <h2 className="mt-5">{postData.fields.postTitle}</h2>
            <h6 className="blockquote-footer">Published on: {postData.fields.datePublished.substr(0, 10)}</h6>
            <h6 className="blockquote-footer">Author: {postData.fields.authorReference.fields.authorName}</h6>
            <img src={postData.fields.postImage.fields.file.url} className="card-img-top" alt="article header image" />
            {/* {postData.fields.postContent.content.map(item => {
                return item.content.map(item => {
                    return item.value.map(item => {
                        return (
                        <p>{item}</p>
                        )
                        }) 
                    })
                })
            } */}
            
            <p></p>
            {/* 
                     
            
            <p className="card-text">{paragraphe[0]}</p>
            <div className="text-center linkToBlogPost">
            <Link to={`/${post.sys.id}`} className="btn-blogTeaser">Read more</Link>
            </div>
        </div> */}
        </>
    )
}

export default BlogPostFull;