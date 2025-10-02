import { Container, Navbar, Nav, Button, Dropdown } from "react-bootstrap";

function Header () {
    return(
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" sticky="top" className="">
            <Container fluid>
                <Nav className="me-auto">
                    <Navbar.Brand>
                        <i class="bi bi-bootstrap-fill"></i> {' '}
                        Shopping Cart   
                    </Navbar.Brand> 
                </Nav>

                <div className="d-flex align-items-center">
                    <Button variant="primary" className="m-1">Log In</Button>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </div>
                
                <Navbar.Collapse  id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                        <Nav.Link>Contact Us</Nav.Link>
                        <Dropdown className="m-1">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Explore
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-menu-dark">
                                <Dropdown.Item className="text-white" href="#/action-1">Our Products</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                    <i className="bi bi-cart4 text-white fs-2 m-1"></i>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    );
}

export default Header;