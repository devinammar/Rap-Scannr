export const Searchbar = ({
  value,
  onChange,
  onSearch,
  showButton = true,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div
      id="searchbarcontainer"
      className="min-[1920px]:w-[1344px] w-[calc(100vw-30vw)] relative flex justify-center mx-auto"
    >
      <input
        className="w-full h-13 bg-white shadow-[inset_0_0_0_4px_#1D1D1D] outline-none pl-8 max-[640px]:pl-6 text-black placeholder:text-grey"
        type="text"
        placeholder="Paste the music link to this bar..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {showButton && (
        <button
          id="buttonsearch"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-22 h-9 bg-black hover:bg-black/50"
          onClick={onSearch}
        >
          <p className="text-p text-white">
            Search
          </p>
        </button>
      )}
    </div>
  );
};

// __________________________________________________________

// ini yg lama (blm ada onClick dan lain-lain)

// export const Searchbar = ({ showButton = true }) => {
//   return (
//     <div
//       id="searchbarcontainer"
//       className="min-[1920px]:w-[1344px] w-[calc(100vw-30vw)] relative flex justify-center mx-auto"
//     > {/* min-[1920px]:w-[calc(1920px-30vw)] */}
//       <input
//         className="w-full h-13 bg-white shadow-[inset_0_0_0_4px_#1D1D1D] outline-none pl-8 max-[640px]:pl-6 text-black placeholder:text-grey"
//         type="text"
//         placeholder="Paste the music link to this bar..."
//       />
//       {showButton && (
//         <button
//           id="buttonsearch"
//           className="absolute right-2 top-1/2 -translate-y-1/2 w-22 h-9 bg-black hover:bg-black/50"
//         >
//           <p className="text-p text-white">search</p>
//         </button>
//       )}
//     </div>
//   );
// };
