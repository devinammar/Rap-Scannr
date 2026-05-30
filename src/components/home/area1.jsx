import { Link } from "react-router-dom";

export const Area1 = () => {

  const buttonp =
  "text-p text-white font-medium self-center ml-6 max-[480px]:ml-0"

  return (
    <div className="h-screen [@media(min-height:1312px)]:h-[1080px] [@media(min-height:1312px)]:mb-33 min-[1920px]:w-[1920px] min-[1920px]:justify-self-center">
      <div className="relative h-[60vh] max-h-[768px]">
        <img src="/banner1.png" className="absolute top-0 w-full max-w-[1920px] h-full object-cover"/>
        <div className="absolute top-full -translate-y-[30%] [@media(min-height:800px)]:-translate-y-[24%] justify-self-center w-[calc(100vw-160px)] max-w-[calc(1920px-160px)] max-[768px]:w-[calc(100vw-112px)] max-[480px]:w-[calc(100vw-64px)]">
          <h1 className="[grid-area:area1h1] text-h1 font-medium mb-3 max-[1024px]:text-h1-2 max-[768px]:text-h1-3 max-[640px]:text-h2 max-[320px]:text-h2-2 max-[640px]:w-[346px] max-[480px]:w-[216px]">Rap Scannr</h1>
          <p className="[grid-area:area1p] text-p text-black w-[572px] mb-8 [@media(min-height:768px)]:mb-20 [@media(min-height:940px)]:mb-33 max-[860px]:w-[460px] max-[768px]:w-[346px] max-[480px]:w-[216px] max-[640px]:mb-19 max-[400px]:mb-12 max-[376px]:mb-5">
            Explore rap flow, lyrical cadence, and vocal delivery through
            interactive track analysis, flow visualization, and peak speed tracking
          </p>
          <div className="[grid-area:area1button] flex gap-10 justify-self-end max-[480px]:justify-self-center max-[480px]:gap-8 max-[480px]:w-[calc(100vw-64px)]">
            <Link className="bg-black h-10 flex w-[222px] hover:bg-black/50 max-[768px]:w-[180px] max-[640px]:w-[160px] max-[480px]:w-full max-[480px]:justify-center" to="login">
              <p className={buttonp}>Login</p>
            </Link>
            <Link className="bg-grey h-10 flex w-[222px] hover:bg-grey/50 group max-[768px]:w-[180px] max-[640px]:w-[160px] max-[480px]:w-full max-[480px]:justify-center" to="register">
              <p className={`${buttonp} group-hover:text-black`}>Register</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};