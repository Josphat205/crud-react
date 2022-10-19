import React ,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { createPost } from "../features/postSlice";
import {useDispatch} from 'react-redux'
const initialState = {
    title:'',
    body:''
}
const AddPost = () => {
    const [post, setPost] = useState(initialState)
    const{title,body} = post;
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleInput = (e) =>{
        const { name, value} = e.target;
        setPost({...post, [name] : value})
    }
    const handleSubmit = e =>{
        e.preventDefault()
        if(!title || !body){
            window.alert('all fields required')
        }else{
            dispatch(createPost({title,body}))
            setTimeout(()=>navigate('/'),500)
            setPost({title:'',body:''})
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4 w-25 mx-auto">
          <h2 className="form-header text-center">Add Post</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Add Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name='title'
              value={title}
              onChange={handleInput}
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Add body
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name='body'
              value={body}
              onChange={handleInput}
            />
          </div>
          <div className="">
            <button type="submit" className="btn btn-primary">
              Save post
            </button>
            <Link to="/">
              <input
                className="btn btn-default"
                type="button"
                value="Go back"
              />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
