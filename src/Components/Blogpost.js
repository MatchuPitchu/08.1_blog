import React from 'react'
import PropTypes from 'prop-types'

const Blogpost = ({ post }) => {

    const { authorReference, datePublished, postContent, postImage, postTitle } = post.fields;
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", background: "antiquewhite", margin: "2em" }}>
            <img style={{ margin: "1em", width: "50%" }} src={`https:${postImage.fields.file.url}`} alt="article" />
            <h1>{postTitle}</h1>
            <div style={{ width: "50%", color: "gray", display: "flex", justifyContent: "space-between" }}>
                <h5>{datePublished}</h5>
                <h4>{authorReference.fields.authorName}</h4>
            </div>

            {/*I tried to return content of article in this line, but it doesn't work. */}
            <p>{postContent.content.map((index) => { index.content.map((innerIndex) => <p>{innerIndex.value}</p>) })}</p>


        </div>
    )
}

// Blogpost.propTypes = {
// It is created by shortcut. Ask to Jorge => For what it is used?
// import Proptypes id also created when I used shortcut=^
// }

export default Blogpost
