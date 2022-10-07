import { useField } from "formik";
import CustomTextArea from "../../CustomTextArea";

const formClasses =
  "w-96 mx-auto my-5 p-5 border-2 rounded-lg shadow-lg flex flex-col justify-center bg-stone-200";
const CompanyDescription = () => {
  const [field, meta] = useField();
  return (
    <div className={formClasses}>
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
    </div>
  );
};

export default CompanyDescription;
