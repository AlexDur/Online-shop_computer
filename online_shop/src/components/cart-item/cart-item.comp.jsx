import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, image, price, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={image} alt={`${name}`} />
      <div className="item-details">
        <h2 className="name">{name}</h2>
        <span className="price">
          {quantity} x {price} €
        </span>
      </div>
    </div>
  );
};

export default CartItem;
