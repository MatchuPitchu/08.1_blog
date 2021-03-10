import React, { useState, useEffect } from 'react';

const Blogpost = ({ post }) => {
    const { authorReference, datePublished, postContent, postImage, postTitle } = post.fields;
    const [paragraphe, setParagraphe] = useState([]);

    useEffect(() => {
        const p = postContent.content.map(item => item.content.map(item => item.value));    
        setParagraphe(p);
        console.log(paragraphe[0]);
    }, []);

    const a = postContent.content.map((index) => { index.content.map((innerIndex) => paragraphe.push(`${innerIndex.value}`)) })
    return (
        <div className="col-md-4 mt-2 mb-4">
            <div className="card">
                <img src={postImage.fields.file.url} className="card-img-top" alt="article header image" />
                <div className="card-body">
                    <h5 className="card-title">{postTitle}</h5>
                    <h6 className="blockquote-footer">Published on: {datePublished.substr(0, 10)}</h6>
                    <h6 className="blockquote-footer">{authorReference.fields.authorName}</h6>
                    <p className="card-text">{paragraphe[0]}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>



        // <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "antiquewhite", margin: "2em" }}>

        //     <img style={{ margin: "1em", width: "50%" }} src={`https:${postImage.fields.file.url}`} alt="article" />

        //     <h1>{postTitle}</h1>

        //     <div style={{ width: "50%", color: "gray", display: "flex", justifyContent: "space-between" }}>
        //         <h6>Publisehed on: {datePublished.substr(0, 10)}</h6>
        //         <h6>{authorReference.fields.authorName}</h6>
        //     </div>

            
        //     {paragraphe.map((paragraph) => <p>{paragraph}</p>)} 
        //     {/* {console.log("etwas" + etwas)} */}


        // </div>
    )
}
// Blogpost.propTypes = {
// It is created by shortcut. Ask to Jorge => For what it is used?
// import Proptypes id also created when I used shortcut=^
// }

export default Blogpost