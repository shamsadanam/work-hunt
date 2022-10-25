import CustomInput from "../../CustomInput";
import CustomSelect from "../../CustomSelect";

const CompanyInformation = () => {
  return (
    <>
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
    </>
  );
};

export default CompanyInformation;
