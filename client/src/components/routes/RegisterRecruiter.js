import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { registerRecruiter } from "../../actions";
import { Formik, Form } from "formik";
import CustomInput from "../CustomInput";
import CustomSelect from "../CustomSelect";
import CustomTextArea from "../CustomTextArea";
import CustomLocation from "../CustomLocation";
import { recruiterSchema } from "../../schemas";

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
            <Form className={formClasses}>
              <CustomInput
                label="First Name"
                name="firstName"
                placeholder="Enter your first name"
              />
              <CustomInput
                label="Last Name"
                name="lastName"
                placeholder="Enter your last name"
              />
              <CustomInput
                label="Job Title"
                name="jobTitle"
                placeholder="Enter your job title/post/designation"
              />
              <CustomInput
                label="Company"
                name="company"
                placeholder="Enter you company name"
              />
              <CustomSelect label="Company Type" name="industryType">
                <option value="">Please Select a Type</option>
                <option value="govt">Government</option>
                <option value="private">Private</option>
              </CustomSelect>
              <CustomInput
                label="Location"
                name="location"
                placeholder="Enter Your Company Location"
              />
              <CustomLocation />
              <CustomTextArea
                label="Company Description"
                name="companyDesc"
                placeholder="Write about your compnay in 250 words"
              />
              <button
                disabled={isSubmitting}
                type="submit"
                className={isSubmitting ? formBtnDisabled : formBtn}
              >
                Submit
              </button>
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
