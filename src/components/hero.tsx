import Image from "next/image";

import photo from "@/assets/photo.webp";
import { getDictionary } from "@/dictionaries";

export default async function Hero() {
  const locale = await getDictionary("en");

  return (
    <section className="h-[1114px] bg-secondary-700 relative">
      <Image
        src={photo}
        alt="Nevki's photo"
        className="absolute bottom-0 left-[50%] transform translate-x-[-50%] z-20 w-[575px]"
      />
      <div className="absolute bottom-[50%] w-max left-[50%] transform translate-x-[-50%] translate-y-[50%]">
        <h2 className="text-secondary-500 text-[400px] font-make tracking-[-0.495rem] text-center uppercase">
          {locale["name"]}
        </h2>

        <p className="font-semibold absolute bottom-28 left-2 text-white text-xl h-fit">
          <i className="font-light">Based in</i> Indonesia
        </p>

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
  );
}
