import React from "react";
import Search from "./Search";

const NavBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="header">
      <div className="logo">
        <span>Shopping Site</span>
        <span className="cart-text">Shopping Cart</span>
      </div>
      <nav className="nav">
        <a href="#home">Home</a>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <a href="#cart">Cart</a>
      </nav>
    </header>
  );
};

export default NavBar;
