import React from 'react'

export default function Posts(props) {
const {title, location, description, date, image_url} = props.post;

    

    return (
        <div>
             <h4>{title}</h4>
        <div >
          <h4>{location}</h4>
        </div>
        <div >
          <h4>{description}</h4>
        </div>
        <div >
          <h4>{date}</h4>
        </div>
        <img src={image_url}/>
         
        </div>
    )
}
