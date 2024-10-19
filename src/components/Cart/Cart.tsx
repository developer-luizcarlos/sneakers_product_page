/* eslint-disable @typescript-eslint/no-unused-vars */
import React,{ useContext } from "react";
import { CartContext } from "../Header/CartItem";
import EmptyCart from "./EmptyCart";
import ProductCart from "./ProductCart";

export default function Cart() {
  const { productsQuantity,cartHidden,toggleCartVisibility } = useContext(CartContext);

  if(!cartHidden) return null;

  return (
    <article
      className={productsQuantity === 0 ? "w-[345px] lg:w-[380px] z-50 absolute left-4 right-4 md:left-2/3 top-12 md:top-0  shadow-grayishBlue shadow-xl rounded-md bg-white" : "w-[345px] z-50 lg:w-[380px] absolute left-4 right-4 top-12 md:left-2/3 md:top-0 shadow-grayishBlue shadow-xl rounded-md bg-white"}>
      <div className="block w-full text-left p-4 border-b-2 border-gray-100">
        <h2 className="font-bold capitalize text-veryDarkBlue text-lg">Cart</h2>
      </div>
      <div className="block p-4 w-full">
        {/* componentes a criar */}
        {productsQuantity > 0 ? (
          <ProductCart />
        ) : (
          <EmptyCart />
        )}
      </div>
    </article>
  );
}