import { Staticbanner } from '../staticbanner'
import { Searchbar } from '../searchbar'

export const Area1 = () => {
    return (
        <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center mt-[10vh]">
            <Staticbanner image="/pexels-din-127253222-14853507.jpg" className="relative" />
            <div className="z-10 absolute justify-self-center top-48 max-[1280px]:top-35 max-[1024px]:top-28 max-[640px]:top-33 max-[530px]:top-38 w-full max-w-[1920px]">
            <h2 className="flex justify-center text-h2 max-[640px]:text-h2-2 max-[530px]:text-h2-3 text-white font-medium pb-11">Rap Battle</h2> {/* max-[430px]:px-[16vw] */}
            <Searchbar showButton={false} />
            <h3 className="text-h3 text-black font-medium text-center py-8">VS</h3>
            <Searchbar showButton={false} />
            <p className="text-p text-black pt-9 pl-[15vw] min-[1920px]:pl-[288px] min-[1920px]:w-[960px] max-[1920px]:w-[calc(100vw-50vw)] max-[1522px]:w-[calc(100vw-40vw)] max-[1188px]:w-[calc(100vw-30vw)] max-[1154px]:pl-0 max-[1154px]:w-[calc(100vw-30vw)] max-[1154px]:mx-auto max-[1154px]:text-center">Explore rap flow, lyrical cadence, and vocal delivery through interactive track analysis, flow visualization, and peak speed tracking</p> {/* pl-[15vw] */}
            </div>
        </div>
    )
}
