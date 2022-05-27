import { useContext } from "react";

import { CartContext } from "../contexts/cart.context";
import Button from "../button/button.comp";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  //destructuring of
  const { name, price, image } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={image} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price} Items</span>
      </div>
      <Button buttonType="inverted" onClick={() => addItemToCart(product)}>
        Zum Warenkorb hinzufügen
      </Button>
    </div>
  );
};

export default ProductCard;
