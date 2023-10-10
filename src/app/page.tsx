import Image from "next/image";

import photo from "@/app/assets/photo.webp";
import { getDictionary } from "./dictionaries";

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

export default async function Home() {
  const locale = await getDictionary("en");

  return (
    <main>
      <section className="w-full h-[1114px] bg-secondary-700 relative">
        <Image
          src={photo}
          alt="Nevki's photo"
          className="absolute bottom-0 left-[50%] transform translate-x-[-50%] z-20 w-[575px]"
        />
        <div className="absolute bottom-[50%] w-max left-[50%] transform translate-x-[-50%] translate-y-[50%]">
          <h2 className="text-secondary-500 text-[400px] font-make tracking-[-0.495rem] text-center uppercase">
            {locale["name"]}
          </h2>

          <ul className="absolute whitespace-nowrap bottom-[200px] right-[80px] text-secondary-50 text-2xl">
            <li className="flex items-center gap-2">
              <span className="border border-secondary-50 rounded-full text-xs p-2 italic">
                01
              </span>
              <span className="font-semibold">
                Art Director <i className="font-light">at Notisnal</i>
              </span>
            </li>
            <li className="flex items-center gap-2 mt-2">
              <span className="border border-secondary-50 rounded-full text-xs p-2 italic">
                02
              </span>
              <span className="font-semibold">UI/UX Designer</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="flex justify-between items-center px-20">
        <p className="w-96">{locale.about}</p>
        <h2 className="text-secondary-500 text-9xl leading-10">about</h2>
      </section>

      <section
        aria-label="footer"
        className="mt-20 px-8 text-6xl bg-primary-500 pt-96 pb-20 relative"
      >
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

        <h3 className="font-normal font-make text-secondary-50 text-[435px] w-full text-center">
          {locale["contact-button"]}
        </h3>

        <div className="mt-12 flex justify-between text-lg text-secondary-50">
          <span className="w-[33.3%] whitespace-nowrap">
            ALL RIGHTS RESERVED © 2023
          </span>
          <span className="w-[33.3%] uppercase text-center">
            Nefkijjj@gmail.com
          </span>
          <span className="w-[33.3%] uppercase text-right">MAKESTUDIO</span>
        </div>
      </section>
    </main>
  );
}
