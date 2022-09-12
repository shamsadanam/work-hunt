import { useField } from "formik";

const formLabelClasses = "py-2";
const formFieldClasses = "border-2 border-stone-600 rounded-lg p-2";

const CustomInput = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <>
      <label className={formLabelClasses} htmlFor={label}>
        {label}
      </label>
      <input {...props} {...field} className={formFieldClasses} />
    </>
  );
};

export default CustomInput;
