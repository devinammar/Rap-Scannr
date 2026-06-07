import { Link } from "react-router-dom";

export const Area4 = () => {
  return (
    <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center grid justify-items-end mt-[248px] px-20 max-[768px]:px-14 max-[480px]:px-8 max-[1192px]:w-fit max-[1192px]:justify-self-end max-[940px]:w-full max-[940px]:justify-self-stretch">
        <h2 className="text-h2 text-black font-medium pb-7">Our Features</h2>
        <div className="flex flex-nowrap items-end max-[1192px]:flex-wrap max-[940px]:w-full">
        <Link className="order-2 pr-15 max-[1192px]:order-1 max-[940px]:w-full max-[940px]:pr-0 max-[940px]:pb-16">
          <div className="relative w-90 max-[940px]:w-full h-[560px] max-[940px]:h-[400px] bg-cover bg-bottom"
            style={{
              backgroundImage: "url('/pexels-zachtheshoota-2067689.jpg')",
            }}
          >
            <h3 className="text-h3 text-white font-medium pl-8 pb-14 absolute bottom-0">Track Analysis</h3>
          </div>
        </Link>
        <Link className="order-3 max-[1192px]:order-2 max-[940px]:w-full">
          <div className="relative w-90 max-[940px]:w-full h-[560px] max-[940px]:h-[400px] bg-cover bg-center"
            style={{
              backgroundImage: "url('/pexels-din-127253222-14853507.jpg')",
            }}
          >
            <h3 className="text-h3 text-white font-medium pl-8 pb-14 absolute bottom-0">Rap Battle</h3>
          </div>
        </Link>
        <p className="max-w-[580px] order-1 mr-auto pr-19 max-[1192px]:order-3 max-[1192px]:pt-16 max-[1192px]:mr-0 max-[1192px]:hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
      </div>
       <p className="max-w-[580px] order-1 mr-auto pr-19 hidden max-[1192px]:block max-[1192px]:order-3 max-[1192px]:pt-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
    </div>
  );
};