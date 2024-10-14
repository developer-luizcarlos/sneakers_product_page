/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import { CartContext } from "../Header/CartItem";
import { useContext } from "react";

export default function ProductCart() {
  const { productsQuantity,changeProductsQuantity } = useContext(CartContext);

  return (
    <div>
      <div className="w-full flex items-center justify-between h-24">
        <img
          src="./images/image-product-1-thumbnail.jpg"
          alt="sneakers image"
          className="w-16 h-16 rounded-md"
        />
        <div className="flex flex-col gap-1">
          <h4 className="text-darkGrayishBlue font-medium text-base">Fall Limited Edition Sneakers</h4>
          <small className="text-darkGrayishBlue text-[14px]">$125.00 x <span className="font-bold text-veryDarkBlue">
            {productsQuantity} {(125 * productsQuantity).toLocaleString("pt-br",{ style: "currency",currency: "USD" })}
          </span></small>
        </div>
        <button onClick={() => { changeProductsQuantity(0); }}>
          <img src="./images/icon-delete.svg" alt="clean your cart" />
        </button>
      </div>
      <button className="w-full bg-paleOrange py-3 rounded-md font-bold text-base cursor-pointer">Checkout</button>
    </div>
  );
}