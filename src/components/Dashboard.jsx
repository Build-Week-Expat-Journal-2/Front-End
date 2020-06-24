import React, {useEffect} from "react";
import Posts from "./Posts";
import "../App.css";
import {connect}  from 'react-redux';
import { fetchPostData} from '../redux/actions/index'
import AddPost from '../components/AddPost';


const Dashboard = (props) => {
  const {fetchPostData} = props

  useEffect(() => {
    fetchPostData()
  }, [fetchPostData])

  return (

    <div>
     <h2>Expat Journal</h2>
     <AddPost/>

    
   <div>
   <div className="main-container">
     <h1>Expat Journal</h1>
     <br></br>
     <br></br>
     <div className="newPost">
     <h2>New Post:</h2>
     <form className="postInputs">
       <label>
         <input
           placeholder="Title"
         />
       </label>
       <br></br>
       <label>
         <input
           placeholder="Location"
         />
       </label>
       <br></br>
       <label>
         <input
           placeholder="Post"
         />
       </label>
       <br></br>
       <label>
         <input
           placeholder="Date Posted"
         />
       </label>
       <br></br>
       
        <label>
         <input
           placeholder="Image"
         />
       </label>
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
  );
};


const mapStateToProps = (state) => {
  return {
    postData: state.postData,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, {fetchPostData})(Dashboard);