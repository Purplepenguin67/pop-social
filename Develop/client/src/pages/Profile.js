import React, { useState } from 'react';
import Auth from '../utils/auth';
import { Nav, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useQuery, useMutation } from '@apollo/client';
import { GET_POSTS, GET_ME } from '../utils/queries';
import { ADD_POST } from '../utils/mutations';


const Profile = () => {


    const { data: dataPosts } = useQuery(GET_POSTS);
    const { data: dataMe } = useQuery(GET_ME);
    const posts = dataPosts?.posts || [];
    const me = dataMe?.me || [];

    // // const [removePost, { error: errorPost }] = useMutation(REMOVE_POST);
    // // const [removeComment, { error: errorComment }] = useMutation(REMOVE_COMMENT);

    function refreshPage() {
        window.location.reload(false);
    }

    // const handleRemovePost = async event => {
    //     // get token
    //     const postId = event.target.getAttribute("postid");
    //     // const { data } = await removePost({ variables: { postId: postId } });
    //     console.log(data)
    //     refreshPage();
    // };

    console.log(me);

    // if (!Object.keys(posts).length) {
    //     return <h2>LOADING...</h2>;
    // }

    const profileUsername = me.username;
    const profilePosts = posts.filter(function (arr) {
        return arr.username == profileUsername;
    });

    const postStyle = {
        border: "2px solid green"
    }

    console.log(profilePosts);
    const profileHeader = { fontFamily: 'Shrikhand', color:'#FFA3BB', fontSize:35};
    const miniHeader = { fontFamily: 'Shrikhand', color:'#61769D', fontSize:25};
    const trendingHeader = { fontFamily: 'Shrikhand', color:'#61769D', fontSize:35};
      return (
        // here starts the left side of the Navbar
        <div>
           <div class="row">
          <div class="col-md-2">
            <nav className="navbar navbar-expand-lg navbar-light d-grid gap-2 mt-3 ml-3">
                <Nav.Link id='homeNavbar' className="navbar-brand" href="/home">
                      Home
                </Nav.Link>
                <Nav.Link id='homeNavbar' className="navbar-brand" href="/profile">
                      Profile
                </Nav.Link>
                <Nav.Link id='homeNavbar' className="navbar-brand" href="/friends">
                      Friends
                </Nav.Link>
                <Nav.Link id='homeNavbar' className="navbar-brand" href="/trending">
                      Trending
                </Nav.Link>
                <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
       aria-label="Toggle navigation"
                                 >
                <span className="navbar-toggler-icon"></span>
                 </button>
          </nav>
          </div>
          {/* here starts the center content portion. The User's social timeline */}
          <div class="row col-lg-6 mx-auto">
          <div id="status" class="card h-100">
          <Form.Group className="mb-3 g-4 p-2">
          <Form.Label style={profileHeader}>Profile</Form.Label>
          </Form.Group>
          <div className="d-grid h-auto p-2 mb-4">
            <div>Here we'll have the person's name and picture</div>
            {/* here is why they can see their past posts */}
            <h5 style={miniHeader}>What you got Cooking</h5>
              <div style={{backgroundColor:'#efe8ad'}} class="card h-100">
              This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </div>
              <div style={{backgroundColor:'#efe8ad'}} class="card h-100">
              This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </div>
              <div style={{backgroundColor:'#efe8ad'}} class="card h-100">
              This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </div>
              <div style={{backgroundColor:'#efe8ad'}} class="card h-100">
              This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </div>
              </div>
          </div>
          </div>
  
          {/* Here starts the Trending section */}
          <div id="trending" class="row col-md-2 ">
          <div style={{backgroundColor:'#AADD96'}}className="square rounded-6 text-center">
          <Form.Label style={trendingHeader}>Trending</Form.Label>
          <div></div>
              This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </div>
          </div>
          </div>
          </div>
      );
  };
// };
  
  export default Profile;