import { Card, Button, Container } from 'react-bootstrap';
import helpImg from '../assets/help.jpg';

function NewsLetter (){
    return(
        <Card className="bg-dark text-white border-0">
            <Card.Img src={helpImg} alt="help" style={{ height: "60vh", objectFit: "cover" }}/>
            
            <Card.ImgOverlay className='d-flex align-items-center justify-content-center bg-dark bg-opacity-50'>
                <Container className="text-center">
                    <Card.Title className='fw-bold display-4'>Card Title</Card.Title>
                    
                    <Card.Text className='lead mb-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil, alias deleniti beatae in porro molestias numquam, harum asperiores a at?
                    </Card.Text>
                    
                    <Card.Text className='small mb-3'>Last Updated 3 mins ago</Card.Text>
                    
                    <Button variant="primary" size="lg">More Info</Button>
                </Container>
            </Card.ImgOverlay>
        </Card>
    )
}

export default NewsLetter;