import { Link } from "react-router-dom";

export const Area4 = () => {
  return (
    <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center grid justify-items-end mt-[248px]">
        <h2 className="text-h2 text-black font-medium pb-7">Our Features</h2>
        <div className="flex flex-wrap items-end w-full justify-between">
        <Link className="order-2 pr-15">
          <div className="relative w-90 h-[560px] bg-cover bg-bottom"
            style={{
              backgroundImage: "url('/pexels-zachtheshoota-2067689.jpg')",
            }}
          >
            <h3 className="text-h3 text-white font-medium pl-8 pb-14 absolute bottom-0">Track Analysis</h3>
          </div>
        </Link>
        <Link className="order-3">
          <div className="relative w-90 h-[560px] bg-cover bg-center"
            style={{
              backgroundImage: "url('/pexels-din-127253222-14853507.jpg')",
            }}
          >
            <h3 className="text-h3 text-white font-medium pl-8 pb-14 absolute bottom-0">Rap Battle</h3>
          </div>
        </Link>
        <p className="max-w-[420px] order-1 mr-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
      </div>
    </div>
  );
};
