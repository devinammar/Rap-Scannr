import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Area5 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonp = "text-p text-white font-medium self-center ml-0 max-[480px]:ml-0";

  return (
    <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center mt-61">
      <div
        className="w-full h-[372px] bg-cover bg-center"
        style={{ backgroundImage: "url('/pexels-zachtheshoota-2067689.jpg')" }}>
      </div>
      <button id="previous" onClick={() => setIsOpen(!isOpen)}> {/* ini sama sekali blm bener */}
        <img src="/hamburgericon2.png" alt="previous" />
      </button>
      <button id="next" onClick={() => setIsOpen(!isOpen)}> {/* ini sama sekali blm bener */}
        <img src="/hamburgericon2.png" alt="next" />
      </button>
      <div>
        <p>tes</p>
        <Link className="bg-black h-10 flex w-[222px] hover:bg-black/50 max-[768px]:w-[180px] max-[640px]:w-[160px] max-[480px]:w-full justify-center" to="about">
          <p className={buttonp}>Learn More</p>
        </Link>
      </div>
    </div>
  );
};