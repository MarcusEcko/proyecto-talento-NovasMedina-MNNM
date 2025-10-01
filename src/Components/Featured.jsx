import { Row, Col, Card, Button, Container } from 'react-bootstrap';

function Featured ({ products }) {

    const items = products.slice(0, 4);

    return(
        <Container>
            <Container className='text-center my-5'>
                <h1 className='display-3 fw-bold' style={{ fontFamily: "'Georgia', serif", letterSpacing: "2px" }}>
                    Featured Sections
                </h1>
                <p className='lead text-muted'>
                    FInd the best offers and carefully selected Products
                </p>
            </Container>

            <Row xs={1} md={2} className="g-4">
                {items.map((i, index) => (
                    <Col key={index}>
                        <Card >
                            <Card.Img variant="top" src={i.images[0]} />
                            <Card.Body>
                                <Card.Title>{i.category}</Card.Title>
                                <Card.Text>
                                    Lorem, ipsum dolor.
                                </Card.Text>
                                <Container className='d-flex justify-content-center my-4'>
                                    <Button variant="primary">See more</Button>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
};

export default Featured;