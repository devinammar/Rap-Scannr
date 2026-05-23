import { useState } from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const listsidebarlink =
    "text-(--color-black) text-(--text-p) font-semibold no-underline";

  return (
    <>
      {/* <button id="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button> */}

      <button
        className="hidden fixed top-3 left-6 bg-transparent cursor-pointer z-[1000] border-0 max-md:block"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img className="w-6 h-6" src="/hamburgericon.png" alt="menu" />
      </button>

      {isOpen && (
        <div
          className="hidden fixed top-0 left-0 w-screen h-screen bg-(--color-black) opacity-50 z-[998] max-md:block"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`border-r-[3px] border-(--color-black) fixed top-0 h-screen w-[240px] bg-(--color-white) z-[999] px-6 pt-[60px] pb-6 transition-all duration-300 ease-in-out max-md:block ${isOpen ? "left-0" : "-left-full"}`}
      >
        <ul className="list-none flex flex-col gap-4 p-0">
          <li className="listsidebar">
            <Link
              className={listsidebarlink}
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="listsidebar">
            <Link
              className={listsidebarlink}
              to="/trackanalysis"
              onClick={() => setIsOpen(false)}
            >
              Track Analysis
            </Link>
          </li>
          <li className="listsidebar">
            <Link
              className={listsidebarlink}
              to="/rapbattle"
              onClick={() => setIsOpen(false)}
            >
              Rap Battle
            </Link>
          </li>
          <li className="listsidebar">
            <Link
              className={listsidebarlink}
              to="/profile"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
