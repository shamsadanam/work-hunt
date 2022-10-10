import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { registerRecruiter } from "../../../actions";
import { Formik, Form } from "formik";
import PersonalInformation from "./PersonalInformation";
import CompanyInformation from "./CompanyInformation";
import CompanyDescription from "./CompanyDescription";

import { recruiterSchema } from "../../../schemas";

const RegisterRecruiter = ({ isSignedIn, currentUser, registerRecruiter }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const formSteps = [
    <PersonalInformation page={page} setPage={setPage} />,
    <CompanyInformation page={page} setPage={setPage} />,
    <CompanyDescription page={page} setPage={setPage} />,
  ];

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
          return <Form>{formSteps[page]}</Form>;
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
