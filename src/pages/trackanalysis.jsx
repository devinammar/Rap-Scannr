import { useState } from "react";
import { useHideOnScroll } from "../hooks/useHideOnScroll";
import { Topbar } from "../components/topbar";
import { Sidebar } from "../components/sidebar";
import { Area1 } from "../components/trackanalysis/area1";
import { Area2 } from "../components/trackanalysis/area2";

export const Trackanalysis = () => {
  const hidden = useHideOnScroll();
  const [submittedUrl, setSubmittedUrl] = useState(null);

  return (
    <div className="relative">
      <Topbar hidden={hidden} />
      <Sidebar hidden={hidden} />
      <Area1 onSearch={setSubmittedUrl} />
      <Area2 url={submittedUrl} />
    </div>
  );
};

// __________________________________________________________

// ini yg lama

// import { useHideOnScroll } from '../hooks/useHideOnScroll'
// import { Topbar } from '../components/topbar'
// import { Sidebar } from '../components/sidebar'
// import { Area1 } from '../components/trackanalysis/area1'

// export const Trackanalysis = () => {
//     const hidden = useHideOnScroll();
//   return (
//     <div className="relative">
//       <Topbar hidden={hidden} />
//       <Sidebar hidden={hidden} />
//       <Area1 />
//     </div>
//   );
// };
