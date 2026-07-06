import { useState } from "react";
import { Staticbanner } from "../staticbanner";
import { Searchbar } from "../searchbar";
import { compareSongs } from "../../services/api";

export const Area1 = () => {
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCompare = async () => {
    if (!url1 || !url2) return;

    try {
      setLoading(true);
      const data = await compareSongs(url1, url2);
      setResult(data);
      console.log("RESULT RAP BATTLE:", data);
    } catch (err) {
      console.error("ERROR:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center mt-[10vh]">
      <Staticbanner
        image="/pexels-din-127253222-14853507.jpg"
        className="relative"
      />
      <div className="z-10 absolute justify-self-center top-48 max-[1280px]:top-35 max-[1024px]:top-28 max-[640px]:top-33 max-[530px]:top-38 w-full max-w-[1920px]">
        <h2 className="flex justify-center text-h2 max-[640px]:text-h2-2 max-[530px]:text-h2-3 text-white font-medium pb-11">
          Rap Battle
        </h2>
        <Searchbar value={url1} onChange={setUrl1} showButton={false} />
        <h3 className="text-h3 text-black font-medium text-center py-8">
          VS
        </h3>
        <Searchbar value={url2} onChange={setUrl2} showButton={false} />
        <div className="mt-9 flex flex-row justify-between px-[15vw] min-[1920px]:px-[288px] gap-15 max-[812px]:flex-col max-[812px]:gap-8">
          <p className="text-p text-black min-[1920px]:w-[960px] max-[1920px]:w-[calc(100vw-50vw)] max-[1522px]:w-[calc(100vw-40vw)] max-[1188px]:w-[calc(100vw-30vw)] max-[1154px]:w-[calc(100vw-30vw)] max-[1154px]:mx-auto">
            Explore rap flow, lyrical cadence, and vocal delivery through interactive track analysis, flow visualization, and peak speed tracking
          </p>
          <button
            onClick={handleCompare}
            className="bg-black h-10 flex w-[222px] hover:bg-black/50 max-[812px]:w-full justify-center"
          >
            <p className="text-p text-white font-medium self-center">
              Enter
            </p>
          </button>
        </div>

        {loading && (
          <p className="text-white text-center mt-5">
            Loading battle...
          </p>
        )}

        {result && (
          <div className="text-white text-center mt-5">
            <p>Battle Result Ready</p>
            <p>Average Winner: {result.comparison.averageWinner}</p>
            <p>Peak Winner: {result.comparison.peakWinner}</p>
            <p>Diff Average: {result.comparison.averageDifference}</p>
          </div>
        )}

      </div>
    </div>
  );
};

// _______________________________________________________________________

// ini yg blm ada onClick dan lain-lain

// import { Staticbanner } from "../staticbanner";
// import { Searchbar } from "../searchbar";

// export const Area1 = () => {
//   const buttonp = "text-p text-white font-medium self-center";
//   return (
//     <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center mt-[10vh]">
//       <Staticbanner
//         image="/pexels-din-127253222-14853507.jpg"
//         className="relative"
//       />
//       <div className="z-10 absolute justify-self-center top-48 max-[1280px]:top-35 max-[1024px]:top-28 max-[640px]:top-33 max-[530px]:top-38 w-full max-w-[1920px]">
//         <h2 className="flex justify-center text-h2 max-[640px]:text-h2-2 max-[530px]:text-h2-3 text-white font-medium pb-11">
//           Rap Battle
//         </h2>
//         {/* max-[430px]:px-[16vw] */}
//         <Searchbar showButton={false} />
//         <h3 className="text-h3 text-black font-medium text-center py-8">VS</h3>
//         <Searchbar showButton={false} />
//         <div className="mt-9 flex flex-row justify-between px-[15vw] min-[1920px]:px-[288px] gap-15 max-[812px]:flex-col max-[812px]:gap-8">
//           <p className="text-p text-black min-[1920px]:w-[960px] max-[1920px]:w-[calc(100vw-50vw)] max-[1522px]:w-[calc(100vw-40vw)] max-[1188px]:w-[calc(100vw-30vw)] max-[1154px]:w-[calc(100vw-30vw)] max-[1154px]:mx-auto">
//             Explore rap flow, lyrical cadence, and vocal delivery through
//             interactive track analysis, flow visualization, and peak speed
//             tracking
//           </p>
//           {/* pl-[15vw] */}
//           <button
//             className="bg-black h-10 flex w-[222px] hover:bg-black/50 max-[812px]:w-full justify-center"
//             to="login"
//           >
//             <p className={`${buttonp} group-hover:text-black`}>Enter</p>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
