/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

export default function MobileMenu() {
  return (
    <div className="hidden top-0 left-0 h-dvh w-dvw bg-black bg-opacity-75 z-10">
      <aside className="relative top-0 left-0 h-full w-80 bg-white">
        <div className="w-full h-full p-7 flex flex-col gap-10">
          <img src="./images/icon-close.svg" alt="close this menu" className="w-5" />
          <nav className="flex flex-col gap-6 text-veryDarkBlue text-lg font-bold capitalize">
            <Link href={"/collections"}>Collections</Link>
            <Link href={"/men"}>Men</Link>
            <Link href={"/women"}>Women</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>
      </aside>
    </div>
  );
}