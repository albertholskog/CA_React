import * as yup from "yup";

export const schema = yup
  .object({
    fullName: yup.string().min(3, "Minimum three characters long").required(),
    email: yup.string().email("Need to be a valid email address").required(),
    subject: yup.string().min(3, "Minimum three characters long").required(),
    message: yup.string().min(3, "Minimum three characters long").required(),
  })
  .required();
