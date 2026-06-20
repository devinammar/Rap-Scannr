import { Staticbanner } from '../staticbanner'
import { Searchbar } from '../searchbar'

export const Area1 = () => {
    return (
        <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center">
            <h2 className="flex justify-center text-h2 max-[640px]:text-h2-2 max-[320px]:text-h2-3 text-black font-medium">Track Analysis</h2>
            <Staticbanner />
            <Searchbar showButton={true} />
            <p className="text-p text-black">Explore rap flow, lyrical cadence, and vocal delivery through interactive track analysis, flow visualization, and peak speed tracking</p>
            <Staticbanner />
            <Staticbanner />
            <Staticbanner />
            <Staticbanner />
        </div>
    )
}