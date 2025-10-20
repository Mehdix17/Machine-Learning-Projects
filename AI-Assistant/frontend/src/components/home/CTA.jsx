import { Link } from "react-router-dom";

function CTA() {
  return (
    <div className="hero bg-primary text-primary-content py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Ready to Boost Your Productivity?
        </h2>
        <p className="py-4">
          Start using AI Assistant today and save hours every week.
        </p>
        <Link to={"/login"} className="btn btn-accent">
          Sign Up Free
        </Link>
      </div>
    </div>
  );
}

export default CTA;
