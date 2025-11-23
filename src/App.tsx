import { useEffect, useState } from "react";
import Cart from "./components/cart";
import Container from "./components/container";
import Products from "./components/products";
import type { Dessert } from "./types/products";
import CartEmpty from "./components/cart-empty";
import CartItems from "./components/cart-items";
import ProductItem from "./components/product-item";
import { useCartStore } from "./store/cart";

function App() {
  const { cartItems } = useCartStore();
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
          <Products>
            {products.map((product) => (
              <ProductItem key={product.name} product={product} />
            ))}
          </Products>
          <Cart>{cartItems.length > 0 ? <CartItems /> : <CartEmpty />}</Cart>
        </div>
      </Container>
    </main>
  );
}

export default App;
