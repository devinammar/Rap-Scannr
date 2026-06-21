export const Staticbanner = ({ image }) => {
  return (
    <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center h-[372px] max-[1280px]:h-[320px] max-[1024px]:h-[290px]">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />
    </div>
  );
};

// blm di pakein props yg bisa gnti gambar per page