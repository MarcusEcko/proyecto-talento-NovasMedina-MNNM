import { Container, Navbar, Nav, Button } from "react-bootstrap";

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

                <i className="bi bi-cart4 text-white fs-2 me-2"></i>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                <Navbar.Collapse  id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                        <Nav.Link>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
                <div className="d-flex align-items-center p-1">
                    <Button variant="primary">Log In</Button>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;