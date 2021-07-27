import {combineReducers} from 'redux';
import userReducer from './user/userReducer';
import UserPostReducer from './Posts/UserPostReducer'
import SinglePostReducer from './singlePost/SinglePostReducer'


 const rootReducer = combineReducers({
    users: userReducer ,
    post: UserPostReducer ,
    SinglePost: SinglePostReducer
    
})

export default rootReducer;