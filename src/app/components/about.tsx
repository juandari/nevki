import React from "react";
import Image from "next/image";

import arrowIcon from "@/app/assets/arrow-right-top.svg";
import { getDictionary } from "../dictionaries";

export default async function About() {
  const locale = await getDictionary("en");

  return (
    <section className="flex justify-between items-center px-20 mt-20">
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
    </section>
  );
}
