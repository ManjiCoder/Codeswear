import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

import { BsFillBagCheckFill } from "react-icons/bs";

const Navbar = ({
  cart,
  addItemToCart,
  removeItemFromCart,
  subTotal,
  clearCart,
}) => {
  // console.log(Object.keys(cart));
  const ref = useRef();
  const toggleCart = () => {
    if (
      Object.keys(cart).length !== 0 &&
      ref.current.classList.contains("translate-x-full")
    ) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  return (
    <header className="sticky top-0 z-10 bg-blend-color-burn bg-white py-2 shadow-xl flex flex-col md:flex-row items-center">
      <div className="logo mx-3">
        <Link href="/">
          <Image
            src="/logo.png"
            width={200}
            height={40}
            alt="CodesWear.com"
            className="-mt-2"
          ></Image>
        </Link>
      </div>
      <nav>
        <ul className="font-semibold flex flex-col md:flex-row md:space-x-6 items-center md:text-base">
          <Link href={"/tshirts"}>
            <li>Tshirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/stickers"}>
            <li>Stickers</li>
          </Link>
          <Link href={"/mugs"}>
            <li>Mugs</li>
          </Link>
        </ul>
      </nav>

      <div className="cursor-pointer cart absolute top-2.5 right-0 mx-5 text-xl md:text-3xl">
        <button onClick={toggleCart}>
          <AiOutlineShoppingCart />
        </button>
      </div>

      <div
        ref={ref}
        className={`sideCart absolute h-screen bg-pink-100 py-4 pl-5 sm:pr-5 pr-10 rounded-sm shadow-md z-10 min-h-full top-14 right-0 transform transition-transform duration-500 ${
          Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute text-2xl top-1 right-1 text-pink-600"
          onClick={toggleCart}
        >
          <AiFillCloseCircle />
        </button>
        <h2 className="font-semibold  text-xl md:text-2xl  mb-3 text-center">
          Shopping Cart
        </h2>
        <ol className="list-decimal font-semibold ml-4 gap-y-5 flex flex-col text-xs md:text-base">
          {Object.keys(cart).length === 0 && <div>You cart is empty!</div>}
          {Object.keys(cart).map((itemCode) => (
            <li key={itemCode}>
              <div className="flex space-x-4 ml-4">
                <h3>T-shirts</h3>
                <span>-</span>
                <h3>Wear the code</h3>
                <div className="flex place-items-center gap-x-1.5">
                  <button
                    className="text-2xl text-pink-600"
                    onClick={() =>
                      addItemToCart(itemCode, 1, 499, itemCode, "XL", "Blue")
                    }
                  >
                    <AiFillPlusCircle />
                  </button>
                  <span>{cart[itemCode].qty}</span>
                  <button
                    className="text-2xl text-pink-600"
                    onClick={() =>
                      removeItemFromCart(
                        itemCode,
                        1,
                        499,
                        itemCode,
                        "XL",
                        "Blue"
                      )
                    }
                  >
                    <AiFillMinusCircle />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="font-semibold my-4">
          Sub-Total : <b className="font-bold">₹{subTotal}</b>
        </div>
        <div className="flex mt-3 space-x-3">
          <button>
            <Link
              href="/checkout"
              className="flex mt-4 mx-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm place-items-center"
            >
              <BsFillBagCheckFill className="mr-1.5" />
              Checkout
            </Link>
          </button>
          <button
            className="flex mt-4 mx-auto text-white bg-pink-500 border-0 py-2 px-11 focus:outline-none hover:bg-pink-600 rounded text-sm place-items-center"
            onClick={clearCart}
          >
            ClearAll
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
