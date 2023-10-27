import Image from "next/image";

import photoWithBorder from "@/assets/photo-with-border.webp";

export default function AboutPage() {
  return (
    <div className="bg-white pt-44 pb-20 px-56 flex flex-col w-full relative">
      <h2 className="title">
        I’am <span className="text-primary-500">Nevki Farisda</span> Graphic
        Design & UI/UX Designer
      </h2>
      <p className="max-w-[55rem] text-xl mt-12">
        I am a UI/UX and Graphic Design professional with a passion for creating
        seamless user experiences and captivating visuals. With extensive
        experience in leading design teams, I currently hold the position of Art
        Director, overseeing teams to achieve the highest quality in every
        project. I am dedicated to combining visual beauty with exceptional
        functionality,
      </p>
      <Image
        alt="nevki's photo"
        src={photoWithBorder}
        width={900}
        className="mt-40 self-center"
      />
    </div>
  );
}
