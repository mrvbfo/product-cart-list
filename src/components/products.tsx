import type { Dessert } from "@/types/products";
import BtnAddToCart from "./btn-add-to-card";
import BtnDecrementIncrement from "./btn-decrement-increment";

type ProductsProps = {
  products: Dessert[];
};

const quantity = 0

export default function Products({ products }: ProductsProps) {
  return (
    <section id="desserts">
      <h1 className="text-preset-1 mb-8">Desserts</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
        {products.map((product) => (
          <article key={product.name}>
            <div className="mb-9 relative">
              <picture>
                <source
                  media="[min-width: 1024px]"
                  srcSet={product.image.desktop}
                  width={502}
                  height={480}
                />
                <source
                  media="[min-width: 768px]"
                  srcSet={product.image.tablet}
                  width={427}
                  height={424}
                />
                <img
                  className="rounded-xl"
                  src={product.image.mobile}
                  alt={product.name}
                  width={654}
                  height={424}
                />
              </picture>
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
              {quantity > 0 ? <BtnDecrementIncrement /> : <BtnAddToCart />}
              </div>
            </div>

            <p className="text-preset-4 text-muted">{product.category}</p>
            <h2 className="text-preset-3 my-1">{product.name}</h2>
            <p className="text-preset-3 text-primary">
              ${product.price.toFixed(2)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
