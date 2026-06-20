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

// ini bikinan sendiri juga tapi diedit-edit lagi

import { Staticbanner } from '../staticbanner'
import { Searchbar } from '../searchbar'

export const Area1 = () => {
    return (
        <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center mt-[10vh]">
            <Staticbanner className="relative"/>
            <div className="z-10 absolute justify-self-center top-48 w-full max-w-[1920px]">
            <h2 className="flex justify-center text-h2 max-[640px]:text-h2-2 max-[320px]:text-h2-3 text-white font-medium pb-11">Track Analysis</h2>
            <Searchbar showButton={true} />
            <p className="text-p text-black pt-9 pl-[15vw] min-[1920px]:pl-[288px] min-[1920px]:w-[960px] max-[1920px]:w-[calc(100vw-50vw)]">Explore rap flow, lyrical cadence, and vocal delivery through interactive track analysis, flow visualization, and peak speed tracking</p> {/* pl-[15vw] */}
            </div>
        </div>
    )
}

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