import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./components/contexts/user.context";
import { ProductsProvider } from "./components/contexts/products.context";
import { CartProvider } from "./components/contexts/cart.context";

import reportWebVitals from "./reportWebVitals";

//Wrapping UserProvider around ProductsProvider. This way, products can reach up into the UserProvider and get the value
//Putting CartProvider inside as it needs User and Products. User needed to query a database for a user's cart if we want
//to persist it in a third party data base. That way, if a user logs in and they have a some court session that they
//didn't finish with, we could pull it from that.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
