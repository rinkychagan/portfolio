import React from "react";

export default function Dropdown() {
  return (
    <div className="fixed top-[0px] right-0 w-[33%] h-screen bg-blue-500 z-10">
      <a href="/home" className="block p-4 text-white">
        Home
      </a>
      <a href="/about" className="block p-4 text-white">
        About
      </a>
      <a href="/contact" className="block p-4 text-white">
        Contact
      </a>
    </div>
  );
}
