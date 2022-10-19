import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost, deletePost } from "../features/postSlice";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
const Posts = () => {
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.myPost);
  console.log("posts", posts);
  const handleInput = (e) => {
    setId(e.target.value);
  };
  const handleFetch = () => {
    if (!id) {
      window.alert("please enter number");
    } else {
      dispatch(fetchPost({ id }));
      setId("");
    }
  };
  return (
    <div className="container mt-3">
      <div className="mb-5 w-25 mx-auto">
        <h2 className="form-header text-center">Fetch Post</h2>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Enter number
          </label>
          <input
            onChange={handleInput}
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={id}
          />
        </div>
        <div className="d-flex justify-content-around">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleFetch}
          >
            Fetch Post
          </button>
          <Link to="/add-post">
            <button type="button" className="btn btn-primary">
              Create Post
            </button>
          </Link>
        </div>
      </div>
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            {loading ? (
              <Skeleton count={5} />
            ) : (
              <>
                <h3>{posts?.id}</h3>
                <h5>{posts?.title}</h5>
                <p>{posts?.body}</p>
                <button className="btn btn-primary btn-sm mr-4">Edit</button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(deletePost({ id: posts.id }))}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
