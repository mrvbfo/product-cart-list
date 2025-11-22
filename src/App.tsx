import { useEffect, useState } from "react";
import Cart from "./components/cart";
import Container from "./components/container";
import Products from "./components/products";
import type { Dessert } from "./types/products";

function App() {
  const [products, setProducts] = useState<Dessert[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:3000/desserts");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <main>
      <Container>
        <div className="grid grid-cols-[8fr_4fr] max-lg:grid-cols-1 gap-8">
          <Products products={products}/>
          <Cart />
        </div>
      </Container>
    </main>
  );
}

export default App;
