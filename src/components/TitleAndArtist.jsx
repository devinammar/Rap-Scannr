export const TitleAndArtist = ({ title, artist }) => {
  return (
    <div className="px-10 py-7 bg-black">
      <p className="text-h3 font-medium text-white">{title || "Unknown Title"}</p>
      <p className="text-p text-white mt-1">{artist || "Unknown Artist"}</p>
    </div>
  );
};