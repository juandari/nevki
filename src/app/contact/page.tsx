"use client";
import { useState } from "react";

import Divider from "@/components/divider";
import ButtonSeeMore from "@/components/button-see-more";

export default function ContactPage() {
  const [name, setName] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className="bg-white pt-44 px-56 pb-20">
      <h2 className="title max-w-[25rem]">
        Let&apos;s start a{" "}
        <span className="text-primary-500">Project Together</span>
      </h2>

      <div className="mt-20">
        <Divider />

        <div className="my-8 text-xl">
          <label htmlFor="name" className="flex gap-4 text-secondary-500">
            <span>01/</span> <span>Your Name</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={handleNameChange}
            className="mt-1 px-11 w-full border-none py-4 focus:outline-none"
          />
        </div>

        <Divider />

        <div className="my-8 text-xl">
          <label htmlFor="email" className="flex gap-4 text-secondary-500">
            <span>02/</span> <span>Your Email</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Youremail@gmail.com"
            value={name}
            onChange={handleNameChange}
            className="mt-1 px-11 w-full border-none py-4 focus:outline-none"
          />
        </div>

        <Divider />

        <div className="my-8 text-xl">
          <label htmlFor="orgName" className="flex gap-4 text-secondary-500">
            <span>03/</span> <span>Organization Name</span>
          </label>
          <input
            type="text"
            id="orgName"
            name="orgName"
            placeholder="PT. Your organization name"
            value={name}
            onChange={handleNameChange}
            className="mt-1 px-11 w-full border-none py-4 focus:outline-none"
          />
        </div>

        <Divider />

        <div className="my-8 text-xl">
          <label htmlFor="message" className="flex gap-4 text-secondary-500">
            <span>04/</span> <span>Message</span>
          </label>
          <input
            type="text"
            id="message"
            name="message"
            placeholder="Hello nev can u help me.."
            value={name}
            onChange={handleNameChange}
            className="mt-1 px-11 w-full border-none py-4 focus:outline-none"
          />
        </div>

        <Divider />
      </div>

      <ButtonSeeMore />
    </div>
  );
}
