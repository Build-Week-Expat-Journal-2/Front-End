import React, {useEffect, useState} from "react";
import Posts from "./Posts";
import {axiosWithAuth} from "../utils/axiosWithAuth"
import "../App.css";


const Dashboard = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
   const getData = () => {
    const token = window.localStorage.getItem("token");
    axiosWithAuth()
      .get("/story")
      .then(response => {
        console.log(response)
        setPosts(response.data)
      })
      .catch(err => console.log(err));
  };
  getData();
}, []);

  return (
    <>
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
            {posts.map(post => (
              <Posts key={post.id} post={post} />
            ))}
          </div>
          </div>
   </div>
   </>
  );
};

export default Dashboard;
