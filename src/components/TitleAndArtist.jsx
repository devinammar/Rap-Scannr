export const TitleAndArtist = ({ title, artist }) => {
  return (
    <div className="w-full px-10 py-7 max-[560px]:px-8 max-[560px]:py-6 bg-black">
      <p className="text-h3 font-medium text-white">{title || "Unknown Title"}</p>
      <p className="text-p text-white mt-1">{artist || "Unknown Artist"}</p>
    </div>
  );
};