import { useContext } from "react";

import ProductCard from "../../product.card/product-card.comp";

import { ProductsContext } from "../../contexts/products.context";

import "./shop-styles.scss";

/* import SHOP_DATA from "./../../../shop-data.json"; */

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map(product => {
        <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
