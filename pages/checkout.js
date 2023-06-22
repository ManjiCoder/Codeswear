import Link from "next/link";
import React from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

const Checkout = ({ cart, addItemToCart, removeItemFromCart, subTotal }) => {
  return (
    <div className="container m-auto">
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
      <h2 className="text-xl font-bold">1. Delivery Details</h2>
      <form>
        <div className="mx-auto flex my-2">
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="px-2 w-full">
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Address
            </label>

            <textarea
              type="address"
              id="address"
              name="address"
              cols="30"
              rows="2"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="mx-auto flex my-2">
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                City
              </label>
              <input
                type="city"
                id="city"
                name="city"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex my-2">
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label
                htmlFor="state"
                className="leading-7 text-sm text-gray-600"
              >
                State
              </label>
              <input
                type="state"
                id="state"
                name="state"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label
                htmlFor="pincode"
                className="leading-7 text-sm text-gray-600"
              >
                Pincode
              </label>
              <input
                type="pincode"
                id="pincode"
                name="pincode"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
      </form>

      <h2 className="text-xl font-bold">2. Review Cart Items & Pay</h2>
      <div className="sideCart text-xl bg-pink-100 m-4 p-6 rounded-sm shadow-md ">
        <ol className="list-decimal font-semibold ml-4 gap-y-5 flex flex-col text-xs md:text-base">
          {Object.keys(cart).length === 0 && <div>You cart is empty!</div>}
          {Object.keys(cart).map((itemCode) => (
            <li key={itemCode}>
              <div className="flex space-x-4 ml-4 text-base font-semibold">
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
      </div>
      <div className="font-semibold my-4 px-6">
        Sub-Total : <b className="font-bold">₹{subTotal}</b>
      </div>
      <button className="mx-6">
        <Link
          href="/checkout"
          className="flex mt-4 mx-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded font-semibold place-items-center"
        >
          <BsFillBagCheckFill className="mr-1.5" />
          Pay - ₹{subTotal}
        </Link>
      </button>
    </div>
  );
};

export default Checkout;
