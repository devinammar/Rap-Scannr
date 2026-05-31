// ini hasil debug

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Topbar = ({ hidden }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const listtopbar = "text-white hover:text-black hover:scale-[1.03] transition-transform duration-200 ease max-[768px]:hidden";

  return (
    <div className={`fixed top-0 w-full z-10 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
      <ul
        id="containertopbar"
        className={`flex justify-center top-0 list-none text-p leading-none ${scrolled ? "bg-black/40" : "bg-white/40"} font-ragular pt-4 pb-4 gap-40 min-[1360px]:gap-50 max-[1024px]:gap-25 max-[768px]:py-[23px]`}
      >
        <li className={listtopbar}><Link to="/">Home</Link></li>
        <li className={listtopbar}><Link to="/search">Track Analysis</Link></li>
        <li className={listtopbar}><Link to="/searchbyimage">Rap Battle</Link></li>
        <li className={listtopbar}><Link to="/about">Profile</Link></li>
      </ul>
    </div>
  );
};

// ___________________________________________________

// ini bikinan sendiri

// import { Link } from "react-router-dom";

// export const Topbar = () => {
//   const listtopbar =
//     "text-white hover:text-black hover:scale-[1.03] transition-transform duration-200 ease max-[768px]:hidden";

//   return (
//     <div className="fixed top-0 w-full z-10">
//       <ul
//         id="containertopbar"
//         className="flex justify-center top-0 list-none text-p leading-none bg-white/40 font-ragular pt-4 pb-4 gap-40 min-[1360px]:gap-50 max-[1024px]:gap-25 max-[768px]:py-[23px]"
//       >
//         <li className={listtopbar}>
//           <Link to="/">Home</Link>
//         </li>
//         <li className={listtopbar}>
//           <Link to="/search">Track Analysis</Link>
//         </li>
//         <li className={listtopbar}>
//           <Link to="/searchbyimage">Rap Battle</Link>
//         </li>
//         <li className={listtopbar}>
//           <Link to="/about">Profile</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };
