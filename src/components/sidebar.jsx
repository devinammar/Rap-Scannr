import { useState } from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const listsidebar =
    "";

  return (
    <>
      {/* <button id="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button> */}

      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <img src="/hamburgericon2.png" alt="menu" />
      </button>

      {isOpen && (
        <div className="overlaysidebar" onClick={() => setIsOpen(false)} />
      )}

      <div className={`fixed top-0 h-screen w-[240px] bg-white z-[999] px-6 pt-[60px] pb-6 transition-all duration-300 ease-in-out ${isOpen ? "left-0" : "-left-full"}`}>
        <ul className="containersidebar">
          <li className="listsidebar">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="listsidebar">
            <Link to="/trackanalysis" onClick={() => setIsOpen(false)}>Track Analysis</Link>
          </li>
          <li className="listsidebar">
            <Link to="/rapbattle" onClick={() => setIsOpen(false)}>Rap Battle</Link>
          </li>
          <li className="listsidebar">
            <Link to="/profile" onClick={() => setIsOpen(false)}>Profile</Link>
          </li>
        </ul>
      </div>
    </>
  );
};