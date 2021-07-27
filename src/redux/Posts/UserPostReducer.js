import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../user/userTypes";



const initialState = {
    loading: false,
    post : [] ,
    error: ''
}

const PostReducer = (state = initialState, action) => {

switch (action.type) {
    case FETCH_USERS_REQUEST :
        return {
            ...state,
            loading: true
        }
    case FETCH_USERS_SUCCESS : 
        return {
        loading: false ,
        post: action.payload ,
        error: ''
    }    
    case FETCH_USERS_FAILURE : 
        return {
            loading: false ,
            post: [] ,
            error: action.payload
        }
    default : return state
}

}

export default PostReducer;