import { Staticbanner } from '../staticbanner'
import { Searchbar } from '../searchbar'

export const Area1 = () => {
    return (
        <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center">
            <Staticbanner />
            <Staticbanner />
            <Staticbanner />
            <Staticbanner />
            <Staticbanner />
            <Searchbar />
        </div>
    )
}