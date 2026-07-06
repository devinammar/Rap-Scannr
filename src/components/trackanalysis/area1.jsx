import { useState } from "react";
import { Staticbanner } from "../staticbanner";
import { Searchbar } from "../searchbar";
import { analyzeSong } from "../../services/api";

export const Area1 = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!url) return;

    try {
      setLoading(true);

      const data = await analyzeSong(url);

      setResult(data);

      console.log("RESULT TRACK ANALYSIS:", data);

    } catch (err) {
      console.error("ERROR:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center mt-[10vh]">
      <Staticbanner image="/pexels-zachtheshoota-2067689.jpg" className="relative" />

      <div className="z-10 absolute justify-self-center top-48 w-full max-w-[1920px]">

        <h2 className="flex justify-center text-h2 text-white font-medium pb-11">
          Track Analysis
        </h2>

        <Searchbar
          value={url}
          onChange={setUrl}
          onSearch={handleSearch}
          showButton={true}
        />

        {loading && (
          <p className="text-white text-center mt-5">
            Loading analysis...
          </p>
        )}

        {result && (
          <div className="text-white text-center mt-5">
            <p>{result.meta.title}</p>
            <p>{result.meta.artist}</p>
            <p>Average SPS: {result.stats.averageSPS}</p>
            <p>Peak SPS: {result.stats.peakSPS}</p>
          </div>
        )}

      </div>
    </div>
  );
};

// ___________________________________________________________

// ini yg blm ada onClick dan lain-lain

// import { Staticbanner } from '../staticbanner'
// import { Searchbar } from '../searchbar'

// export const Area1 = () => {
//     return (
//         <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center mt-[10vh]">
//             <Staticbanner image="/pexels-zachtheshoota-2067689.jpg" className="relative" />
//             <div className="z-10 absolute justify-self-center top-48 max-[1280px]:top-35 max-[1024px]:top-28 max-[640px]:top-33 max-[530px]:top-38 w-full max-w-[1920px]">
//             <h2 className="flex justify-center text-h2 max-[640px]:text-h2-2 max-[530px]:text-h2-3 text-white font-medium pb-11">Track Analysis</h2> {/* max-[430px]:px-[16vw] */}
//             <Searchbar showButton={true} />
//             <p className="text-p text-black pt-9 pl-[15vw] min-[1920px]:pl-[288px] min-[1920px]:w-[960px] max-[1920px]:w-[calc(100vw-50vw)] max-[1522px]:w-[calc(100vw-40vw)] max-[1188px]:w-[calc(100vw-30vw)] max-[1154px]:pl-0 max-[1154px]:w-[calc(100vw-30vw)] max-[1154px]:mx-auto max-[1154px]:text-center">Explore rap flow, lyrical cadence, and vocal delivery through interactive track analysis, flow visualization, and peak speed tracking</p> {/* pl-[15vw] */}
//             </div>
//         </div>
//     )
// }

// _____________________________________________________________

// ini bikinan sendiri, tapi diedit-edit lagi

// import { Staticbanner } from '../staticbanner'
// import { Searchbar } from '../searchbar'

// export const Area1 = () => {
//     return (
//         <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center mt-[5vh] relative w-full max-w-[1920px] mx-auto">
//             <Staticbanner className="relative"/>
//             <div className="z-10 absolute left-1/2 -translate-x-1/2 top-48 w-full max-w-[1920px] flex flex-col items-center">
//                 <h2 className="flex justify-center text-h2 max-[640px]:text-h2-2 max-[320px]:text-h2-3 text-black font-medium pb-11">
//                     Track Analysis
//                 </h2>
//                 <Searchbar showButton={true} />
//                 <p className="text-p text-black pt-9 w-[45%] min-[1920px]:w-[864px]">
//                     Explore rap flow, lyrical cadence, and vocal delivery through interactive track analysis, flow visualization, and peak speed tracking
//                 </p>
//             </div>
//         </div>
//     )
// }

// ___________________________________________________________

// ini bikinan sendiri (default)

// import { Staticbanner } from '../staticbanner'
// import { Searchbar } from '../searchbar'

// export const Area1 = () => {
//     return (
//         <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center mt-[5vh]">
//             <h2 className="flex justify-center text-h2 max-[640px]:text-h2-2 max-[320px]:text-h2-3 text-black font-medium">Track Analysis</h2>
//             <Staticbanner />
//             <Searchbar showButton={true} />
//             <p className="text-p text-black pl-[15vw] pt-9 min-[1920px]:w-[calc(1920px-30vw)] w-[calc(100vw-30vw)]">Explore rap flow, lyrical cadence, and vocal delivery through interactive track analysis, flow visualization, and peak speed tracking</p> {/* pl-[15vw] */}
//         </div>
//     )
// }