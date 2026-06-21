export const Button = () => {
  const buttonp =
    "text-p text-white font-medium self-center ml-6 max-[480px]:ml-0";
  return (
    <button
      className="bg-black h-10 flex w-[222px] hover:bg-black/50 max-[768px]:w-[180px] max-[640px]:w-[160px] max-[480px]:w-full max-[480px]:justify-center"
      to="login"
    >
      <p className={`${buttonp} group-hover:text-black`}>Enter</p>
    </button>
  );
};
