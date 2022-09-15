import * as yup from "yup";

export const recruiterSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  jobTitle: yup.string().required("Required"),
  company: yup.string().required("Required"),
  industryType: yup.string().oneOf(["govt", "private"]).required("Required"),
  location: "",
  companyDesc: yup
    .string()
    .max(250, "Keep it under 250 characters")
    .required("Required"),
});
