import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { fetchPostData, addPost} from '../redux/actions/index'
import {connect}  from 'react-redux';

const AddPost = props => {
  const {addPost, fetchPostData} = props
  const [newPost, setNewPost] = useState({fetchPostData})
 
 
  const post = e => {
    e.preventDefault()
    addPost(newPost)
  }

  const inputHandler = e => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value
    })
  }

    return (
        <div className="newPost">
           
     <h6>ADD POST:</h6>
     <form onSubmit={post} className="postInputs">
       <label>
         <input
           name="title"
           value={props.title}
           onChange={inputHandler}
           type="text"
           placeholder="Title"
         />
       </label>
       <br></br>
       <label>
         <input
           name="date"
           value={props.date}
           onChange={inputHandler}
           type="text"
           placeholder="Date"
         />
       </label>
       <br></br>
       <label>
         <input
           name="location"
           value={props.location}
           onChange={inputHandler}
           type="text"
           placeholder="Location"
         />
       </label>
       <br></br>
       <label>
         <input
           name="post"
           value={props.post}
           onChange={inputHandler}
           type="text"
           placeholder="Post"
         />
       </label>
       <br></br>
        <label>
         <input
           name="image_url"
           value={props.image_url}
           onChange={inputHandler}
           type="text"
           placeholder="Image"
         />
       </label>
       <button>Add Post</button>
      </form>
      </div>
    )
}


const mapStateToProps = (state) => {
    return {
      postData: state.postData,
      isFetching: state.isFetching,
    };
  };
  
  export default connect(mapStateToProps, {fetchPostData, addPost})(AddPost);
