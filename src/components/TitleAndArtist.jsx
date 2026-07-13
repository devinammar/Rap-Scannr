import { motion } from "framer-motion";
import {
  scrollProps,
  fadeIn,
  fadeRight,
  fadeLeft,
  zoomIn,
} from "../animations/scrollAnimations";

export const TitleAndArtist = ({ title, artist }) => {
  return (
    <motion.div
      {...scrollProps}
      variants={zoomIn}
      className="w-full px-10 py-7 max-[560px]:px-8 max-[560px]:py-6 bg-black"
    >
      <p className="text-h3 font-medium text-white">
        {title || "Unknown Title"}
      </p>
      <p className="text-p text-white mt-1">{artist || "Unknown Artist"}</p>
    </motion.div>
  );
};
