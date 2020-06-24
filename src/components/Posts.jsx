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
        <div >
        <img className="img" src={image_url}/>
        </div>
        <br></br>
        <button onClick={() => {
           push(`/protected/update-post/${id}`)
        }}
        
        >Edit Post</button>
        <button onClick={handleDelete}>Delete</button>
        </div>
        
        
        </div>
      
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

const mapStateToProps = state => {

    return {
      postData: state.postData
}
}

export default connect(mapStateToProps, {deletePost})(Posts)