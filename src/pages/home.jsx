import { Topbar } from '../components/topbar'
import { Sidebar } from '../components/sidebar'
import { Area1 } from '../components/home/area1'
import { Area2 } from '../components/home/area2'
import { Area3 } from '../components/home/area3'

export const Home = () => {
    return (
        <div className="relative">
            <Topbar />
            <Sidebar />
            <Area1 />
            <Area2 />
            <Area3 />
        </div>
    )
}