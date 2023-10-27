import { StaticImageData } from "next/image";
import ImageWithBorder from "./image-with-border";

interface ProductProps {
  src: StaticImageData;
  alt: string;
  title: string;
  year: string;
}

export default function Product({ src, alt, title, year }: ProductProps) {
  return (
    <div className="flex gap-16 items-end">
      <ImageWithBorder src={src} alt={alt} />
      <div className="flex flex-col w-[20rem] gap-2">
        <span className="text-5xl text-secondary-500 tracking-tighter">
          {title}
        </span>
        <span className="text-slate-400">{year}</span>
      </div>
    </div>
  );
}
