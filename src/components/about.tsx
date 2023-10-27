import React from "react";
import Image from "next/image";

import imageSlider from "@/assets/image-slider-1.webp";
import arrowIcon from "@/assets/arrow-right-top.svg";
import { getDictionary } from "@/dictionaries";
import ButtonSeeMore from "./button-see-more";
import ImageWithBorder from "./image-with-border";

export default async function About() {
  const locale = await getDictionary("en");

  return (
    <section className="pt-32 bg-white mt-[-1px]">
      <div className="flex justify-between items-center px-20">
        <p className="w-[28em] text-xl">{locale.about}</p>
        <div className="flex gap-8 h-fit">
          <h2 className="text-secondary-500 text-[10rem] leading-[10rem] font-medium tracking-[-0.9rem]">
            about
          </h2>
          <div className="flex flex-col gap-4 pt-3">
            <span className="text-secondary-200 text-2xl">01</span>
            <Image src={arrowIcon} alt="" className="w-12" />
          </div>
        </div>
      </div>

      <div className="mt-32 w-full inline-flex flex-nowrap gap-6 overflow-hidden">
        <ul className="flex items-center justify-center gap-6 [&_img]:max-w-none animate-infinite-scroll-to-left">
          <li>
            <ImageWithBorder src={imageSlider} alt="product-showcase" />
            <p className="mt-4 text-xl">UI/UX Website Designer</p>
          </li>
          <li>
            <ImageWithBorder src={imageSlider} alt="product-showcase" />
            <p className="mt-4 text-xl">UI/UX Website Designer</p>
          </li>
          <li>
            <ImageWithBorder src={imageSlider} alt="product-showcase" />
            <p className="mt-4 text-xl">UI/UX Website Designer</p>
          </li>
          <li>
            <ImageWithBorder src={imageSlider} alt="product-showcase" />
            <p className="mt-4 text-xl">UI/UX Website Designer</p>
          </li>
          <li>
            <ImageWithBorder src={imageSlider} alt="product-showcase" />
            <p className="mt-4 text-xl">UI/UX Website Designer</p>
          </li>
        </ul>
        <ul
          aria-hidden="true"
          className="flex items-center justify-center gap-6 [&_img]:max-w-none animate-infinite-scroll-to-left"
        >
          <li>
            <ImageWithBorder src={imageSlider} alt="product-showcase" />
            <p className="mt-4 text-xl">UI/UX Website Designer</p>
          </li>
          <li>
            <ImageWithBorder src={imageSlider} alt="product-showcase" />
            <p className="mt-4 text-xl">UI/UX Website Designer</p>
          </li>
          <li>
            <ImageWithBorder src={imageSlider} alt="product-showcase" />
            <p className="mt-4 text-xl">UI/UX Website Designer</p>
          </li>
          <li>
            <ImageWithBorder src={imageSlider} alt="product-showcase" />
            <p className="mt-4 text-xl">UI/UX Website Designer</p>
          </li>
          <li>
            <ImageWithBorder src={imageSlider} alt="product-showcase" />
            <p className="mt-4 text-xl">UI/UX Website Designer</p>
          </li>
        </ul>
      </div>

      <div className="mt-12 w-full inline-flex flex-nowrap gap-6 overflow-hidden">
        <ul className="flex items-center justify-center gap-6 [&_img]:max-w-none animate-infinite-scroll-to-right">
          <li>
            <ImageWithBorder src={imageSlider} alt="product-showcase" />
            <p className="mt-4 text-xl">UI/UX Website Designer</p>
          </li>
          <li>
            <ImageWithBorder src={imageSlider} alt="product-showcase" />
            <p className="mt-4 text-xl">UI/UX Website Designer</p>
          </li>
          <li>
            <ImageWithBorder src={imageSlider} alt="product-showcase" />
            <p className="mt-4 text-xl">UI/UX Website Designer</p>
          </li>
          <li>
            <ImageWithBorder src={imageSlider} alt="product-showcase" />
            <p className="mt-4 text-xl">UI/UX Website Designer</p>
          </li>
          <li>
            <ImageWithBorder src={imageSlider} alt="product-showcase" />
            <p className="mt-4 text-xl">UI/UX Website Designer</p>
          </li>
        </ul>
        <ul
          aria-hidden="true"
          className="flex items-center justify-center gap-6 [&_img]:max-w-none animate-infinite-scroll-to-right"
        >
          <li>
            <ImageWithBorder src={imageSlider} alt="product-showcase" />
            <p className="mt-4 text-xl">UI/UX Website Designer</p>
          </li>
          <li>
            <ImageWithBorder src={imageSlider} alt="product-showcase" />
            <p className="mt-4 text-xl">UI/UX Website Designer</p>
          </li>
          <li>
            <ImageWithBorder src={imageSlider} alt="product-showcase" />
            <p className="mt-4 text-xl">UI/UX Website Designer</p>
          </li>
          <li>
            <ImageWithBorder src={imageSlider} alt="product-showcase" />
            <p className="mt-4 text-xl">UI/UX Website Designer</p>
          </li>
          <li>
            <ImageWithBorder src={imageSlider} alt="product-showcase" />
            <p className="mt-4 text-xl">UI/UX Website Designers</p>
          </li>
        </ul>
      </div>

      <ButtonSeeMore />
    </section>
  );
}
