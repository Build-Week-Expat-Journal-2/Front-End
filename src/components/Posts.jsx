import React from 'react'
import { deletePost } from '../redux/actions';
import {connect}  from 'react-redux';
import { useParams, useHistory } from "react-router-dom";


const Posts = props => {
const {title, location, description, date, image_url} = props.post;
const {push} = useHistory();
const {id} = useParams();
 
const handleDelete = e => {
    e.preventDefault();
    deletePost();
  }

    return (
        <div className="entries">
        <>
        <div className="div">
        <div>
        Title: {title}
        </div>
        <br></br>
        <div>
        Date Posted: {date}
        </div>
        <br></br>
        <div >
        Location: {location}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div >
        Post: {description}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <button onClick={() => {
           push(`/protected/update-post/${id}`)
        }}
        
        >Edit Post</button>
        <button onClick={handleDelete}>Delete</button>
        </div>
        </>
        <div >
        <img className="img" src={image_url}/>
        </div>
        </div>
    )
}

const mapStateToProps = state => {

    return {
      postData: state.postData
}
}

export default connect(mapStateToProps, {deletePost})(Posts)