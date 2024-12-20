/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState,useContext } from "react";
import { usePathname } from "next/navigation";
import { CartContext } from "./CartItem";
import { GlobalContext } from "@/context/ContextComponent";

// icon importation
import { IoCartOutline } from "react-icons/io5";

// utilities importation
import Image from "next/image";
import Link from "next/link";

// components importation
import Container from "../Container/Container";
import CartItem from "./CartItem";

type Props = {
  itemsCart?: number;
};

export default function Header({ itemsCart }: Props) {
  const pathname = usePathname();
  const { productsQuantity,toggleCartVisibility } = useContext(CartContext);
  const { menuReducer } = useContext(GlobalContext)!;
  const [cartVisibility,setCartVisibility] = useState<boolean>(false);

  return (
    <header className="w-full">
      <Container>
        <div className="w-full h-full px-9 lg:px-0 my-3 flex items-center justify-between border-b-0 md:border-b-2 border-b-lightGrayishBlue relative">
          <div className="flex items-center justify-center gap-6">
            <button role="menu" className="md:hidden">
              <Image
                alt="open menu button"
                src="./images/icon-menu.svg"
                width={25}
                height={25}
                onClick={() => { menuReducer({ type: "OPEN" }); }}
              />
            </button>
            <Link href="/">
              <Image
                alt="sneakers logo"
                src="./images/logo.svg"
                width={120}
                height={45}
                className="hover:drop-shadow-lg hover:shadow-slate-900"
              />
            </Link>
            <nav className="hidden md:flex items-center justify-center gap-5 h-16 ">
              <Link href="/collection"
                className={pathname === "/collection" ? "capitalize relative font-medium text-paleOrange after:w-0 after:h-1 after:absolute after:-bottom-full after:left-0 after:bg-paleOrange  hover:ease-in-out hover:after:w-full after:duration-300 "
                  :
                  "capitalize relative font-medium text-darkGrayishBlue after:w-0 after:h-1 after:absolute after:-bottom-full after:left-0 after:bg-paleOrange  hover:ease-in-out hover:after:w-full after:duration-300 "}>collection</Link>
              <Link href="/man"
                className={pathname === "/man" ? "capitalize relative font-medium text-paleOrange after:w-0 after:h-1 after:absolute after:-bottom-full after:left-0 after:bg-paleOrange  hover:ease-in-out hover:after:w-full after:duration-300 "
                  :
                  "capitalize relative font-medium text-darkGrayishBlue after:w-0 after:h-1 after:absolute after:-bottom-full after:left-0 after:bg-paleOrange  hover:ease-in-out hover:after:w-full after:duration-300 "}>man</Link>
              <Link href="/woman"
                className={pathname === "/woman" ? "capitalize relative font-medium text-paleOrange after:w-0 after:h-1 after:absolute after:-bottom-full after:left-0 after:bg-paleOrange  hover:ease-in-out hover:after:w-full after:duration-300 "
                  :
                  "capitalize relative font-medium text-darkGrayishBlue after:w-0 after:h-1 after:absolute after:-bottom-full after:left-0 after:bg-paleOrange  hover:ease-in-out hover:after:w-full after:duration-300 "}>woman</Link>
              <Link href="/about"
                className={pathname === "/about" ? "capitalize relative font-medium text-paleOrange after:w-0 after:h-1 after:absolute after:-bottom-full after:left-0 after:bg-paleOrange  hover:ease-in-out hover:after:w-full after:duration-300 "
                  :
                  "capitalize relative font-medium text-darkGrayishBlue after:w-0 after:h-1 after:absolute after:-bottom-full after:left-0 after:bg-paleOrange  hover:ease-in-out hover:after:w-full after:duration-300 "}>about</Link>
              <Link href="/contact"
                className={pathname === "/contact" ? "capitalize relative font-medium text-paleOrange after:w-0 after:h-1 after:absolute after:-bottom-full after:left-0 after:bg-paleOrange  hover:ease-in-out hover:after:w-full after:duration-300 "
                  :
                  "capitalize relative font-medium text-darkGrayishBlue after:w-0 after:h-1 after:absolute after:-bottom-full after:left-0 after:bg-paleOrange  hover:ease-in-out hover:after:w-full after:duration-300 "}>contact</Link>
            </nav>
          </div>
          <div className="flex items-center justify-center gap-8">
            <div className="relative">
              <div className="relative cursor-pointer">
                <button
                  onClick={() => toggleCartVisibility()}
                >
                  <IoCartOutline className="w-11 h-8" />
                </button>
                <div className={productsQuantity > 0 ? "absolute top-[-10px] right-[-14px] h-4 w-9 bg-paleOrange flex items-center justify-center rounded-lg text-white text-xs" : "hidden"}>
                  {productsQuantity}
                </div>
              </div>


            </div>
            <div className="w-14 h-14 rounded-full hover:border-paleOrange border-2 duration-500 cursor-pointer">
              <img src="./images/image-avatar.png" alt="avatar photo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </Container>
    </header >
  );
}