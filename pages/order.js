/* eslint-disable react/button-has-type */
/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Order() {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                CODESWEAR.COM
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Order Id: #43904
              </h1>
              <div className="flex text-center mb-4">
                <a className="flex-grow text-lg px-1">Item Description</a>
                <a className="flex-grow text-lg px-1">Quantity</a>
                <a className="flex-grow text-lg px-1">Item Total</a>
              </div>

              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Wear the code(XL/Blue)</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">₹499</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Wear the code(XL/Pink)</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">₹499</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Wear the code(XL/Navy)</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">₹499</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  SubTotal: ₹1100
                </span>
                <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Track Order
                </button>
              </div>
            </div>
            <img
              height={400}
              width={400}
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Order;
