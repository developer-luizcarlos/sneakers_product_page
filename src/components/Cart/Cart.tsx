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

  if(!visibility) return null;

  return (
    <article
      className={productsQuantity === 0 ? "w-[345px] lg:w-[380px] z-50 absolute -left-[490%] lg:-left-[390%] -bottom-[620%] lg:-bottom-[520%] shadow-grayishBlue shadow-xl rounded-md bg-white" : "w-[345px] lg:w-[380px] absolute  -left-[490%] -bottom-[720%] lg:-left-[390%] lg:-bottom-[690%] shadow-grayishBlue shadow-xl rounded-md bg-white"}>
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