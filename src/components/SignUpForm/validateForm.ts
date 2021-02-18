import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().min(2).required("Required"),
  email: yup.string().email().required("Required"),
  password: yup
    .string()
    .min(8, "Please input your password! The password must be at least 8 characters!")
    .required("Required"),
  agree: yup
    .mixed()
    .required("Required")
    .test("", "", (value) => value === true),
});

export default schema;
