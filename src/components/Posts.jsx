import React from 'react'

export default function Posts(props) {
const {title, location, description, date, image_url} = props.post;

    

    return (
        <div className="entries">
            <div className="post">
                <div className="post-title">
                Title: {title}
                </div>
                <div className="post-date">
                Date Posted: {date}
                </div>
                <div className="post-location">
                Location: {location}
                </div>
                <div className="post-description" >
                Post: {description}
                </div>
                <button className="edit-post">Edit Post</button>
            </div>    
        
        <div className="img-container">
            <img className="img" src={image_url}/>
        </div>    
          
        
    </div>
    )
}
