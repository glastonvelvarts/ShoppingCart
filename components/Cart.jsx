import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems, removeFromCart, updateQuantity, total }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        ))
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
