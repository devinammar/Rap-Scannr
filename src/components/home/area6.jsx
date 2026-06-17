import { Link } from "react-router-dom";

export const Area6 = () => {
  return (
    <div>
      <div id="imageleft">
        <Link>
          <img src="" />
        </Link>
      </div>
      <div>
        <div id="list">
          <div className="listarea1">
            <h2 className="h2">Company</h2>
            <ul>
              <li className="listabout">
                <Link to="/">About Us</Link>
              </li>
              <li className="listabout">
                <Link to="/">Partners</Link>
              </li>
              <li className="listabout">
                <Link to="/">News</Link>
              </li>
              <li className="listabout">
                <Link to="/">Shop</Link>
              </li>
            </ul>
          </div>
          <div className="listarea2">
            <h2 className="h2">Contact</h2>
            <ul>
              <li className="listabout">
                <Link to="/">Github</Link>
              </li>
              <li className="listabout">
                <Link to="/">Email</Link>
              </li>
              <li className="listabout">
                <Link to="/">LinkedIn</Link>
              </li>
              <li className="listabout">
                <Link to="/">Instagram</Link>
              </li>
            </ul>
          </div>
          <div className="listarea3">
            <h2 className="h2">Legal & Policy</h2>
            <ul>
              <li className="listabout">
                <Link to="/">Privacy & Policy</Link>
              </li>
              <li className="listabout">
                <Link to="/">Terms of Service</Link>
              </li>
              <li className="listabout">
                <Link to="/">Cookie Policy</Link>
              </li>
              <li className="listabout">
                <Link to="/">Lisence</Link>
              </li>
            </ul>
          </div>
          <div className="listarea4">
            <h2 className="h2">About</h2>
            <ul>
              <li className="listabout">
                <Link to="/">About Rap Scannr</Link>
              </li>
              <li className="listabout">
                <Link to="/">Features</Link>
              </li>
              <li className="listabout">
                <Link to="/">How it Works</Link>
              </li>
              <li className="listabout">
                <Link to="/">Tech Stack</Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="2button">
          <Link
            className="bg-black h-10 flex w-[222px] hover:bg-black/50 max-[768px]:w-[180px] max-[640px]:w-[160px] max-[480px]:w-full max-[480px]:justify-center"
            to=""
          >
            <p className={buttonmassage}>Send Massage</p>
          </Link>
          <Link
            className="bg-grey h-10 flex w-[222px] hover:bg-grey/50 group max-[768px]:w-[180px] max-[640px]:w-[160px] max-[480px]:w-full max-[480px]:justify-center"
            to=""
          >
            <p className={`${buttoncall} group-hover:text-black`}>Call Now</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
