import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex min-h-[85vh]">
      <div className="min-h-full bg-slate-100 w-1/2 flex justify-center items-center">
        <Link
          to="/register/recruiter"
          className="bg-indigo-600 hover:bg-indigo-800 text-white p-3 border-5 rounded-lg"
        >
          Are you Recruiting ?
        </Link>
      </div>
      <div className="min-h-full bg-indigo-600 w-1/2 flex justify-center items-center">
        <Link
          to="/register/applicant"
          className="bg-slate-200 hover:bg-slate-50 p-3 border-5 rounded-lg"
        >
          Are you Searching for Jobs?
        </Link>
      </div>
    </div>
  );
};

export default connect(null, null)(Register);
