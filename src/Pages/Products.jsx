import { Col, Container, Row, Card, Button, Alert } from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Products () {
    const { cart, products, addToCart, removeFromCart } = useCart();
    const items = products.slice(0, 12);

    return(
        <>
            <Header />

            <Container className="my-5">
                <Row xs={1} md={3} className="g-4">
                {items.map((i) => {
                    const cartItem = cart.find((p) => p.id === i.id);

                    return (
                    <Col key={i.id}>
                        <Card className="h-100">
                        <Card.Img variant="top" src={i.images[0]} />
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <div>
                            <Card.Title>{i.title}</Card.Title>
                            <Card.Text>
                                {i.description}
                                <br />
                                <b>${i.price}</b>
                            </Card.Text>
                            </div>

                            <div className="d-flex justify-content-center mt-3 flex-wrap">
                            <Button
                                as={Link}
                                to={`/detail/${i.id}`}
                                variant="primary"
                                className="me-2 mb-2"
                            >
                                Description
                            </Button>

                            {cartItem ? (
                                <>
                                {cartItem.quantity > 1 && (
                                    <Button
                                    variant="danger"
                                    className="me-2 mb-2"
                                    onClick={() => removeFromCart(i.id)}
                                    >
                                    Remove
                                    </Button>
                                )}
                                <Button
                                    variant="success"
                                    className="mb-2"
                                    onClick={() => addToCart(i)}
                                >
                                    Buy More
                                </Button>
                                </>
                            ) : (
                                <Button
                                variant="success"
                                className="mb-2"
                                onClick={() => addToCart(i)}
                                >
                                Buy Now
                                </Button>
                            )}
                            </div>
                        </Card.Body>
                        </Card>
                    </Col>
                    );
                })}
                </Row>

                <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                />
            </Container>

            <Footer />
        </>
    )
}

export default Products;