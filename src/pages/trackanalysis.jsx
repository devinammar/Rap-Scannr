import { useHideOnScroll } from '../hooks/useHideOnScroll'
import { Topbar } from '../components/topbar'
import { Sidebar } from '../components/sidebar'
import { Area1 } from '../components/trackanalysis/area1'

export const Trackanalysis = () => {
    const hidden = useHideOnScroll();
  return (
    <div className="relative">
      <Topbar hidden={hidden} />
      <Sidebar hidden={hidden} />
      <Area1 />
    </div>
  );
};
