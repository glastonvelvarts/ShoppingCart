import React, { useState, createContext } from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Search from "../components/Search";
import NavBar from "../components/NavBar";
import "./App.css";

const productsData = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
    image: "https://via.placeholder.com/150",
  },
  // Add more products as needed
];

const CartContext = createContext();

const App = () => {
  const [products] = useState(productsData);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CartContext.Provider value={{ addToCart, removeFromCart, updateQuantity }}>
      <div className="App">
        <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <main>
          <ProductList products={filteredProducts} addToCart={addToCart} />
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            total={total}
          />
        </main>
      </div>
    </CartContext.Provider>
  );
};

export default App;