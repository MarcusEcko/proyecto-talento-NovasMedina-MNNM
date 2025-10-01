import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

function Hero () {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch('https://dummyjson.com/products?limit=5');
                const data = await resp.json();
                setProducts(data.products.slice(0, 5));
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, []);

    return(
        <Carousel data-bs-theme="dark">
            {products.map(p => (
                <Carousel.Item key={p.id}>
                    <img
                    className="d-block w-100" 
                    src={p.images[0]} 
                    alt={p.title}
                    />
                    <Carousel.Caption>
                        <h3>{p.title}</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Hero;