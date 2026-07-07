export const TitleAndArtist = ({ title, artist }) => {
  return (
    <div className="p-6 bg-[#f0f0f0]">
      <p className="text-h3 font-medium text-black">{title || "Unknown Title"}</p>
      <p className="text-p text-black mt-1">{artist || "Unknown Artist"}</p>
    </div>
  );
};