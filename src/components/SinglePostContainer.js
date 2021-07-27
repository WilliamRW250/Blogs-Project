import { fetchSinglePost } from '../redux/index';
import "../UserPostContainer.css";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';


function SinglePostContainer({SingleUserPost,fetchSinglePost }) {
    useEffect(() => {
        fetchSinglePost()
    }, [fetchSinglePost]);

    const {id} = useParams();

    return SingleUserPost.loading ? (
        <h3>Loading - {id}</h3>
    ): SingleUserPost.error ? (
        <h5>{SingleUserPost.error}</h5>
    ): (

<div className="container2">
      <div className="container2-child">
      {SingleUserPost &&
        SingleUserPost.Single_Post.data &&
        SingleUserPost.Single_Post.data.slice(0, 3).map((SinglePoster) => {
          return (
          
               <div className="container36 " >
              <div>
                <div className="post_container1">
                  <div className="personProfile">
                    <img src={SinglePoster.owner.picture} alt="" />
                    <div>
                      <h6>
                        {SinglePoster.owner.firstName} {SinglePoster.owner.lastName}
                      </h6>
                      <span className="text-muted">{SinglePoster.owner.email}</span>
                    </div>
                  </div>
                  <div className="post_image">
                    <img src={SinglePoster.image} alt="" />
                    <p className="postP">
                      <p>{SinglePoster.tags[0]}</p>
                      <p>{SinglePoster.tags[1]}</p>
                    </p>

                    <h6 className="postLink">
                      {SinglePoster.text}{" "}
                      <span>
                        <a href="instagram">{SinglePoster.link}</a>
                      </span>
                    </h6>
                  </div>
                  <div className="postLikes">
                    <p>
                      <i class="fa fa-heart" aria-hidden="true"></i>

                      <span> {SinglePoster.likes}</span>
                    </p>

                    <p className="text-muted">
                      <text>{SinglePoster.publishDate}</text>
                    </p>
                  </div>
                  <div className="post_link">
                    <span>
                      <a href="#uyer">Get post Comments</a>
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
      {SingleUserPost &&
        SingleUserPost.Single_Post.data &&
        SingleUserPost.Single_Post.data.slice(3, 7).map((SinglePoster) => {
          return (
          
               <div className="container36 " >
              <div>
                <div className="post_container1">
                  <div className="personProfile">
                    <img src={SinglePoster.owner.picture} alt="profile" />
                    <div>
                      <h6>
                        {SinglePoster.owner.firstName} {SinglePoster.owner.lastName}
                      </h6>
                      <span className="text-muted">{SinglePoster.owner.email}</span>
                    </div>
                  </div>
                  <div className="post_image">
                    <img src={SinglePoster.image} alt="" />
                    <p className="postP">
                      <p>{SinglePoster.tags[0]}</p>
                      <p>{SinglePoster.tags[1]}</p>
                    </p>

                    <h6 className="postLink">
                      {SinglePoster.text}{" "}
                      <span>
                        <a href="instagram">{SinglePoster.link}</a>
                      </span>
                    </h6>
                  </div>
                  <div className="postLikes">
                    <p>
                      <i class="fa fa-heart" aria-hidden="true"></i>

                      <span> {SinglePoster.likes}</span>
                    </p>

                    <p className="text-muted">
                      <text>{SinglePoster.publishDate}</text>
                    </p>
                  </div>
                  <div className="post_link">
                    <span>
                      <a href="#uyer">Get post Comments</a>
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
      {SingleUserPost &&
        SingleUserPost.Single_Post.data &&
        SingleUserPost.Single_Post.data.slice(7, 10).map((SinglePoster) => {
          return (
          
               <div className="container36 " >
              <div>
                <div className="post_container1">
                  <div className="personProfile">
                    <img src={SinglePoster.owner.picture} alt="profile" />
                    <div>
                      <h6>
                        {SinglePoster.owner.firstName} {SinglePoster.owner.lastName}
                      </h6>
                      <span className="text-muted">{SinglePoster.owner.email}</span>
                    </div>
                  </div>
                  <div className="post_image">
                    <img src={SinglePoster.image} alt="" />
                    <p className="postP">
                      <p>{SinglePoster.tags[0]}</p>
                      <p>{SinglePoster.tags[1]}</p>
                    </p>

                    <h6 className="postLink">
                      {SinglePoster.text}{" "}
                      <span>
                        <a href="instagram">{SinglePoster.link}</a>
                      </span>
                    </h6>
                  </div>
                  <div className="postLikes">
                    <p>
                      <i class="fa fa-heart" aria-hidden="true"></i>

                      <span> {SinglePoster.likes}</span>
                    </p>

                    <p className="text-muted">
                      <text>{SinglePoster.publishDate}</text>
                    </p>
                  </div>
                  <div className="post_link">
                    <span>
                      <a href="#uyer">Get post Comments</a>
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
        SingleUserPost: state.SinglePost,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchSinglePost: () => dispatch(fetchSinglePost()),
    }
  };


export default connect (mapStateToProp,
     mapDispatchToProps
     ) (SinglePostContainer)
