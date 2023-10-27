import Image from "next/image";
import React from "react";

import arrowIcon from "@/assets/arrow-right-top.svg";

export default function ButtonSeeMore() {
  return (
    <button className="text-4xl flex items-center gap-2 font-medium mx-auto mt-20 hover:cursor-pointer">
      <span>SEE MORE</span>
      <Image src={arrowIcon} alt="" className="w-12" />
    </button>
  );
}
