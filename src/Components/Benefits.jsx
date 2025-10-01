import { Container, Card } from "react-bootstrap";
import packageImg from "../assets/package.jpg";
import drivingImg from "../assets/driving.jpg";
import liftImg from "../assets/lift.jpg";

function Benefits () {
    return(
        <Container>
            <Container>
                <h2>Our Services</h2>
            </Container>

            <Container className="img-fluid w-50">
                <Card className="m-3">
                    <Card.Img variant="top" src={packageImg} alt="package.jpg"/>
                    <Card.Body>
                        <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut beatae amet labore veniam consectetur accusantium?
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-3">
                    <Card.Img variant="top" src={liftImg} alt="lift.jpg" />
                    <Card.Body>
                        <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut beatae amet labore veniam consectetur accusantium?
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-3">
                    <Card.Img variant="top" src={drivingImg} alt="drive.jpg" />
                    <Card.Body>
                        <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut beatae amet labore veniam consectetur accusantium?
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    )
}

export default Benefits;