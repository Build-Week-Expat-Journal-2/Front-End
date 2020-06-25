import React from "react";
import "../App.css";
import AddPost from '../components/AddPost';

const Dashboard = () => {
return (
    <div>
        <h2>Expat Journal</h2>
        <br></br>
        <br></br>
        <AddPost/>
    </div>  
  );
};

export default Dashboard