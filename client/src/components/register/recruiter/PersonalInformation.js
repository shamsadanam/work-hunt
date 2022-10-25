import CustomInput from "../../CustomInput";

const PersonalInformation = () => {
  return (
    <>
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
    </>
  );
};

export default PersonalInformation;
