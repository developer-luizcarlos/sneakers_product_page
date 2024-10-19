/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";
import { MouseEventHandler,useState } from "react";
import { IoClose } from "react-icons/io5";
import { images } from "@/app/(gallery)/gallery";
import { thumbnails } from "@/app/(thumbnail)/thumbnail";

type Props = {
  visibility: boolean;
  eventHandler: MouseEventHandler;
};

export default function ModalSlider({ visibility,eventHandler }: Props) {
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
      className={!visibility ? "hidden" : "w-dvw h-dvh absolute top-0 bottom-0 right-0 left-0 bg-slate-950 bg-opacity-65 flex items-center justify-center z-40"}>
      <div
        className="w-[400px] flex items-center flex-col gap-y-4">
        <div className="w-full flex items-center justify-end">
          <button
            onClick={eventHandler}
            className="cursor-pointer">
            <IoClose className="w-12 h-7 hover:text-paleOrange duration-500" />
          </button>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full relative h-[400px]">
            <div
              className="absolute top-0 left-0 bottom-0 right-0 h-full w-full flex items-center justify-between">
              <button
                onClick={() => decrementImageIndex()}
                className="w-14 h-14 bg-zinc-200 flex items-center justify-center font-bold text-xl rounded-full relative -left-8 hover:text-paleOrange active:text-paleOrange duration-500">
                &lt;
              </button>
              <button
                onClick={() => incrementImageIndex()}
                className="w-14 h-14 bg-zinc-200 flex items-center justify-center font-bold text-xl rounded-full relative -right-8 hover:text-paleOrange active:text-paleOrange duration-500">
                &gt;
              </button>
            </div>
            <img src={images[imageIndex].src} alt="product photo" className="w-full h-full rounded-md" />
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