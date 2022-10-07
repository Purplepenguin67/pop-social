import React, { useState } from 'react';
// import Auth from '../utils/auth';
import { Nav, Form} from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack'
// import { Link } from 'react-router-dom';
// import { useQuery, useMutation } from '@apollo/client';
// import { GET_POSTS, GET_ME } from '../utils/queries';
// import { ADD_POST } from '../utils/mutations';
// const status = () => {
//   const inputEl = useRef(null);
//   const onButtonClick = () => {
//     // `current` points to the mounted text input element
//     inputEl.current.focus();
//   };
//     return(
//       <Form.Control>{this.greeting}</Form.Control>
//     );
//   };
const Home = () => {

      const homeHeader = { fontFamily: 'Shrikhand', color:'#FFA3BB', fontSize:35 };
      const trendingHeader = { fontFamily: 'Shrikhand', color:'#61769D', fontSize:35};
      const statusBar = { fontFamily: 'Shrikhand', backgroundColor:'#ECECEC',  }
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
            <div id="status" className="card h-auto">
            <Form.Group className="mb-3 g-4 p-2">
            <Form.Label style={homeHeader}>Home</Form.Label>
            <Form.Control style={ statusBar }className='bg-#ECECEC' placeholder="What's Popping?..." controlId="formBasicStatus" />
            
            
            <Stack direction="horizontal" gap={3}>
                <div style={{backgroundColor:'#efe8ad'}} class="card">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </div>
                <div className='column h-auto'> </div>
                <div style={{backgroundColor:'#efe8ad'}} class="card">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </div>
                <div style={{backgroundColor:'#efe8ad'}} class="card">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </div>
                <div style={{backgroundColor:'#efe8ad'}} class="card">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </div>
                </Stack>
                </Form.Group>
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
    
    export default Home;
