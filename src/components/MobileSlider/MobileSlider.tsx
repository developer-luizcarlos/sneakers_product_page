/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { images } from "@/app/(gallery)/gallery";

type Props = {
  visibility: boolean;
};

export default function MobileSlider({ visibility }: Props) {
  const [imageIndex,setImageIndex] = useState<number>(0);

  const incrementImageSlider = () => {
    setImageIndex((previousValue) => {
      if(imageIndex < images.length - 1) {
        return previousValue + 1;
      } else {
        return 0;
      }
    });
  };

  const decrementImageSlider = () => {
    setImageIndex((previousValue) => {
      if(imageIndex > 0) {
        return previousValue - 1;
      } else {
        return images.length - 1;
      }
    });
  };

  if(!visibility) return;
  return (
    <div className="border-2 w-full md:hidden h-[400px] relative">
      <img src={images[imageIndex].src} alt="product photo" loading="lazy" className="w-full h-full object-cover" />
      <div className="absolute mx-auto h-full w-full flex items-center justify-center gap-80 top-0">
        <button
          onClick={() => decrementImageSlider()}
          className="w-12 h-12 bg-lightGrayishBlue rounded-full cursor-pointer text-xl text-black font-semibold flex items-center justify-center hover:text-paleOrange">&lt;</button>
        <button
          onClick={() => incrementImageSlider()}
          className="w-12 h-12 bg-lightGrayishBlue rounded-full cursor-pointer text-xl text-black font-semibold flex items-center justify-center hover:text-paleOrange">&gt;</button>
      </div>
    </div>
  );
}