import React from "react";

import { getDictionary } from "../dictionaries";

const SOCIAL_MEDIAS = [
  {
    text: "Behance",
    number: "01",
  },
  {
    text: "Dribble",
    number: "02",
  },
  {
    text: "Instagram",
    number: "03",
  },
  {
    text: "LinkedIn",
    number: "04",
  },
];

export default async function Footer() {
  const locale = await getDictionary("en");

  return (
    <>
      <div
        style={{ borderRadius: "0 0 50% 50%/0 0 100% 100%" }}
        className="bg-white h-[14em] w-full mt-[-1px]"
      ></div>
      <section
        aria-label="footer"
        className="px-8 text-6xl pt-32 pb-20 relative"
      >
        <h3 className="font-normal font-make text-secondary-50 text-[435px] w-full text-center">
          {locale["contact-button"]}
        </h3>

        <ul>
          {SOCIAL_MEDIAS.map((item) => (
            <li
              key={item.number}
              className="flex px-2 pb-5 mt-2 tracking-tighter justify-between items-center border-b-[5px] border-b-primary-400"
            >
              <span className="text-secondary-50">{item.text}</span>
              <span className="text-primary-400 font-semibold">
                {item.number}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex justify-between text-lg text-secondary-50">
          <span className="w-[33.3%] whitespace-nowrap">
            ALL RIGHTS RESERVED © 2023
          </span>
          <span className="w-[33.3%] uppercase text-center">
            Nefkijjj@gmail.com
          </span>
          <span className="w-[33.3%] uppercase text-right">MAKESTUDIO</span>
        </div>
      </section>
    </>
  );
}
