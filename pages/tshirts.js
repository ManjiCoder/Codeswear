/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Product from '../models/Product';

function Tshirts({ products }) {
  // console.log(products);
  return (
    <div>
      <Head>
        <title>Codeswear - Tshirts</title>
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center md:justify-evenly gap-y-4 gap-x-3 flex-wrap -m-4">
            {products.map((item) => (
              <Link
                key={item._id}
                href={`/product/${item.title}`}
                className="lg:w-1/5 md:w-1/3 p-4 w-4/5 flex flex-col items-center shadow-lg"
              >
                <Image
                  height={400}
                  width={400}
                  alt="ecommerce"
                  className="object-contain aspect-square block"
                  src={item.image}
                />

                <div className="mt-4 md:w-full">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    T-Shirts
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {item.title}
                  </h2>
                  <p className="mt-1">
                    ₹
                    {item.price}
                  </p>
                  <p className="mt-1">S, M, L, XL, XXL</p>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}

export default Tshirts;

export const getServerSideProps = async () => {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  const products = await Product.find({});
  return { props: { products: JSON.parse(JSON.stringify(products)) } };
};
