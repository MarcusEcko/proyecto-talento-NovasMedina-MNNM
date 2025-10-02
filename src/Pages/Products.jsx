import { Col, Container, Row } from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Products ({ products }) {

    const items = products.slice(0, 10);

    return(
        <Container>
            <Header />

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
                                <Button variant="primary">See More</Button>
                            </Container>
                        </Card.Body>
                    </Col>
                ))}
            </Row>

            <Footer />
        </Container>
    )
}

export default Products;