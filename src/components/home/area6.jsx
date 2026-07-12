// hasil debugging

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  scrollProps,
  fadeIn,
  fadeRight,
  fadeLeft,
  zoomIn,
} from "../../animations/scrollAnimations";
import { useAnimationMobile } from "../../hooks/useAnimationMobile";

export const Area6 = () => {
  const buttonsendmessage =
    "text-p text-white font-medium self-center ml-6 max-[640px]:ml-0";
  const buttoncall =
    "text-p text-black font-medium self-center ml-6 max-[640px]:ml-0";
  const sublist = "text-p text-white";
  const isMobile = useAnimationMobile(1280);

  return (
    <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center mt-62 max-[1024px]:mt-52 max-[768px]:mt-46 h-140 flex gap-15 max-[1280px]:flex-col">
      <motion.div
        {...scrollProps}
        variants={zoomIn}
        id="imageleft"
        className="bg-cover bg-center h-full w-[480px] shrink-0 max-[1440px]:w-[440px] max-[1400px]:w-[400px] max-[1360px]:w-[380px] max-[1340px]:w-[340px] max-[1300px]:w-[300px] max-[1280px]:w-full max-[1280px]:h-[320px] max-[1024px]:h-[290px] max-[768px]:h-[240px]"
        style={{
          backgroundImage: "url('/pexels-introspectivedsgn-7464823.jpg')",
        }}
      >
        <Link to="/">
          <img src="/nama-logo.png" alt="logo" />
        </Link>
      </motion.div>
      <motion.div {...scrollProps}
        variants={isMobile ? undefined : zoomIn} id="footer" className="bg-grey w-full flex flex-col">
        <div className="mx-auto px-20 max-[1044px]:mx-0 max-[1044px]:pr-0 max-[1044px]:pl-20 max-[768px]:pl-14 max-[480px]:pl-8 py-18 flex flex-col justify-between h-full max-[1280px]:h-140 max-[1044px]:h-auto">
          <div
            id="list"
            className="flex flex-wrap gap-18 pb-20 max-[1044px]:gap-x-10 max-[1044px]:gap-y-15 max-[768px]:gap-y-15 min-[1600px]:gap-26 min-[1780px]:gap-34 min-[1860px]:gap-40 max-[1280px]:gap-40 max-[1240px]:gap-36 max-[1192px]:gap-30"
          >
            <div className="listarea1 max-[1044px]:w-[45%] max-[768px]:w-full">
              <h3 className="text-h3 font-medium text-white pb-10 max-[1044px]:pb-7">
                Company
              </h3>
              <ul className="flex flex-col gap-2">
                <li className={sublist}>
                  <Link to="/">About Us</Link>
                </li>
                <li className={sublist}>
                  <Link to="/">Partners</Link>
                </li>
                <li className={sublist}>
                  <Link to="/">News</Link>
                </li>
                <li className={sublist}>
                  <Link to="/">Shop</Link>
                </li>
              </ul>
            </div>
            <div className="listarea2 max-[1044px]:w-[45%] max-[768px]:w-full">
              <h3 className="text-h3 font-medium text-white pb-10 max-[1044px]:pb-7">
                Legal & Policy
              </h3>
              <ul className="flex flex-col gap-2">
                <li className={sublist}>
                  <Link to="/">Privacy & Policy</Link>
                </li>
                <li className={sublist}>
                  <Link to="/">Terms of Service</Link>
                </li>
                <li className={sublist}>
                  <Link to="/">Cookie Policy</Link>
                </li>
                <li className={sublist}>
                  <Link to="/">Licence</Link>
                </li>
              </ul>
            </div>
            <div className="listarea3 max-[1044px]:w-[45%] max-[768px]:w-full">
              <h3 className="text-h3 font-medium text-white pb-10 max-[1044px]:pb-7">
                Resource
              </h3>
              <ul className="flex flex-col gap-2">
                <li className={sublist}>
                  <Link to="/">API Resource</Link>
                </li>
                <li className={sublist}>
                  <Link to="/">Photo Stocks</Link>
                </li>
                <li className={sublist}>
                  <Link to="/">Articles</Link>
                </li>
                <li className={sublist}>
                  <Link to="/">Tech Stack</Link>
                </li>
              </ul>
            </div>
            <div className="listarea4 max-[1044px]:w-[45%] max-[768px]:w-full">
              <h3 className="text-h3 font-medium text-white pb-10 max-[1044px]:pb-7">
                About
              </h3>
              <ul className="flex flex-col gap-2">
                <li className={sublist}>
                  <Link to="/">About Rap Scannr</Link>
                </li>
                <li className={sublist}>
                  <Link to="/">Features</Link>
                </li>
                <li className={sublist}>
                  <Link to="/">How it Works</Link>
                </li>
                <li className={sublist}>
                  <Link to="/">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-7 pb-9 max-[530px]:pb-15 max-[530px]:justify-center max-[530px]:pr-14 max-[480px]:pr-8">
            <Link
              to="https://www.github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/github.png" className="w-9" alt="github" />
            </Link>
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/instagram.png" className="w-9" alt="instagram" />
            </Link>
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/facebook.png" className="w-9" alt="facebook" />
            </Link>
            <Link
              to="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.png" className="w-9" alt="linkedin" />
            </Link>
          </div>
          <div
            id="2button"
            className="flex gap-10 min-[1640px]:gap-14 max-[530px]:flex-col max-[530px]:gap-6 max-[530px]:pr-14 max-[480px]:pr-8"
          >
            <Link
              className="bg-black h-10 flex w-[222px] hover:bg-white/50 group max-[768px]:w-[180px] max-[530px]:w-full max-[640px]:justify-center"
              to=""
            >
              <p className={`${buttonsendmessage} group-hover:text-black`}>
                Send Message
              </p>
            </Link>
            <Link
              className="bg-white h-10 flex w-[222px] hover:bg-white/50 group max-[768px]:w-[180px] max-[530px]:w-full max-[640px]:justify-center"
              to=""
            >
              <p className={`${buttoncall} group-hover:text-black`}>Call Now</p>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// ______________________________________________________________

// bikinan sendiri

// import { Link } from "react-router-dom";

// export const Area6 = () => {
//   const buttonsendmassage =
//     "text-p text-white font-medium self-center ml-6 max-[480px]:ml-0";
//   const buttoncall =
//     "text-p text-black font-medium self-center ml-6 max-[480px]:ml-0";
//   const sublist = "text-p text-white";

//   return (
//     <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center mt-62 max-[1024px]:mt-52 max-[768px]:mt-46 h-140 flex gap-15"> {/* gap belum diatur responsive (baru gap-15) */}
//       <div
//         id="imageleft"
//         className="bg-cover bg-center h-full w-[480px] shrink-0"
//         style={{ backgroundImage: "url('/pexels-introspectivedsgn-7464823.jpg')" }}
//       >
//         <Link to="/">
//           <img src="/nama-logo.png" alt="logo" />
//         </Link>
//       </div>
//       <div id="footer" className="bg-grey w-full flex flex-col">
//         <div className="mx-auto px-20">
//          <div id="list" className="flex gap-18 pt-23"> {/* ini gap antar list blm dibenerin (terutama utk responsivitas) */}
//             <div className="listarea1">
//               <h3 className="text-h3 font-medium text-white pb-13">Company</h3>
//               <ul className="flex flex-col gap-2">
//                 <li className={sublist}><Link to="/">About Us</Link></li>
//                 <li className={sublist}><Link to="/">Partners</Link></li>
//                 <li className={sublist}><Link to="/">News</Link></li>
//                 <li className={sublist}><Link to="/">Shop</Link></li>
//               </ul>
//             </div>
//             <div className="listarea2">
//               <h3 className="text-h3 font-medium text-white pb-13">Contact</h3>
//               <ul className="flex flex-col gap-2">
//                 <li className={sublist}><Link to="/">Github</Link></li>
//                 <li className={sublist}><Link to="/">Email</Link></li>
//                 <li className={sublist}><Link to="/">LinkedIn</Link></li>
//                 <li className={sublist}><Link to="/">Instagram</Link></li>
//               </ul>
//             </div>
//             <div className="listarea3">
//               <h3 className="text-h3 font-medium text-white pb-13">Legal & Policy</h3>
//               <ul className="flex flex-col gap-2">
//                 <li className={sublist}><Link to="/">Privacy & Policy</Link></li>
//                 <li className={sublist}><Link to="/">Terms of Service</Link></li>
//                 <li className={sublist}><Link to="/">Cookie Policy</Link></li>
//                 <li className={sublist}><Link to="/">Lisence</Link></li>
//               </ul>
//             </div>
//             <div className="listarea4">
//               <h3 className="text-h3 font-medium text-white pb-13">About</h3>
//               <ul className="flex flex-col gap-2">
//                 <li className={sublist}><Link to="/">About Rap Scannr</Link></li>
//                 <li className={sublist}><Link to="/">Features</Link></li>
//                 <li className={sublist}><Link to="/">How it Works</Link></li>
//                 <li className={sublist}><Link to="/">Tech Stack</Link></li>
//               </ul>
//             </div>
//           </div>
//           <div id="2button" className="flex gap-10 max-[480px]:gap-8">
//             <Link
//               className="bg-black h-10 flex w-[222px] hover:bg-white group max-[768px]:w-[180px] max-[640px]:w-[160px] max-[480px]:w-full max-[480px]:justify-center"
//               to=""
//             >
//               <p className={`${buttonsendmassage} group-hover:text-black`}>Send Massage</p>
//             </Link>
//             <Link
//               className="bg-white h-10 flex w-[222px] hover:bg-black group max-[768px]:w-[180px] max-[640px]:w-[160px] max-[480px]:w-full max-[480px]:justify-center"
//               to=""
//             >
//               <p className={`${buttoncall} group-hover:text-white`}>Call Now</p>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
