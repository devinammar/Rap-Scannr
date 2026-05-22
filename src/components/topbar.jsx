import { Link } from "react-router-dom";

export const Topbar = () => {
  const listtopbar =
    "hover:text-white hover:scale-[1.03] transition-transform duration-200 ease max-[768px]:hidden";

  return (
    <div>
      <ul
        id="containertopbar"
        className="flex justify-center t-0 list-none text-(--text-p) leading-none bg-grey/40 font-medium pt-4 pb-4 gap-40 min-[1360px]:gap-50 max-[1024px]:gap-25 max-[768px]:py-[23px]"
      >
        <li className={listtopbar}>
          <Link to="/">Home</Link>
        </li>
        <li className={listtopbar}>
          <Link to="/search">Track Analysis</Link>
        </li>
        <li className={listtopbar}>
          <Link to="/searchbyimage">Rap Battle</Link>
        </li>
        <li className={listtopbar}>
          <Link to="/about">Profile</Link>
        </li>
      </ul>
    </div>
  );
};
