import React, {useState, useEffect} from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialStory = {
    title: "",
    date: "", 
    location: "", 
    description: "",
    image_url: ""
}


const UpdatePost = (props) => {
const [story, setStory] = useState(initialStory);

const {push} = useHistory();
const {id} = useParams();

useEffect(() => {
    axiosWithAuth() 
      .get(`/story/${id}`)
      .then(res => {
          setStory(res.data)
      })
      .catch(err => console.log(err))
}, [id]);

const changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;

    setStory({
        ...story,
        [ev.target.name]: value
    })
}

const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .put(`/story/${id}`, story)
    .then(res => {
        props.getStoryList();
        push(`/story/${id}`);
    })
    .catch(err => console.log(err))
}
    
    return(
        <div>
        <h2>Update Post</h2>
        <form onSubmit={handleSubmit}>
            <label>
                <input></input>
            </label>
            <button>update</button>
            <div >
        <Link to="/dashboard">Back</Link>
      </div>
        </form>
        </div>

    )
}

export default UpdatePost;