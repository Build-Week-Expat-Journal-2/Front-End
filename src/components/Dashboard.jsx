import React, {useEffect, useState} from "react";
import Posts from "./Posts";
import {axiosWithAuth} from "../utils/axiosWithAuth"



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
     <h2>Journal Entries</h2>
     <div>
            {posts.map(post => (
              <Posts key={post.id} post={post} />
            ))}
          </div>
   </div>
  );
};

export default Dashboard;
