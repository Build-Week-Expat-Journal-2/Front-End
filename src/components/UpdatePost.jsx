import React, {useState, useEffect} from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import {connect}  from 'react-redux';
import { fetchPostData, editPost} from '../redux/actions/index'

const initialFormValue = {
    title: "",
    date: "",
    location: "",
    post: "",
    image: ""
  }

const UpdatePost = (props) => {
const {title, location, description, date, image_url} = props.post;
const [post, setPost] = useState(initialFormValue);
const {push} = useHistory();
const {id} = useParams();
 
useEffect(() => {
    fetchPostData()
  }, [fetchPostData])

const changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;

    setPost({
        ...post, 
        [ev.target.name]: value
    })

}

const handleSubmit = e => {
    e.preventDefault();
    editPost();
    push(`/story/${id}`)
  };

    return(
        <div>
        <h2>Update Post</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                onChange={changeHandler}
                placeholder="title"
                value={post.title}
            />
             <input
                type="text"
                name="date"
                onChange={changeHandler}
                placeholder="date"
                value={post.date}
            />
             <input
                type="text"
                name="location"
                onChange={changeHandler}
                placeholder="location"
                value={post.location}
            />
             <input
                type="text"
                name="post"
                onChange={changeHandler}
                placeholder="post"
                value={post.post}
            />
                <input
                type="text"
                name="post"
                onChange={changeHandler}
                placeholder="post"
                value={post.image}
            />

        <button>update</button>
        </form>
        </div>

    )
}

export default UpdatePost;