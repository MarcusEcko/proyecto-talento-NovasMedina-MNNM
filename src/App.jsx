import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Home from "./Pages/Home";

function App() {
  const [products, setProducts] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const resp = await fetch('https://dummyjson.com/products?limit=10&skip=10');
              const data = await resp.json();
              setProducts(data.products);
              setCargando(false);
          } catch (err) {
              console.error(err);
              setError(err);
              setCargando(false);
          }
      }
      fetchData();
  }, []);

  //SPINNER
  if(cargando) {
      return(
      <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
      </Spinner>
      );
  }

  if(error) return <p>{error}</p>

  return (
    <div>
      <Home products={products}/>
    </div>
  )
}

export default App
