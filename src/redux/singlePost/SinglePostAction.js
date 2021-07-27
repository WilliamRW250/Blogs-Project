
import { FETCH_SINGLEPOST_FAILURE, FETCH_SINGLEPOST_REQUEST, FETCH_SINGLEPOST_SUCCESS, POSTID } from "./SinglePostType"
import axios from 'axios'

let userId;


export const postid= id => {
  userId = id
  return {
    type: POSTID,
    payload: id
}

}


export const fetchSinglePost = () => {
 
  
  return (dispatch) => {
    dispatch(fetchSinglePostRequest())
     axios
     .get(`https://dummyapi.io/data/api/user/${userId}/post?limit=10` , {headers: {'app-id':'60ed724761d5653bcdfe8a3c'} })
     .then(response =>{
       const Singlepost = response.data 
       dispatch(fetchSinglePostSuccess(Singlepost))
     })
     .catch(error => {
       const errorMessage = error.message
       dispatch(fetchSinglePostFailure(errorMessage))
     })
  }
}














export const fetchSinglePostRequest = () => {
    return { type: FETCH_SINGLEPOST_REQUEST
  }
  }
  export const fetchSinglePostSuccess = post => {
    return { 
      type: FETCH_SINGLEPOST_SUCCESS ,
      payload: post
  }
  }
  
  export const fetchSinglePostFailure = error => {
      return {
        type: FETCH_SINGLEPOST_FAILURE ,
        payload: error
      }
  }