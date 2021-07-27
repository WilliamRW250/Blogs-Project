import { FETCH_SINGLEPOST_FAILURE, FETCH_SINGLEPOST_REQUEST, FETCH_SINGLEPOST_SUCCESS, POSTID } from "./SinglePostType"


const initialState = {
    loading: false,
    Single_Post : [] ,
    error: '',
    id: ''
}

const SinglePostReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_SINGLEPOST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_SINGLEPOST_SUCCESS : 
            return {
            loading: false ,
            Single_Post : action.payload ,
            error: ''
        }    
        case FETCH_SINGLEPOST_FAILURE : 
            return {
                loading: false ,
                Single_Post : [] ,
                error: action.payload
            }
        case POSTID : 
            return {
                id:action.payload
            }
        default : return state
    }
    
    }




    export default SinglePostReducer;
