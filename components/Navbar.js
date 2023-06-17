import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className="py-2 shadow-xl flex flex-col md:flex-row items-center">
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
        <AiOutlineShoppingCart />
      </div>
    </header>
  );
};

export default Navbar;
