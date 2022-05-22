import Button from "../button/button.comp";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  //destructuring of
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Zum Warenkorb hinzufügen</Button>
    </div>
  );
};

export default ProductCard;
