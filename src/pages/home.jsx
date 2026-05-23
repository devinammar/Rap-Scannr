import { Topbar } from '../components/topbar'
import { Sidebar } from '../components/sidebar'
import { Area1 } from '../components/home/area1'

export const Home = () => {
    return (
        <div className="relative">
            <Topbar />
            <Sidebar />
            <Area1 />
        </div>
    )
}