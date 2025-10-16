import { Container, Card, Row, Col } from "react-bootstrap";
import packageImg from "../assets/package.jpg";
import drivingImg from "../assets/driving.jpg";
import liftImg from "../assets/lift.jpg";

function Benefits() {
    const items = [
        { img: packageImg, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut beatae amet labore veniam consectetur accusantium?" },
        { img: liftImg, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut beatae amet labore veniam consectetur accusantium?" },
        { img: drivingImg, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut beatae amet labore veniam consectetur accusantium?" },
    ];

    return (
        <Container className="my-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row xs={1} md={3} className="g-4">
            {items.map((item, index) => (
            <Col key={index}>
                <Card className="h-100 text-center">
                <Card.Img 
                    variant="top" 
                    src={item.img}
                    className="p-3" 
                    style={{ height: "150px", objectFit: "contain" }} 
                />
                <Card.Body>
                    <Card.Text>{item.text}</Card.Text>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
        </Container>
    );
}

export default Benefits;