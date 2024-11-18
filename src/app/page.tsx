/* eslint-disable @next/next/no-img-element */
"use client";

// hooks and contexts importation
import React,{ useState,useCallback,useContext,useReducer } from "react";
import { GlobalContext } from "@/context/ContextComponent";
import { CartContext } from "@/components/Header/CartItem";

// images importation
import { images } from "../(gallery)/gallery";
import { thumbnails } from "../(thumbnail)/thumbnail";

// Components importation
import ModalSlider from "@/components/ModalSlider/ModalSlider";
import MobileSlider from "@/components/MobileSlider/MobileSlider";
import Cart from "@/components/Cart/Cart";
import MobileMenu from "@/components/MobileMenu/MobileMenu";


type Action = { type: "increment"; } | { type: "decrement"; };

type State = {
  quantitySelected: number;
};

const initialState: State = { quantitySelected: 0 };

const reducer = (state: State,action: Action): State => {
  switch(action.type) {
    case "increment":
      return {
        quantitySelected: state.quantitySelected + 1,
      };
    case "decrement":
      if(state.quantitySelected > 0) {
        return {
          quantitySelected: state.quantitySelected - 1,
        };
      }
    default:
      return state;
  }
};


export default function Home() {
  const [imagesIndex,setImagesIndex] = useState<number>(0);

  const setImageSlider = useCallback((index: number) => {
    setImagesIndex(index);
  },[]);

  const { changeProductsQuantity } = useContext(CartContext);
  const { modalReducer } = useContext(GlobalContext)!;

  const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <div>
      <MobileMenu />
      <ModalSlider />
      <main className="w-full relative">
        <Cart />
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 place-items-center gap-0 py-0 lg:py-7">
          <MobileSlider visibility={true} />
          <div className="h-full w-[400px] max-w-full hidden lg:flex flex-col items-start gap-y-4">
            <img
              src={images[imagesIndex].src}
              alt="product photo"
              onClick={() => { modalReducer({ type: "SHOW" }); }}
              className="w-full h-[420px] object-cover rounded-lg"
            />
            <div className="w-full flex items-center justify-between gap-4">
              {thumbnails.map((image,index) => (
                <div
                  key={index}
                  onClick={() => setImageSlider(index)}
                  className={imagesIndex === index ? "w-24 h-24 rounded-md overflow-hidden border-2 border-paleOrange cursor-pointer" : "w-24 h-24 rounded-md cursor-pointer"}
                >
                  <img
                    src={image.src}
                    alt={`foto do produto miniatura ${ index }`}
                    draggable="false"
                    className={imagesIndex === index ? "w-full h-full object-cover brightness-75" : "w-full h-full object-cover rounded-md"}
                  />
                </div>
              ))}
            </div>
          </div>
          <article className="w-full p-9 lg:p-0 flex flex-col gap-9">
            <div className="flex flex-col gap-3">
              <h3 className="uppercase text-darkGrayishBlue font-bold text-sm">sneaker company</h3>
              <h1 className="uppercase text-veryDarkBlue text-4xl font-bold">fall limited edition<br />sneakers</h1>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-base text-darkGrayishBlue font-medium leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit porro, fugiat doloremque dolorum est doloribus incidunt alias repellendus. Minima explicabo quo quam saepe vero voluptas consequuntur assumenda, ratione voluptatem fuga.</p>
              <div className="flex w-full items-center md:items-start justify-between md:flex-col gap-2">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold">$125.00</span>
                  <span className="w-16 p-1 flex items-center justify-center rounded-md bg-black text-white font-medium">50%</span>
                </div>
                <small className="text-darkGrayishBlue line-through font-bold text-base">$250.00</small>
              </div>
            </div>
            <div className="w-full gap-4 flex flex-col lg:flex-row items-center  lg:gap-3">
              <div className="w-full lg:w-40 h-12 flex items-center justify-between rounded-md bg-gray-100">
                <button
                  onClick={() => {
                    dispatch({ type: "decrement" });
                  }}
                  className="w-10 h-full p-1 flex items-center justify-center cursor-pointer">
                  <img src="./images/icon-minus.svg" alt="minus icon" />
                </button>
                <span className="w-full h-full flex items-center justify-center font-semibold text-base">
                  {state.quantitySelected}
                </span>
                <button
                  onClick={() => {
                    dispatch({ type: "increment" });
                  }}
                  className="w-10 h-full p-1 flex items-center justify-center cursor-pointer">
                  <img src="./images/icon-plus.svg" alt="plus icon" />
                </button>
              </div>
              <button
                onClick={() => {
                  changeProductsQuantity(state.quantitySelected);
                }}
                className="w-full lg:w-64 h-12 rounded-lg p-1 flex items-center justify-center gap-2 bg-paleOrange font-bold text-black cursor-pointer">Add to cart</button>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}