import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/index";

function UsersContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  
  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      {
        (
          userData &&
        userData.users.data &&
        userData.users.data.map(items=>{
            console.log(items)
            return (

                <div className="container container1">
                
                
                <div className = "Blog_Details">
                    <div className="blog_column">
                        <img src={items.picture} alt="photo1" />
                    </div>
                    <div className= 'API_header'>
                        <p><text>{items.id}</text></p>
                     </div>   
                     <div className = "API_description">
                        <h7>{items.firstName}{' '}{items.lastName}</h7>
                        <p>{items.email}</p>
                    </div>
                       <div className ="post_list">
                       <span><a href="#uyer">Get Full profile</a></span>
                       <span><a href="#uyer">Get posts list</a></span>
                       </div>
                </div>
        

             
        </div>
            )
        })
         
    )
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
