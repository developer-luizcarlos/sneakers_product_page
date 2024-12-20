/*
  This code creates a context that allow to handle the quantity of products in the cart and the cart's visibility, enabling that other
  components make use of these values and function.

*/
"use client";
import React,{ useState,createContext } from "react";

type Props = {
  children: React.ReactNode;
};

type CartContextType = {
  productsQuantity: number;
  changeProductsQuantity: (value: number) => void;
  cartHidden: boolean;
  toggleCartVisibility: () => void;
};

export const CartContext = createContext<CartContextType>({
  changeProductsQuantity: () => {},
  toggleCartVisibility: () => {},
  productsQuantity: 0,
  cartHidden: true,
});

export default function CartItem({ children }: Props) {
  const [productsQuantity,setProductsQuantity] = useState<number>(0);
  const [cartHidden,setCartHidden] = useState<boolean>(false);

  const changeProductsQuantity = (value: number) => {
    setProductsQuantity(value);
  };

  const toggleCartVisibility = () => {
    setCartHidden((previousValue) => !previousValue);
  };

  return (
    <CartContext.Provider
      value={{ productsQuantity,changeProductsQuantity,cartHidden,toggleCartVisibility }}
    >
      {children}
    </CartContext.Provider>
  );
}
