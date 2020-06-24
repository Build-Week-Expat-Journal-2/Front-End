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