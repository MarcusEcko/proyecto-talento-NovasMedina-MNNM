import { Container, Table } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Admin ({ products }) {
    {/*----------------- DONE WITH PROTECTEDROUTE.JSX -------------
        const auth = localStorage.getItem("auth");
        const navigate = useNavigate();
    
        if(!auth){
            navigate("/login");
        }    
    */}

    const items = products.slice(0, 20); 

    return(
        <div>
            <Header />

            <div className="d-flex flex-column justify-content-center align-items-center text-center">
                <h3 className="fw-bold mb-3">Welcome Admin!</h3>
                <p className="lead mb-4">Don't forget to logout after finishing!</p>
            </div>

            <Container>

                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Stock</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((i, index) => (
                            <tr key={index}>
                                <td>{i.id}</td>
                                <th>{i.title}</th>
                                <th>{i.description}</th>
                                <th>{i.category}</th>
                                <th>${i.price}</th>
                                <th>{i.rating}</th>
                                <th>{i.stock}</th>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>


            <Footer />
        </div>
    )
}

export default Admin;