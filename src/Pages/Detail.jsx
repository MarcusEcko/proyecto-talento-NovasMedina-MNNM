import { Container } from "react-bootstrap";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";

function Detail ({ products }){
    const  { id } = useParams();
    const item = products.find(p => p.id === Number(id));

    if(!item) return <h1>Producto no encontrado</h1>;

    return(
        <div>
            <Header/>

            <Container>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </Container>
        </div>
    )
}

export default Detail;