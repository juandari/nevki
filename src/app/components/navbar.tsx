"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <nav className="fixed z-40 w-full">
      <div className="inline-flex overflow-hidden flex-nowrap items-start translate-x-[-0]">
        <div className="px-16 py-10 flex justify-between w-[100vw]">
          <h2 className="text-white font-bold text-4xl">NV</h2>
          <button onClick={() => setIsOpenNav(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-alabaster transition-transform duration-300 hover:scale-110"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>

        <div
          className={`w-[100vw] grid grid-cols-2 bg-slate-400 h-[100vh] transform transition-transform duration-300 ${
            isOpenNav ? "translate-x-[-100%]" : ""
          }`}
        >
          <div className="h-full bg-secondary-600 relative">
            <span className="uppercase text-secondary-400 font-make text-9xl absolute bottom-44 left-12">
              Welcome
            </span>
          </div>
          <div className="h-full bg-secondary-700 text-secondary-200 px-16 py-10">
            <div className="flex w-full justify-between items-center">
              <span className="font-semibold text-xl text-alabaster">
                Nevki <i className="font-medium">Farisda</i>
              </span>
              <button onClick={() => setIsOpenNav(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 text-alabaster transition-transform duration-300 hover:scale-110"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col gap-5 text-secondary-200 mt-40">
              <li>
                <Link
                  href="#"
                  className="flex justify-between items-center hover:text-secondary-100"
                >
                  <span className="text-2xl">01</span>
                  <span className="text-8xl font-light">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex justify-between items-center hover:text-secondary-100"
                >
                  <span className="text-2xl">02</span>
                  <span className="text-8xl font-light">Works</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex justify-between items-center hover:text-secondary-100"
                >
                  <span className="text-2xl">03</span>
                  <span className="text-8xl font-light">About</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex justify-between items-center hover:text-secondary-100"
                >
                  <span className="text-2xl">04</span>
                  <span className="text-8xl font-light">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
