import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Area5 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonp = "text-p text-white font-medium self-center ml-0 max-[480px]:ml-0";

  return (
    <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center mt-62 max-[1024px]:mt-52 max-[768px]:mt-46">
      <div
        className="w-full h-[372px] max-[1280px]:h-[320px] max-[1024px]:h-[290px] max-[1080px]:h-[260px] max-[768px]:h-[240px] bg-cover bg-center"
        style={{ backgroundImage: "url('/pexels-zachtheshoota-2067689.jpg')" }}>
      </div>
      <div className="flex px-20 max-[768px]:px-14 max-[480px]:px-8 pt-15 max-[768px]:justify-between max-[768px]:flex-col">
        <div className="flex gap-16 order-1 max-[768px]:order-1 max-[768px]:pb-10 items-start">
      <button className="w-16">
        <img src="/previous.png" alt="previous" />
      </button>
      <button className="w-16">
        <img src="/next.png" alt="next" />
      </button>
      </div>
      <div className="order-2 max-[768px]:order-2 ml-80 max-[1720px]:ml-74 max-[1480px]:ml-60 max-[1280px]:ml-50 max-[1030px]:ml-40 max-[768px]:ml-0">
        <p className="pb-10">tes</p>
        <Link className="bg-black h-10 flex w-[222px] hover:bg-black/50 max-[768px]:w-[180px] max-[640px]:w-[160px] max-[480px]:w-full justify-center" to="about">
          <p className={buttonp}>Learn More</p>
        </Link>
        </div>
      </div>
    </div>
  );
};