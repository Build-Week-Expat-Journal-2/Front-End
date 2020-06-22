import * as yup from "yup";

const registerSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "first name must be at least 2 characters long")
    .required("Required"),
  username: yup
    .string()
    .min(4, "Username must be at least 4 characters long")
    .required("Required"),
    password: yup
    .string()
    .required('Required')
    .min(4, 'Password must be at least 4 characters long'),
    location: yup
    .string()
    .required('Required')
    .min(2, 'Location must be at least 2 characters long'),
});

export default registerSchema;