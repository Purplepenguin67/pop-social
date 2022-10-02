import { Nav, Form } from 'react-bootstrap';


const Home = () => {
  const homeHeader = { fontFamily: 'Shrikhand', color:'#FFA3BB', fontSize:35};
    return (
      <div>
         <div class="row">
        <div class="col-md-2">
          <nav className="navbar navbar-expand-lg navbar-light d-grid gap-2 mt-3 ml-3">
              <Nav.Link id='homeNavbar' className="navbar-brand" href="#">
                    User
              </Nav.Link>
              <Nav.Link id='homeNavbar' className="navbar-brand" href="#">
                    Friends
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
        <div class="row col-lg-6 mx-auto">
        <div id="status" class="column h-100">
        <Form.Group className="mb-3 g-4">
        <Form.Label style={homeHeader}>Home</Form.Label>
        <Form.Control style={{color:'lightgrey'}} placeholder="What's Popping?..." controlId="formBasicStatus" />
        </Form.Group>
        <div className="d-grid gap-3">
            <div class="card h-100">
            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </div>
            <div class="card h-100">
            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </div>
            <div class="card h-100">
            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </div>
            <div class="card h-100">
            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </div>
            </div>
        </div>
        </div>
        <div id="trending" class="row col-md-2 ">
        <Form.Label style={homeHeader}>Trending</Form.Label>
        <div className="square bg-light rounded-6">
            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </div>
        </div>
        </div>
        </div>
    );
};

export default Home;