import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Home from "./Pages/Home";

function App() {
  const [products, setProducts] = useState([]);
  const [cargando, setCargando] = useState(true); //starts true
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
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/home" element={<Home products={products} />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products products={products}/>} />
      </Routes>
    </div>
  )
}

export default App
