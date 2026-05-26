import { Topbar } from '../components/topbar'
import { Sidebar } from '../components/sidebar'
import { Area1 } from '../components/home/area1'
import { Area2 } from '../components/home/area2'

export const Home = () => {
    return (
        <div className="relative">
            <Topbar />
            <Sidebar />
            <Area1 />
            <Area2 />
        </div>
    )
}