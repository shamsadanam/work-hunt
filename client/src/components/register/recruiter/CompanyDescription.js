import { useField } from "formik";
import CustomTextArea from "../../CustomTextArea";

const formClasses =
  "w-96 mx-auto my-5 p-5 border-2 rounded-lg shadow-lg flex flex-col justify-center bg-stone-200";
const formBtn =
  "p-3 my-5 border-2 rounded-xl bg-stone-800 text-stone-100 hover:bg-stone-900";
const formBtnDisabled = `${formBtn} opacity-50`;

const CompanyDescription = () => {
  const [meta] = useField();
  return (
    <div className={formClasses}>
      <CustomTextArea
        label="Company Description"
        name="companyDesc"
        placeholder="Write about your compnay in 250 words"
      />
      <button
        disabled={meta.isSubmitting}
        type="submit"
        className={meta.isSubmitting ? formBtnDisabled : formBtn}
      >
        Submit
      </button>
    </div>
  );
};

export default CompanyDescription;
