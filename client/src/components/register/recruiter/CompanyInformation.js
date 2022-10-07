import CustomInput from "../../CustomInput";
import CustomSelect from "../../CustomSelect";

const formClasses =
  "w-96 mx-auto my-5 p-5 border-2 rounded-lg shadow-lg flex flex-col justify-center bg-stone-200";
const CompanyInformation = () => {
  return (
    <div className={formClasses}>
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
    </div>
  );
};

export default CompanyInformation;
