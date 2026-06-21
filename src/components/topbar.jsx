// ini hasil debug

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export const Topbar = ({ hidden }) => {
  const [overBanner, setOverBanner] = useState(false);
  const location = useLocation();
  const topbarRef = useRef(null);

  useEffect(() => {
    const bannerEl = document.querySelector("[data-page-banner]");

    if (!bannerEl) {
      setOverBanner(false);
      return;
    }

    const checkOverlap = () => {
      const topbarHeight = topbarRef.current?.offsetHeight ?? 0;
      const rect = bannerEl.getBoundingClientRect();
      setOverBanner(rect.bottom > 0 && rect.top < topbarHeight);
    };

    checkOverlap();
    window.addEventListener("scroll", checkOverlap, { passive: true });
    window.addEventListener("resize", checkOverlap);
    return () => {
      window.removeEventListener("scroll", checkOverlap);
      window.removeEventListener("resize", checkOverlap);
    };
  }, [location.pathname]);

  const listtopbar =
    "text-white hover:text-black hover:scale-[1.03] transition-transform duration-200 ease max-[768px]:hidden";

  return (
    <div
      ref={topbarRef}
      className={`fixed top-0 w-full z-10 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <ul
        id="containertopbar"
        className={`flex justify-center top-0 list-none text-p leading-none ${
          overBanner ? "bg-white/40" : "bg-black/40"
        } font-ragular pt-4 pb-4 gap-40 min-[1360px]:gap-50 max-[1024px]:gap-25 max-[768px]:py-[23px]`}
      >
        <li className={listtopbar}><Link to="/">Home</Link></li>
        <li className={listtopbar}><Link to="/trackanalysis">Track Analysis</Link></li>
        <li className={listtopbar}><Link to="/rapbattle">Rap Battle</Link></li>
        <li className={listtopbar}><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  );
};

// ___________________________________________________


// ini belum bener, belum detect banner agar topbar berubah warna (di home page, track analysis page & rap battle page)

// import { BrowserRouter, Link } from "react-router-dom";
// import { useState, useEffect } from "react";

// export const Topbar = ({ hidden }) => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > window.innerHeight * 0.6);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const listtopbar = "text-white hover:text-black hover:scale-[1.03] transition-transform duration-200 ease max-[768px]:hidden";

//   return (
//     <div className={`fixed top-0 w-full z-10 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
//       <ul
//         id="containertopbar"
//         className={`flex justify-center top-0 list-none text-p leading-none ${scrolled ? "bg-black/40" : "bg-white/40"} font-ragular pt-4 pb-4 gap-40 min-[1360px]:gap-50 max-[1024px]:gap-25 max-[768px]:py-[23px]`}
//       >
//         <li className={listtopbar}><Link to="/">Home</Link></li>
//         <li className={listtopbar}><Link to="/trackanalysis">Track Analysis</Link></li>
//         <li className={listtopbar}><Link to="/rapbattle">Rap Battle</Link></li>
//         <li className={listtopbar}><Link to="/profile">Profile</Link></li>
//       </ul>
//     </div>
//   );
// };

// ___________________________________________________

// ini bikinan sendiri (default)

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
