import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { registerRecruiter } from "../../../actions";
import { Formik, Form } from "formik";
import PersonalInformation from "./PersonalInformation";
import CompanyInformation from "./CompanyInformation";
import CompanyDescription from "./CompanyDescription";

import { recruiterSchema } from "../../../schemas";

const RegisterRecruiter = ({
  isSignedIn,
  currentUser,
  registerRecruiter,
  id,
}) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const formSteps = [
    <PersonalInformation page={page} setPage={setPage} />,
    <CompanyInformation page={page} setPage={setPage} />,
    <CompanyDescription page={page} setPage={setPage} />,
  ];

  const formBtnLeft =
    "p-3 my-5 border-2 rounded-xl bg-stone-500 text-stone-100 hover:bg-stone-700 w-2/5";
  const formBtnRight =
    "p-3 my-5 border-2 rounded-xl bg-stone-800 text-stone-100 hover:bg-stone-900 w-2/5 ml-auto";

  const renderForm = (page) => {
    switch (page) {
      case 0: {
        return <PersonalInformation />;
      }
      case 1: {
        return <CompanyInformation />;
      }
      case 2: {
        return <CompanyDescription />;
      }
      default:
        <PersonalInformation />;
    }
  };

  useEffect(() => {
    !isSignedIn && navigate("/");
  });

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: isSignedIn ? currentUser.email : "",
          company: "",
          jobTitle: "",
          location: "",
          industryType: "",
          companyDesc: "",
        }}
        validationSchema={recruiterSchema}
        onSubmit={async (values, actions) => {
          await registerRecruiter(values);
          actions.resetForm();
          navigate("/feeds");
        }}
      >
        {() => {
          return (
            <Form>
              {renderForm(page)}
              <div className="flex w-full">
                <button
                  className={formBtnLeft}
                  onClick={(page) => setPage(--page)}
                >
                  Previous
                </button>
                <button
                  className={formBtnRight}
                  onClick={(page) => setPage(++page)}
                >
                  Next
                </button>
              </div>
              <div className={id === "yes" ? "d-block" : "d-none"}></div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    currentUser: state.auth.currentUser,
  };
};

export default connect(mapStateToProps, { registerRecruiter })(
  RegisterRecruiter
);
