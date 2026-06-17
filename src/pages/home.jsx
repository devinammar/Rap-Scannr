import { useHideOnScroll } from '../hooks/useHideOnScroll'
import { Topbar } from '../components/topbar'
import { Sidebar } from '../components/sidebar'
import { Area1 } from '../components/home/area1'
import { Area2 } from '../components/home/area2'
import { Area3 } from '../components/home/area3'
import { Area4 } from '../components/home/area4'
import { Area5 } from '../components/home/area5'
import { Area6 } from '../components/home/area6'

export const Home = () => {
    const hidden = useHideOnScroll();
    return (
        <div className="relative">
            <Topbar hidden={hidden} />
            <Sidebar hidden={hidden} />
            <Area1 />
            <Area2 />
            <Area3 />
            <Area4 />
            <Area5 />
            <Area6 />
        </div>
    )
}