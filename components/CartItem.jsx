import React from "react";

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p className="price">Price: ${item.price}</p>
      <p className="quantity">
        Quantity:
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, e.target.value)}
          min="1"
        />
      </p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
