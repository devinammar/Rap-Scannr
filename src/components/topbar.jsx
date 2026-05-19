import { Link } from "react-router-dom";

export const Topbar = () => {
    return (
        <div>
        <ul id="containertopbar" className="flex justify-center t-0 list-none text-p bg-grey/40 font-medium gap-40 pt-4 pb-4">
            <li className="listtopbar hover:text-white hover:scale-[1.03] transition-transform duration-200 ease">
                <Link to="/">Home</Link>
            </li>
            <li className="listtopbar hover:text-white hover:scale-[1.03] transition-transform duration-200 ease">
                <Link to="/search">Track Analysis</Link>
            </li>
            <li className="listtopbar hover:text-white hover:scale-[1.03] transition-transform duration-200 ease">
                <Link to="/searchbyimage">Rap Battle</Link>
            </li>
            <li className="listtopbar hover:text-white hover:scale-[1.03] transition-transform duration-200 ease">
                <Link to="/about">Profile</Link>
            </li>
        </ul>
        </div>
    )
}