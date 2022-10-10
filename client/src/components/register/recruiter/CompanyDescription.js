import { useField } from "formik";
import CustomTextArea from "../../CustomTextArea";

const formClasses =
  "w-96 mx-auto my-5 p-5 border-2 rounded-lg shadow-lg flex flex-col justify-center bg-stone-200";
const formBtnLeft =
  "p-3 my-5 border-2 rounded-xl bg-stone-500 text-stone-100 hover:bg-stone-700 w-2/5";
const formBtnRight =
  "p-3 my-5 border-2 rounded-xl bg-stone-800 text-stone-100 hover:bg-stone-900 w-2/5 ml-auto";
const formBtnDisabled = `${formBtnRight} opacity-50`;

const CompanyDescription = () => {
  const [meta] = useField();
  return (
    <div className={formClasses}>
      <h1 className="h4 text-center">Company Description</h1>
      <CustomTextArea
        label="Company Description"
        name="companyDesc"
        placeholder="Write about your compnay in 250 words"
      />
      <div className="flex">
        <button className={formBtnLeft}>Previous</button>
        <button
          disabled={meta.isSubmitting}
          type="submit"
          className={meta.isSubmitting ? formBtnDisabled : formBtnRight}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CompanyDescription;
