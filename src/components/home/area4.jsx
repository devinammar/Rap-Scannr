import { Link } from "react-router-dom";

export const Area4 = () => {
  const card1 = "relative w-90 max-[940px]:w-full h-[560px] max-[940px]:h-[400px] bg-cover bg-bottom group overflow-hidden";
  const card2 = "relative w-90 max-[940px]:w-full h-[560px] max-[940px]:h-[400px] bg-cover bg-center group overflow-hidden";
  const cardhover = "absolute inset-0 bg-black -translate-y-full group-hover:translate-y-0 transition-transform duration-300";
  const cardhovertext = "absolute inset-0 flex px-8 pt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300";

  return (
    <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center grid justify-items-end mt-[248px] px-20 max-[768px]:px-14 max-[480px]:px-8 max-[1192px]:w-fit max-[1192px]:justify-self-end max-[940px]:w-full max-[940px]:justify-self-stretch">
        <h2 className="text-h2 max-[640px]:text-h2-2 max-[320px]:text-h2-3 text-black font-medium pb-7">Our Features</h2>
        <div className="flex flex-nowrap items-end max-[1192px]:flex-wrap max-[940px]:w-full">
        <Link to="/trackanalysis" className="order-2 pr-15 max-[1192px]:order-1 max-[940px]:w-full max-[940px]:pr-0 max-[940px]:pb-16 max-[768px]:pb-12 max-[520px]:pb-9">
          <div className={card1} style={{ backgroundImage: "url('/pexels-zachtheshoota-2067689.jpg')" }}>
            <div className={cardhover} />
            <div className={cardhovertext}>
              <p className="text-white text-p">Penjelasan Track Analysis</p>
            </div>
            <h3 className="text-h3 text-white font-medium px-8 pb-14 absolute bottom-0 z-10">Track Analysis</h3>
          </div>
        </Link>
        <Link to="/rapbattle" className="order-3 max-[1192px]:order-2 max-[940px]:w-full">
          <div className={card2} style={{ backgroundImage: "url('/pexels-din-127253222-14853507.jpg')" }}>
            <div className={cardhover} />
            <div className={cardhovertext}>
              <p className="text-white text-p">Penjelasan Rap Battle</p>
            </div>
            <h3 className="text-h3 text-white font-medium px-8 pb-14 absolute bottom-0 z-10">Rap Battle</h3>
          </div>
        </Link>
        <p className="max-w-[580px] text-p order-1 mr-auto pr-19 max-[1192px]:order-3 max-[1192px]:pt-16 max-[1192px]:mr-0 max-[1192px]:hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
      </div>
       <p className="max-w-[580px] text-p order-1 mr-auto max-[460px]:pr-12 pr-19 hidden max-[1192px]:block max-[1192px]:order-3 max-[1192px]:pt-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
    </div>
  );
};

// _______________________________________________________________

// yang lama (sebelum di kasih hover effect)

// import { Link } from "react-router-dom";

// export const Area4 = () => {
//   return (
//     <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center grid justify-items-end mt-[248px] px-20 max-[768px]:px-14 max-[480px]:px-8 max-[1192px]:w-fit max-[1192px]:justify-self-end max-[940px]:w-full max-[940px]:justify-self-stretch">
//         <h2 className="text-h2 max-[640px]:text-h2-2 max-[320px]:text-h2-3 text-black font-medium pb-7">Our Features</h2>
//         <div className="flex flex-nowrap items-end max-[1192px]:flex-wrap max-[940px]:w-full">
//         <Link to="/trackanalysis" className="order-2 pr-15 max-[1192px]:order-1 max-[940px]:w-full max-[940px]:pr-0 max-[940px]:pb-16 max-[768px]:pb-12 max-[520px]:pb-9">
//           <div className="relative w-90 max-[940px]:w-full h-[560px] max-[940px]:h-[400px] bg-cover bg-bottom"
//             style={{
//               backgroundImage: "url('/pexels-zachtheshoota-2067689.jpg')",
//             }}
//           >
//             <h3 className="text-h3 text-white font-medium px-8 pb-14 absolute bottom-0">Track Analysis</h3>
//           </div>
//         </Link>
//         <Link to="/rapbattle" className="order-3 max-[1192px]:order-2 max-[940px]:w-full">
//           <div className="relative w-90 max-[940px]:w-full h-[560px] max-[940px]:h-[400px] bg-cover bg-center"
//             style={{
//               backgroundImage: "url('/pexels-din-127253222-14853507.jpg')",
//             }}
//           >
//             <h3 className="text-h3 text-white font-medium px-8 pb-14 absolute bottom-0">Rap Battle</h3>
//           </div>
//         </Link>
//         <p className="max-w-[580px] order-1 mr-auto pr-19 max-[1192px]:order-3 max-[1192px]:pt-16 max-[1192px]:mr-0 max-[1192px]:hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
//       </div>
//        <p className="max-w-[580px] order-1 mr-auto max-[460px]:pr-12 pr-19 hidden max-[1192px]:block max-[1192px]:order-3 max-[1192px]:pt-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
//     </div>
//   );
// };