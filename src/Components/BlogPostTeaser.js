import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blogpost = ({ post }) => {
    const { authorReference, datePublished, postContent, postImage, postTitle } = post.fields;
    const [blogID, setBlogID] = useState('');
    const [paragraphe, setParagraphe] = useState([]);

    useEffect(() => {
        setBlogID(post.sys.id);
        console.log(blogID);
    }, []);
    
    useEffect(() => {
        const p = postContent.content.map(item => item.content.map(item => item.value));    
        setParagraphe(p);
        console.log(paragraphe[0]);
    }, []);
    
    const a = postContent.content.map((index) => { return index.content.map((innerIndex) => paragraphe.push(`${innerIndex.value}`)) })
  
    return (
        <div className="col-md-4 mt-2 mb-4">
            <div className="card">
                <img src={postImage.fields.file.url} className="card-img-top" alt="article header" />
                <div className="card-body">
                    <h5 className="card-title">{postTitle}</h5>
                    <h6 className="blockquote-footer">Published on: {datePublished.substr(0, 10)}</h6>
                    <h6 className="blockquote-footer">Author: {authorReference.fields.authorName}</h6>
                    <p className="card-text">{paragraphe[0]}</p>
                    <div className="text-center linkToBlogPost">
                        <Link to={`/${post.sys.id}`} className="btn-blogTeaser">Read more</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogpost;