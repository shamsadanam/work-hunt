import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { registerRecruiter } from "../../../actions";
import { Formik, Form } from "formik";
import PersonalInformation from "./PersonalInformation";
import CompanyInformation from "./CompanyInformation";
import CompanyDescription from "./CompanyDescription";
import CustomInput from "../../CustomInput";
import CustomSelect from "../../CustomSelect";
import CustomTextArea from "../../CustomTextArea";
import CustomLocation from "../../CustomLocation";
import { recruiterSchema } from "../../../schemas";

const formClasses =
  "w-96 mx-auto my-5 p-5 border-2 rounded-lg shadow-lg flex flex-col justify-center bg-stone-200";
const formBtn =
  "p-3 my-5 border-2 rounded-xl bg-stone-800 text-stone-100 hover:bg-stone-900";
const formBtnDisabled = `${formBtn} opacity-50`;

const RegisterRecruiter = ({ isSignedIn, currentUser, registerRecruiter }) => {
  const navigate = useNavigate();

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
        {({ isSubmitting }) => {
          return (
            <Form>
              <PersonalInformation />
              <CompanyInformation />
              <CompanyDescription />
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
