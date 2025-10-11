import { Button } from "react-bootstrap";
import { useCart } from "../Components/CartProvider"; 
import Table from "react-bootstrap/Table";
import  Header  from "../Components/Header"
import Footer from "../Components/Footer";

function Cart() {
    const { cart, removeFromCart, clearCart } = useCart();

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    //ADD STYLES
    return (
        <div>
            <Header />

            <h2>Shopping Cart</h2>

            {cart.length === 0 ? (
                <p>Shopping Cart Empty</p>
            ) : (
                <>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>                       
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                                        Remove
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    
                    <p>Total: ${total.toFixed(2)}</p>
                    <Button variant="primary" onClick={clearCart}>Empty Cart</Button>
                </>
            )}

            <Footer />
        </div>
    )
}

export default Cart;