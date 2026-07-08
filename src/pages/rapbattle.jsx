import { useState } from "react";
import { useHideOnScroll } from "../hooks/useHideOnScroll";
import { Topbar } from "../components/topbar";
import { Sidebar } from "../components/sidebar";
import { Area1 } from "../components/rapbattle/area1";
import { Area2 } from "../components/rapbattle/area2";

export const Rapbattle = () => {
  const hidden = useHideOnScroll();
  const [submittedUrls, setSubmittedUrls] = useState(null);

  return (
    <div className="relative">
      <Topbar hidden={hidden} />
      <Sidebar hidden={hidden} />
      <Area1 onCompare={setSubmittedUrls} />
      <Area2 submittedUrls={submittedUrls} />
    </div>
  );
};

// __________________________________________________________

// ini yg lama

// import { useHideOnScroll } from '../hooks/useHideOnScroll'
// import { Topbar } from '../components/topbar'
// import { Sidebar } from '../components/sidebar'
// import { Area1 } from '../components/rapbattle/area1'

// export const Rapbattle = () => {
//     const hidden = useHideOnScroll();
//   return (
//     <div className="relative">
//       <Topbar hidden={hidden} />
//       <Sidebar hidden={hidden} />
//       <Area1 />
//     </div>
//   );
// };
