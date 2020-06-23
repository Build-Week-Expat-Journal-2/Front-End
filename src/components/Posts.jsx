import React from 'react'

export default function Posts(props) {
const {title, location} = props.post;

    

    return (
        <div>
             <h2>{title}</h2>
        <div >
          <h5>{location}</h5>
        </div>
        </div>
    )
}
