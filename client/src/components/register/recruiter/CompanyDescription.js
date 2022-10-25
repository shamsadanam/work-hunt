import { useField } from "formik";
import CustomTextArea from "../../CustomTextArea";

const CompanyDescription = () => {
  const [meta] = useField();
  return (
    <>
      <h1 className="h4 text-center">Company Description</h1>
      <CustomTextArea
        label="Company Description"
        name="companyDesc"
        placeholder="Write about your compnay in 250 words"
      />
    </>
  );
};

export default CompanyDescription;
