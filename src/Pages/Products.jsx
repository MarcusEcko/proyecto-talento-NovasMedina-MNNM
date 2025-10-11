import { Col, Container, Row, Card, Button } from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { useCart } from "../Components/CartProvider";

function Products ({ products }) {
    const items = products.slice(0, 12);

    const { addToCart } = useCart();

    return(
        <>
            <Header />
        
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {items.map((i, index) => (
                        <Col key={index}>
                            <Card.Img variant="top" src={i.images[0]}/>
                            <Card.Body>
                                <Card.Title>{i.title}</Card.Title>
                                <Card.Text>
                                    {i.description}
                                    <br/>
                                    <b>
                                        ${i.price}
                                    </b>
                                </Card.Text>
                                <Container className='d-flex justify-content-center my-4'>
                                    <Button as={Link} to={`/detail/${i.id}`} variant="primary" className="me-3">Description</Button>
                                    <Button variant="success" onClick={() => addToCart(i)}>Buy Now</Button>
                                </Container>
                            </Card.Body>
                        </Col>
                    ))}
                </Row>
            </Container>
            
            <Footer />
        </>
    )
}

export default Products;