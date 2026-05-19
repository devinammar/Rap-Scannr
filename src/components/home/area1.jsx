import { Link } from "react-router-dom";

export const Area1 = () => {
  return (
    <div>
      <h1 className="text-h1 font-medium">Rap Scannr</h1>
      <p className="text-p font-black">
        Explore rap flow, lyrical cadence, and vocal delivery through
        interactive track analysis, flow visualization, and peak speed tracking
      </p>
      <button>
        <Link to="login">Login</Link>
      </button>
      <button>
        <Link to="register">Register</Link>
      </button>
    </div>
  );
};
