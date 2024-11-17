/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { images } from "@/(gallery)/gallery";
import ButtonNextSlider from "../ButtonNextSlider/ButtonNextSlider";

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
    <div className="h-min relative md:hidden">
      <div className="w-full h-full">
        <img src={images[imageIndex].src} alt="sneakers image product" />
      </div>
      <div className="flex items-center justify-between px-2 w-full h-full absolute top-0">
        <ButtonNextSlider buttonContent="&lt;" changeImageSlider={() => { decrementImageSlider(); }} />
        <ButtonNextSlider buttonContent="	&gt;" changeImageSlider={() => { incrementImageSlider(); }} />
      </div>
    </div>
  );
}