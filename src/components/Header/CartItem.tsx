/*
  Este código cria um contexto que atribui valor ao ícone anexo ao item do carrinho de compras permite manipular o seu valor  a partir de um outro componente ainda a ser criado;
*/

import React,{ useState,createContext } from "react";

type Props = {
  children: React.ReactNode;
};

type CartContextType = {
  productsQuantity: number;
  changeProductsQuantity: (value: number) => void;
};

export const CartContext = createContext<CartContextType>({
  productsQuantity: 0,
  changeProductsQuantity: () => {},
});

export default function CartItem({ children }: Props) {
  const [productsQuantity,setProductsQuantity] = useState<number>(0);

  const changeProductsQuantity = (value: number) => {
    setProductsQuantity(value);
  };

  return (
    <CartContext.Provider value={{ productsQuantity,changeProductsQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
