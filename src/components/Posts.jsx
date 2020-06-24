import React from 'react'

export default function Posts(props) {
const {title, location, description, date, image_url} = props.post;

    

    return (
        <div className="entries">
        <>
        <div className="div">
        <div>
        Title: {title}
        </div>
        <br></br>
        <br></br>
        <div >
        Location: {location}
        </div>
        <br></br>
        <div >
        Post: {description}
        </div>
        <br></br>
        <br></br>
        <div >
        Date Posted:{date}
        </div>
        <br></br>
        </div>
        </>
        <div >
        <img className="img" src={image_url}/>
        </div>
        </div>
    )
}
