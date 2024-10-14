/* eslint-disable prefer-const */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { images } from "./(gallery)/gallery";
import { useState,useCallback } from "react";

export default function Home() {
  const [imagesIndex,setImagesIndex] = useState<number>(0);

  const setImageSlider = useCallback((index: number) => {
    setImagesIndex(index);
  },[]);

  return (
    <main className="w-full">
      <section className="w-full grid grid-cols-2 place-content-start gap-0 py-7">
        <div className="h-full w-full flex flex-col items-start gap-y-4">
          <img
            src={images[imagesIndex].src}
            alt="product photo"
            className="w-[400px] h-[420px] object-cover rounded-lg"
          />
          <div className="w-[400px] flex items-center gap-4">
            {images.map((image,index) => (
              <div
                key={index}
                onClick={() => setImageSlider(index)}
                className={imagesIndex === index ? "w-24 h-24 rounded-md border-2 border-paleOrange cursor-pointer" : "w-24 h-24 rounded-md cursor-pointer"}
              >
                <img
                  src={image.src}
                  alt={`foto do produto miniatura ${ index }`}
                  draggable="false"
                  className={imagesIndex === index ? "w-full h-full object-cover grayscale" : "w-full h-full object-cover rounded-md"}
                />
              </div>
            ))}
          </div>
        </div>
        <article></article>
      </section>
    </main>
  );
}