/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";
import { MouseEventHandler,useState } from "react";
import { IoClose } from "react-icons/io5";
import { images } from "@/app/(gallery)/gallery";

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
      className={!visibility ? "hidden" : "w-dvw h-dvh absolute top-0 left-0 bg-slate-950 bg-opacity-65 flex items-center justify-center z-40"}>
      <div className="w-[430px] flex items-center flex-col gap-y-4">
        <div className="w-full flex items-center justify-end">
          <button
            onClick={eventHandler}
            className="cursor-pointer">
            <IoClose className="w-12 h-7 hover:text-paleOrange" />
          </button>
        </div>
        <div className="w-full flex  items-center justify-center">
          <button
            onClick={() => { decrementImageIndex(); }}
            className="relative top-1/2 left-6 bg-grayishBlue w-12 h-12 rounded-[50%] p-5 flex items-center justify-center cursor-pointer duration-300 hover:text-paleOrange">
            <span>&lt;</span>
          </button>
          <img
            src={images[imageIndex].src}
            alt="product photo"
            className="w-full object-cover rounded-xl"
          />
          <button
            onClick={() => { incrementImageIndex(); }}
            className="relative top-1/2 right-6 bg-grayishBlue w-12 h-12 rounded-[50%] p-5 flex items-center justify-center cursor-pointer duration-300 hover:text-paleOrange">
            &gt;
          </button>
        </div>
        <div className="w-full flex items-center justify-center gap-3">
          {images.map((image,index) => {
            return <div key={image.src} className={imageIndex === index ? "border-2 border-paleOrange rounded-lg" : ""}>
              <img
                src={image.src}
                alt="product photo" className={index === imageIndex ? "object-cover w-24 h-24 grayscale rounded-lg cursor-pointer" : "object-cover w-24 h-24 rounded-lg cursor-pointer"}
                onClick={() => { setImageIndex(index); }}
              />
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}