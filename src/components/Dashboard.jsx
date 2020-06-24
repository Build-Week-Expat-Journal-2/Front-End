import React, {useEffect, useState} from "react";
import Posts from "./Posts";
import "../App.css";
import {connect}  from 'react-redux';
import { fetchPostData, addPost} from '../redux/actions/index'
import {axiosWithAuth} from "../utils/axiosWithAuth"

const initialFormValue = {
  title: "",
  date: "",
  location: "",
  post: "",
  image: ""
}


const Dashboard = (props) => {
const [formValues, setFormValues] = useState(initialFormValue)
const {fetchPostData, addPost} = props

useEffect(() => {
  fetchPostData()
}, [fetchPostData])


const inputHandler = e => {
  const name = e.target.name
  const value = e.target.value

  setFormValues({
      ...formValues,
      [name]: value
  })
}

  return (
    <>
   <div>
   <div >
     <h2>Expat Journal</h2>
     <br></br>
     <br></br>
     <div className="newPost">
     <h6>ADD POST:</h6>
     <form onSubmit={addPost} className="postInputs">
       <label>
         <input
           name="title"
           value={formValues.title}
           onChange={inputHandler}
           type=""
           placeholder="Title"
         />
       </label>
       <br></br>
       <label>
         <input
           name="date"
           value={formValues.date}
           onChange={inputHandler}
           type=""
           placeholder="Date"
         />
       </label>
       <br></br>
       <label>
         <input
           name="location"
           value={formValues.location}
           onChange={inputHandler}
           type=""
           placeholder="Location"
         />
       </label>
       <br></br>
       <label>
         <input
           name="post"
           value={formValues.post}
           onChange={inputHandler}
           type=""
           placeholder="Post"
         />
       </label>
       <br></br>
        <label>
         <input
           name="image"
           value={formValues.image}
           onChange={inputHandler}
           type=""
           placeholder="Image"
         />
       </label>
       <button>Add Post</button>
     </form>
  </div>
     <br></br>
     <br></br>
     <br></br>
     <div>
            {props.postData.map(post => (
              <Posts key={post.id} post={post} />
            ))}
          </div>
          </div>
   </div>
   </>
  );
};


const mapStateToProps = (state) => {
  return {
    postData: state.postData,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, {fetchPostData, addPost})(Dashboard);