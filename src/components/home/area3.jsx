import { motion } from "framer-motion";
import {
  scrollProps,
  fadeIn,
  fadeRight,
  fadeLeft,
  zoomIn,
} from "../../animations/scrollAnimations";

export const Area3 = () => {
  return (
    <div className="gap-15 max-[1024px]:gap-12 max-[768px]:gap-8 max-[640px]:gap-5 w-[calc(100vw-160px)] max-w-[calc(1920px-160px)] max-[768px]:w-[calc(100vw-112px)] max-[480px]:w-[calc(100vw-64px)] min-[1920px]:w-[1920px] min-[1920px]:justify-self-center max-[1920px]:mx-20 min-[1920px]:mx-20 max-[768px]:mx-14 max-[480px]:mx-8 mt-62 max-[1024px]:mt-52 max-[768px]:mt-46 grid grid-cols-[minmax(0,560px)_minmax(0,292px)] grid-rows-[auto_auto]">
      <motion.img src="/imagearea3-1.png" {...scrollProps}
        variants={zoomIn} className="w-full" />
      <motion.img src="/imagearea3-2.png" {...scrollProps}
        variants={zoomIn} className="w-full self-end" />
      <motion.img src="/imagearea3-3.png" {...scrollProps}
        variants={zoomIn} className="w-full max-w-[560px] col-span-2 justify-self-end" />
    </div>
  );
};
