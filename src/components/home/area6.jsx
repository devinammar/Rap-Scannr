import { Link } from "react-router-dom";

export const Area6 = () => {
    const buttonsendmassage = "text-p text-white font-medium self-center ml-6 max-[480px]:ml-0";
    const buttoncall = "text-p text-black font-medium self-center ml-6 max-[480px]:ml-0";
    const sublist = "text-p text-white";

  return (
    <div>
      <div id="imageleft">
        <Link>
          <img src="" />
        </Link>
      </div>
      <div className="bg-grey">
        <div id="list" className="flex gap-18">
          <div className="listarea1">
            <h3 className="text-h3 font-medium text-white pb-13">Company</h3>
            <ul className="flex flex-col gap-2">
              <li className={sublist}>
                <Link to="/">About Us</Link>
              </li>
              <li className={sublist}>
                <Link to="/">Partners</Link>
              </li>
              <li className={sublist}>
                <Link to="/">News</Link>
              </li>
              <li className={sublist}>
                <Link to="/">Shop</Link>
              </li>
            </ul>
          </div>
          <div className="listarea2">
            <h3 className="text-h3 font-medium text-white pb-13">Contact</h3>
            <ul className="flex flex-col gap-2">
              <li className={sublist}>
                <Link to="/">Github</Link>
              </li>
              <li className={sublist}>
                <Link to="/">Email</Link>
              </li>
              <li className={sublist}>
                <Link to="/">LinkedIn</Link>
              </li>
              <li className={sublist}>
                <Link to="/">Instagram</Link>
              </li>
            </ul>
          </div>
          <div className="listarea3">
            <h3 className="text-h3 font-medium text-white pb-13">Legal & Policy</h3>
            <ul className="flex flex-col gap-2">
              <li className={sublist}>
                <Link to="/">Privacy & Policy</Link>
              </li>
              <li className={sublist}>
                <Link to="/">Terms of Service</Link>
              </li>
              <li className={sublist}>
                <Link to="/">Cookie Policy</Link>
              </li>
              <li className={sublist}>
                <Link to="/">Lisence</Link>
              </li>
            </ul>
          </div>
          <div className="listarea4">
            <h3 className="text-h3 font-medium text-white pb-13">About</h3>
            <ul className="flex flex-col gap-2">
              <li className={sublist}>
                <Link to="/">About Rap Scannr</Link>
              </li>
              <li className={sublist}>
                <Link to="/">Features</Link>
              </li>
              <li className={sublist}>
                <Link to="/">How it Works</Link>
              </li>
              <li className={sublist}>
                <Link to="/">Tech Stack</Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="2button" className="flex gap-10 max-[480px]:gap-8">
          <Link
            className="bg-black h-10 flex w-[222px] hover:bg-white group max-[768px]:w-[180px] max-[640px]:w-[160px] max-[480px]:w-full max-[480px]:justify-center"
            to=""
          >
            <p className={`${buttonsendmassage} group-hover:text-black`}>Send Massage</p>
          </Link>
          <Link
            className="bg-white h-10 flex w-[222px] hover:bg-black group max-[768px]:w-[180px] max-[640px]:w-[160px] max-[480px]:w-full max-[480px]:justify-center"
            to=""
          >
            <p className={`${buttoncall} group-hover:text-white`}>Call Now</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
