import { Link } from "react-router-dom";

export const Topbar = () => {
    return (
        <div>
        <ul id="containertopbar">
            <li className="listtopbar">
                <Link to="/">Home</Link>
            </li>
            <li className="listtopbar">
                <Link to="/search">Track Analysis</Link>
            </li>
            <li className="listtopbar">
                <Link to="/searchbyimage">Rap Battle</Link>
            </li>
            <li className="listtopbar">
                <Link to="/about">Profile</Link>
            </li>
        </ul>
        </div>
    )
}