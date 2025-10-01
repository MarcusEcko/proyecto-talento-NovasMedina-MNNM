import { Card, Button, Container, Form } from 'react-bootstrap';

function NewsLetter (){
    return(
        <Card className="bg-dark text-white border-0 rounded-0">
            <Card.Img src='https://picsum.photos/1600/900' alt="help" style={{ height: "60vh", objectFit: "cover" }}/>
            
            <Card.ImgOverlay className='d-flex align-items-center justify-content-center bg-dark bg-opacity-50'>
                <Container className="text-center">
                    <Card.Title className='fw-bold display-4'>Card Title</Card.Title>
                    
                    <Card.Text className='lead mb-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil, alias deleniti beatae in porro molestias numquam, harum asperiores a at?
                    </Card.Text>
                    
                    <Card.Text className='small mb-3'>Last Updated 3 mins ago</Card.Text>
                    
                    <Form className="d-flex justify-content-center">
                        <Form.Control 
                            type="email" 
                            placeholder="Email" 
                            className="me-2 w-50"
                        />
                        <Button variant="primary" size="lg">
                            Subscribe
                        </Button>
                    </Form>
                </Container>
            </Card.ImgOverlay>
        </Card>
    )
}

export default NewsLetter;