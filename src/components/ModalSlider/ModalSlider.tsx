/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";
import { MouseEventHandler,useState,useContext } from "react";
import { IoClose } from "react-icons/io5";
import { images } from "@/(gallery)/gallery";
import { thumbnails } from "@/(thumbnail)/thumbnail";
import ButtonNextSlider from "@/components/ButtonNextSlider/ButtonNextSlider";
import { GlobalContext } from "@/context/ContextComponent";


export default function ModalSlider() {
  const { modalReducer,modalState } = useContext(GlobalContext)!;

  const [imageIndex,setImageIndex] = useState<number>(0);

  const incrementImageIndex = () => {
    setImageIndex((previousValue) => {
      if(previousValue < images.length - 1) {
        return previousValue + 1;
      } else {
        return 0;
      }
    });
  };

  const decrementImageIndex = () => {
    setImageIndex((previousValue) => {
      if(previousValue > 0) {
        return previousValue - 1;
      } else {
        return images.length - 1;
      }
    });
  };

  return (
    <div
      onClick={() => { modalReducer({ type: "HIDDEN" }); }}
      className={!modalState.isVisible ? "hidden" : "w-dvw h-dvh absolute top-0 bottom-0 right-0 left-0 bg-zinc-700 bg-opacity-75 flex items-center justify-center z-40"}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-[400px] flex items-center flex-col gap-y-4">
        <div className="w-full flex items-center justify-end">
          <button
            onClick={() => { modalReducer({ type: "HIDDEN" }); }}
            className="cursor-pointer">
            <IoClose className="w-12 h-7 hover:text-paleOrange duration-500" />
          </button>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full relative h-[400px]">
            <div className="w-full h-full rounded-md overflow-hidden" >
              <img src={images[imageIndex].src} alt="product photo" />
            </div>
            <div
              className="absolute top-0 left-0 h-full w-full flex items-center justify-between">
              <div className="w-[440px] overflow-clip absolute -left-4">
                <div className="w-full flex items-center justify-between">
                  <ButtonNextSlider buttonContent="&lt;" changeImageSlider={() => { decrementImageIndex(); }} />
                  <ButtonNextSlider buttonContent=" &gt;" changeImageSlider={() => { incrementImageIndex(); }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-3">
          {thumbnails.map((image,index) => {
            return <div key={image.src} className={imageIndex === index ? "border-2 border-paleOrange rounded-lg" : ""}>
              <img
                src={image.src}
                alt="product photo" className={index === imageIndex ? "object-cover w-24 h-24 brightness-75 rounded-lg cursor-pointer" : "object-cover w-24 h-24 rounded-lg cursor-pointer"}
                onClick={() => { setImageIndex(index); }}
              />
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}