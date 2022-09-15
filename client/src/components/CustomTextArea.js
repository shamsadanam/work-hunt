import { useField } from "formik";

const formLabelClasses = "py-2";
const formFieldClasses = "border-2 border-stone-600 rounded-lg p-2";
const inputErr = "border-rose-600";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className={formLabelClasses} htmlFor={label}>
        {label}
      </label>
      <textarea
        {...props}
        {...field}
        className={`${formFieldClasses} ${
          meta.touched && meta.error ? inputErr : ""
        }`}
      />
      <p className="text-rose-600">{meta.touched && meta.error}</p>
    </>
  );
};

export default CustomInput;
