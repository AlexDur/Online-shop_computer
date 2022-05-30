import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../product.card/product-card.comp";

import "./shop-styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}>
          <h1>{product.name}</h1>
        </ProductCard>
      ))}
    </div>
  );
};

export default Shop;
