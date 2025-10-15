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

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home  />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/Cart" element={<Cart />}/>
        
        {/* PROTECTED ROUTES */}
        <Route path="/Admin" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }/>
      </Routes>
  )
}

export default App
