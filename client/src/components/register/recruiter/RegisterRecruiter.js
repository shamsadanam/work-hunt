import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { registerRecruiter } from "../../../actions";
import { Formik, Form } from "formik";
import PersonalInformation from "./PersonalInformation";
import CompanyInformation from "./CompanyInformation";
import CompanyDescription from "./CompanyDescription";

import { recruiterSchema } from "../../../schemas";

const formClasses =
  "w-96 h-96 mx-auto my-5 p-5 border-2 rounded-lg shadow-lg flex flex-col justify-center bg-stone-200";

const formBtn = "p-3 my-5 border-2 rounded-xl w-1/2";

const formBtnLeft = `${formBtn} bg-stone-600 text-stone-100 hover:bg-stone-700`;

const formBtnRight = `${formBtn} bg-stone-800 text-stone-100 hover:bg-stone-900 ml-auto`;
const formBtnDisabled = `${formBtnRight} opacity-50`;

const RegisterRecruiter = ({ isSignedIn, currentUser, registerRecruiter }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  useEffect(() => {
    console.log(page);
  }, [page]);

  useEffect(() => {
    !isSignedIn && navigate("/");
  });

  const nextForm = (errors) => {
    if (!errors) {
      setPage((currentPage) =>
        currentPage == 2 ? currentPage : ++currentPage
      );
    }
  };
  const previousForm = () => {
    setPage((currentPage) => (currentPage == 0 ? currentPage : --currentPage));
  };

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
        {({ isSubmitting, errors }) => {
          return (
            <Form>
              <div className={formClasses}>
                {renderForm(page)}
                <div className="flex gap-3">
                  <button
                    type="button"
                    className={`${formBtnLeft} ${
                      page === 0 ? "cursor-not-allowed" : ""
                    }`}
                    onClick={previousForm}
                    disabled={page === 0 ? true : false}
                  >
                    Back
                  </button>
                  {page < 2 && (
                    <button
                      type="submit"
                      className={formBtnRight}
                      onClick={() => nextForm(errors)}
                    >
                      Next
                    </button>
                  )}
                  {page === 2 && (
                    <button
                      type="submit"
                      className={isSubmitting ? formBtnDisabled : formBtnRight}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
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

{
  /* <div className="flex">
<button className={formBtnLeft} onClick={() => setPage(--page)}>
  Previous
</button>
<button
  disabled={meta.isSubmitting}
  type="submit"
  className={meta.isSubmitting ? formBtnDisabled : formBtnRight}
>
  Submit
</button>
</div> */
}
