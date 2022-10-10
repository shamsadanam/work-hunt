import CustomInput from "../../CustomInput";
import CustomSelect from "../../CustomSelect";

const formClasses =
  "w-96 mx-auto my-5 p-5 border-2 rounded-lg shadow-lg flex flex-col justify-center bg-stone-200";
const formBtnLeft =
  "p-3 my-5 border-2 rounded-xl bg-stone-500 text-stone-100 hover:bg-stone-700 w-2/5";
const formBtnRight =
  "p-3 my-5 border-2 rounded-xl bg-stone-800 text-stone-100 hover:bg-stone-900 w-2/5 ml-auto";
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
      <div className="flex w-full">
        <button className={formBtnLeft}>Previous</button>
        <button className={formBtnRight}>Next</button>
      </div>
    </div>
  );
};

export default CompanyInformation;
