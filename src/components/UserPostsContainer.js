
import "../UserPostContainer.css";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPost, postid } from "../redux/index";
import {Link} from 'react-router-dom' ;


function UserPostsContainer({ userPost, fetchPost,postid }) {
  const[Id, setId] = useState('')

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  const handleId =(newId)=>{
    setId(newId)
    postid(newId)
    console.log(Id, 'hello')
  }

  return userPost.loading ? (
    <h3>Loading...</h3>
  ) : userPost.error ? (
    <h2>{userPost.error}</h2>
  ) : (
    <div className="container2">
      <div className="container2-child">
      {
      
      (userPost &&
        userPost.post.data &&
        userPost.post.data.slice(0, 4).map((itemPost) => {
          
          return (
          
               <div className="container36 " >
              <div>
                <div className="post_container1">
                  <div className="personProfile">
                    <img src={itemPost.owner.picture} alt="picture" />
                    <div>
                      <h6>
                        {itemPost.owner.firstName} {itemPost.owner.lastName}
                      </h6>
                      <span className="text-muted">{itemPost.owner.email}</span>
                    </div>
                  </div>
                  <div className="post_image">
                    <img src={itemPost.image} alt="" />
                    <p>{itemPost.text}</p>
                    <p className="postP">
                      <p>{itemPost.tags[0]}</p>
                      <p>{itemPost.tags[1]}</p>
                    </p>

                    <h6 className="postLink">
                      {itemPost.text}{" "}
                      <span>
                        <a href="instagram">{itemPost.link}</a>
                      </span>
                    </h6>
                  </div>
                  <div className="postLikes">
                    <p>
                      <i class="fa fa-heart" aria-hidden="true"></i>

                      <span> {itemPost.likes}</span>
                    </p>

                    <p className="text-muted">
                      <text>{itemPost.publishDate}</text>
                    </p>
                  </div>
                  <div className="post_link">
                    <span>
                      <Link to={`/userPost/${itemPost.id}`}>Get user Posts</Link>
                    </span>
                    <span>
                      <a href="#uyer">Get Owner profile</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
           
           
          );
        })
        )}
      </div>
      <div className="container2-child">
      {userPost &&
        userPost.post.data &&
        userPost.post.data.slice(4, 7).map((itemPost) => {
          return (
          
               <div className="container36 " >
              <div>
                <div className="post_container1">
                  <div className="personProfile">
                    <img src={itemPost.owner.picture} alt="profile" />
                    <div>
                      <h6>
                        {itemPost.owner.firstName} {itemPost.owner.lastName}
                      </h6>
                      <span className="text-muted">{itemPost.owner.email}</span>
                    </div>
                  </div>
                  <div className="post_image">
                    <img src={itemPost.image} alt="" />
                    <p>{itemPost.text}</p>
                    <p className="postP">
                      <p>{itemPost.tags[0]}</p>
                      <p>{itemPost.tags[1]}</p>
                    </p>

                    <h6 className="postLink">
                      {itemPost.text}{" "}
                      <span>
                        <a href="instagram">{itemPost.link}</a>
                      </span>
                    </h6>
                  </div>
                  <div className="postLikes">
                    <p>
                      <i class="fa fa-heart" aria-hidden="true"></i>

                      <span> {itemPost.likes}</span>
                    </p>

                    <p className="text-muted">
                      <text>{itemPost.publishDate}</text>
                    </p>
                  </div>
                  <div className="post_link">
                    <span>
                    <Link to={`/userPost/${itemPost.owner.id}`}>Get user Posts</Link>
                    </span>
                    <span>
                      <a href="#uyer">Get Owner profile</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
           
           
          );
        })}
      </div>
      <div className="container2-child">
      {userPost &&
        userPost.post.data &&
        userPost.post.data.slice(7, 10).map((itemPost) => {
          return (
          
               <div className="container36 " >
              <div>
                <div className="post_container1">
                  <div className="personProfile">
                    <img src={itemPost.owner.picture} alt="profile" />
                    <div>
                      <h6>
                        {itemPost.owner.firstName} {itemPost.owner.lastName}
                      </h6>
                      <span className="text-muted">{itemPost.owner.email}</span>
                    </div>
                  </div>
                  <div className="post_image">
                    <img src={itemPost.image} alt="" />
                    <p>{itemPost.text}</p>
                    <p className="postP">
                      <p>{itemPost.tags[0]}</p>
                      <p>{itemPost.tags[1]}</p>
                    </p>

                    <h6 className="postLink">
                      {itemPost.text}{" "}
                      <span>
                        <a href="instagram">{itemPost.link}</a>
                      </span>
                    </h6>
                  </div>
                  <div className="postLikes">
                    <p>
                      <i class="fa fa-heart" aria-hidden="true"></i>

                      <span> {itemPost.likes}</span>
                    </p>

                    <p className="text-muted">
                      <text>{itemPost.publishDate}</text>
                    </p>
                  </div>
                  <div className="post_link">
                    <span>
                    {/* <Link to={`/userPost/${itemPost.owner.id}`}>Get user Posts</Link> */}

                    <Link onClick={()=>handleId(itemPost.owner.id)}>hello</Link>
                    </span>
                    <span>
                      <a href="#uyer">Get Owner profile</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
           
           
          );
        })}
      </div>
     

      
    </div>
  );
}


const mapStateToProp = (state) => {
  return {
    userPost: state.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: () => dispatch(fetchPost()),
    postid: ()=>dispatch(postid())
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(UserPostsContainer);
