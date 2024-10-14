/* eslint-disable @typescript-eslint/no-unused-vars */
import React,{ useContext } from "react";
import { CartContext } from "../Header/CartItem";
import EmptyCart from "./EmptyCart";
import ProductCart from "./ProductCart";

type Props = {
  visibility: boolean;
};

export default function Cart({ visibility }: Props) {
  const { productsQuantity } = useContext(CartContext);
  console.log("cart " + productsQuantity);

  if(!visibility) return null;

  return (
    <article
      className={productsQuantity === 0 ? "w-[380px] absolute -left-[390%] -bottom-[520%] shadow-grayishBlue shadow-xl rounded-md bg-white" : "w-[380px] absolute -left-[390%] -bottom-[690%] shadow-grayishBlue shadow-xl rounded-md bg-white"}>
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