import Button from "../button/button.comp";
import CartItem from "../cart-item/cart-item.comp";
import { useContext } from "react";
import { useNavigate } from "react-router";

import { CartContext } from "../contexts/cart.context";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCHeckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      {cartItems.map((item) => (
        <CartItem key={item.ide} cartItem={item} />
      ))}

      <Button onClick={goToCHeckoutHandler}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
