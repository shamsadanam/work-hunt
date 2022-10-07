import CustomInput from "../../CustomInput";

const formClasses =
  "w-96 mx-auto my-5 p-5 border-2 rounded-lg shadow-lg flex flex-col justify-center bg-stone-200";

const PersonalInformation = () => {
  return (
    <div className={formClasses}>
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
    </div>
  );
};

export default PersonalInformation;
