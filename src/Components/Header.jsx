import { Container, Navbar, Nav, Button, Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Products from "../Pages/Products";

function Header () {
    return(
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" sticky="top" className="">
            <Container fluid>
                <Nav className="me-auto">
                    <Navbar.Brand>
                        <Link to="/">
                            <i className="bi bi-bootstrap-fill"></i> {''}
                        </Link>
                        Shopping Cart
                    </Navbar.Brand> 
                </Nav>

                <div className="d-flex align-items-center">
                    <Button variant="primary" className="m-1">Log In</Button>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </div>
                
                <Navbar.Collapse  id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/">Contact Us</Nav.Link>

                        <Dropdown className="m-1">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Explore
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-menu-dark">
                                
                                <Dropdown.Item className="text-white" as={Link} to="/products">Our Products</Dropdown.Item>
                                
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