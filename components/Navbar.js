import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className="py-2 flex flex-col md:flex-row items-center">
      <div className="logo mx-3">
        <Image
          src="/logo.png"
          width={200}
          height={40}
          alt="CodesWear.com"
          className="-mt-2"
        ></Image>
      </div>
      <nav>
        <ul className="font-semibold flex flex-col md:flex-row md:space-x-5 items-center md:text-xl">
          <Link href={"/"}>
            <li>Tshirts</li>
          </Link>
          <Link href={"/"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/"}>
            <li>Stickers</li>
          </Link>
          <Link href={"/"}>
            <li>Mugs</li>
          </Link>
        </ul>
      </nav>

      <div className="cursor-pointer cart absolute top-2.5 right-0 mx-5 text-xl md:text-3xl">
        <AiOutlineShoppingCart />
      </div>
    </header>
  );
};

export default Navbar;
