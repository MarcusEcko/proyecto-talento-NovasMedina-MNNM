import { Col, Container, Row } from "react-bootstrap";

function Footer (){
    return(
        <footer className="bg-dark text-white py-4 mt-0">
            <Container>
                <Row>
                    {/* CONTACT INFO */}
                    <Col md={4}>
                        <h5>Contact Us:</h5>
                        <p>Email: info@miweb.com</p>
                        <p>Tel: +54 9 11 1234-5678</p>
                    </Col>

                    {/* LINKS */}
                    <Col md={4}>
                        <h5>Useful Links</h5>
                        <li><a href="#" className="text-white">Home</a></li>
                        <li><a href="#" className="text-white">Products</a></li>
                        <li><a href="#" className="text-white">About</a></li>
                        <li><a href="#" className="text-white">Contact Us</a></li>
                    </Col>

                    {/* SOCIAL MEDIA */}
                    <Col md={4}>
                        <h5>Follow Us</h5>
                        <p>
                            <a href="#" className="text-white me-2">Facebook</a>
                            <a href="#" className="text-white me-2">Instagram</a>
                            <a href="#" className="text-white">Twitter</a>
                        </p>
                    </Col>
                </Row>

                <hr className="bg-white"/>

                <p className="text-center mb-0">&copy; 2025 MyWeb. All rights reserved.</p>
            </Container>
        </footer>
    )
}

export default Footer;