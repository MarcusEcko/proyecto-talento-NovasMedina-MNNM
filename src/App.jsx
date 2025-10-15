import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartProvider";
import Products from "./Pages/Products";
import Detail from "./Pages/Detail"
import About from "./Pages/About";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import Admin from './Pages/Admin';
import ProtectedRoute from "./Components/ProtectedRoute";
import Cart from "./Pages/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cargando, setCargando] = useState(true); //por defecto true
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const resp = await fetch('https://dummyjson.com/products?limit=0&skip=10');
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
  if (cargando) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  if(error) return <p>{error}</p>

  return (
    <div>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/home" element={<Home products={products} />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products products={products}/>} />
          <Route path="/detail/:id" element={<Detail products={products}/>} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/Cart" element={<Cart />}/>
          
          {/* PROTECTED ROUTES */}
          <Route path="/Admin" element={
            <ProtectedRoute>
              <Admin products={products} />
            </ProtectedRoute>
          }/>
        </Routes>
      </CartProvider>
    </div>
  )
}

export default App
