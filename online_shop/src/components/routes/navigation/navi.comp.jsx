import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import CartIcon from "../../cart-icon/cart-icon.com";
import CartDropdown from "../../cart-dropdown.comp.jsx/cart-dropdown.comp";

import { ReactComponent as Cyborg } from "../../../assets/icon_cyborg.svg";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

import "./navi.styles.scss";

const Navi = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Cyborg className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
          {/* <Link className="nav-link" to="/cart-icon"></Link> */}
        </div>
        {/* both values need to be true whereby Comps are always truthy values as they are functions*/}
        {/* So if the total statement is true it will return the last thing which is the CartDropdown Component */}
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navi;
