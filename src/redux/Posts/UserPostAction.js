
import axios from 'axios'
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../user/userTypes"


export const fetchPost = () => {
  return (dispatch) => {
    dispatch(fetchPostRequest())
     axios
     .get('https://dummyapi.io/data/api/post?limit=10?limit=10' , {headers: {'app-id':'60ed724761d5653bcdfe8a3c'} })
     .then(response =>{
       const post = response.data 
       dispatch(fetchPostSuccess(post))
     })
     .catch(error => {
       const errorMessage = error.message
       dispatch(fetchPostFailure(errorMessage))
     })
  }
}




export const fetchPostRequest = () => {
  return { type: FETCH_USERS_REQUEST
}
}
export const fetchPostSuccess = post => {
  return { 
    type: FETCH_USERS_SUCCESS ,
    payload: post
}
}

export const fetchPostFailure = error => {
    return {
      type: FETCH_USERS_FAILURE ,
      payload: error
    }
}