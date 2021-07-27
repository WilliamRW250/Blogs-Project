import "../UserPostContainer.css";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPost, postid } from "../redux/index";
import {Link} from 'react-router-dom' ;

function PostsComponent({ userPost, fetchPost}) {

    useEffect(() => {
        fetchPost();
      }, [fetchPost]);

      userPost.loading ? (
        <h3>Loading...</h3>
      ) : userPost.error ? (
        <h2>{userPost.error}</h2>
      ) : ( 
        <div>
            
        </div>
    )
}

export default PostsComponent
