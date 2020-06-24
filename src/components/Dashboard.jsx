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
   <div>
     <h2>Journal</h2>
     <br></br>
     <br></br>
     <div>
            {posts.map(post => (
              <Posts key={post.id} post={post} />
            ))}
          </div>
   </div>
  );
};

export default Dashboard;
