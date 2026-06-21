import { useHideOnScroll } from '../hooks/useHideOnScroll'
import { Topbar } from '../components/topbar'
import { Sidebar } from '../components/sidebar'

export const Profile = () => {
    const hidden = useHideOnScroll();
    return (
        <div className="relative">
            <Topbar hidden={hidden} />
            <Sidebar hidden={hidden} />
            <h1 className="text-h1 font-medium max-[1024px]:text-h1-2 text-center my-auto max-[768px]:text-h1-3 max-[640px]:text-h2 max-[320px]:text-h2-2 max-[640px]:w-[346px] max-[480px]:w-[216px] text-black">
              You must pay $10.000 to unlock this page
            </h1>
        </div>
    )
}