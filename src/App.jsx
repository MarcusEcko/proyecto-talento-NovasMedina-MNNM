import { useEffect, useState } from "react";
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Sections from "./Components/Sections";
import Featured from "./Components/Featured";

function App() {
  const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const resp = await fetch('https://dummyjson.com/products?limit=10&skip=10');
              const data = await resp.json();
              setProducts(data.products);
            } catch (err) {
              console.error(err);
            }
        }
        fetchData();
    }, []);

  return (
    <div>
      <Header />
      <Hero products={products} />
      <Sections products={products} />
      <Featured products={products} />
      ////benefits
      ////newsletter
      ////footer
    </div>
  )
}

export default App
