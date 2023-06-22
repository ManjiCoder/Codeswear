import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    // console.log("useEffect _app.js");
    try {
      if (localStorage.getItem("cart")) {
        let myCart = JSON.parse(localStorage.getItem("cart"));
        setCart(myCart);
        saveCart(myCart);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const addItemToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in newCart) {
      newCart[itemCode].qty = cart[itemCode].qty + parseInt(qty);
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    // console.log(newCart);
    setCart(newCart);
    saveCart(newCart);
  };

  const removeItemFromCart = (itemCode, qty) => {
    let newCart = cart;
    if (newCart[itemCode]["qty"] <= 1) delete newCart[itemCode];
    if (itemCode in newCart) {
      newCart[itemCode].qty = cart[itemCode].qty - parseInt(qty);
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({}); // Imidiately cart updation is not quaranteey it takes some miliseconds
    saveCart({});
    setSubTotal(0);
  };

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      if (myCart[keys[i]] !== undefined) {
        subt += myCart[keys[i]].qty * myCart[keys[i]].price;
        console.log(subt);
      }
    }
    setSubTotal(subt);
  };

  return (
    <>
      <Navbar
        cart={cart}
        addItemToCart={addItemToCart}
        removeItemFromCart={removeItemFromCart}
        subTotal={subTotal}
        clearCart={clearCart}
      />
      <Component
        cart={cart}
        addItemToCart={addItemToCart}
        removeItemFromCart={removeItemFromCart}
        subTotal={subTotal}
        clearCart={clearCart}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;
