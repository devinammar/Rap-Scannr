import { Link } from "react-router-dom";

export const Area1 = () => {

  const buttonp =
  "text-p text-white font-medium self-center ml-6"

  return (
    <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center">
      <div className="relative h-[60vh] max-h-[768px]">
        <img src="/banner1.png" className="absolute top-0 w-screen max-w-[1920px] h-full object-cover"/>
        <div className="absolute top-[80%] justify-self-center w-[calc(100vw-160px)] max-w-[calc(1920px-160px)]">
          <h1 className="[grid-area:h1] text-h1 font-medium mb-3">Rap Scannr</h1>
          <p className="[grid-area:p] text-p text-black w-[572px] mb-33">
            Explore rap flow, lyrical cadence, and vocal delivery through
            interactive track analysis, flow visualization, and peak speed tracking
          </p>
          <div className="[grid-area:button] flex gap-10 justify-self-end">
            <Link className="bg-black h-10 flex w-[222px] hover:bg-black/50" to="login">
              <p className={buttonp}>Login</p>
            </Link>
            <Link className="bg-grey h-10 flex w-[222px] hover:bg-grey/50 group" to="register">
              <p className={`${buttonp} group-hover:text-black`}>Register</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};