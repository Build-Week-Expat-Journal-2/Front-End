import React, {useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {useParams, useHistory} from "react-router-dom";

const NewPost = props => {
const {id, title, date, location, description, image_url} = props.post

const handleDelete = e => {
  e.preventDefault()
    axiosWithAuth()
    .delete(`/story/${id}`)
         .then(res => {
           console.log(res);
           window.location.reload();
         })
         .catch(err => console.log(err));
  }

 
    return (
        <div>
        <div>
            {title}
            </div>
            <br></br>
       <br></br>
            <div>
            {date}
            </div>
            <br></br>
       <br></br>
            <div>
            {location}
            </div>
            <br></br>
       <br></br>
            <div>
            {description}
            </div>
            <br></br>
       <br></br>
            <div>
           <img src={image_url} />
            </div>
            <br></br>
       <br></br>
            <button>update</button>
         
            <br></br>
            <br></br>
            <button onClick={handleDelete}>delete</button>
          <div>___________________________________</div>
          <br></br>
            <br></br>
        </div>
    
    )
}

export default  NewPost