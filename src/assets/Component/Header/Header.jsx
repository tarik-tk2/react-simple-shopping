// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src="https://fakestoreapi.com/icons/logo.png" alt="logo_mage" />
      <div className="item-list">
        <a href="/home">Home</a>
        <a href="/shop">Shop</a>
        <a href="/inventory">Inventory</a>
        <a href="/checkout">Checkout</a>
      </div>
    </div>
  );
};

export default Header;
