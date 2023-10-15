import React from "react";

const Navbar = () => {
  return (
    <nav className="px-16 py-10 flex justify-between fixed z-50 w-full">
      <h2 className="text-white font-bold text-4xl">NV</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 9h16.5m-16.5 6.75h16.5"
        />
      </svg>
    </nav>
  );
};

export default Navbar;
