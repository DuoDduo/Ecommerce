import Container from "./components/container";import HomeBanner from "./components/HomeBanner";
import ProductCard from "./components/products/productcard"; // Corrected import pathimport { products } from "./utils/products";
import { products } from "./utils/products";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products.map((product: any) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </Container>
    </div>
  );
}
